import { writeFileSync } from "fs";

const BASE_URL = "https://halaqah-id-be.vercel.app/api";
const ADMIN_EMAIL = "admin@mail.com";
const ADMIN_PASS = "admin123";

interface Santri {
  id_santri: number;
  nama: string;
}

interface Muhafiz {
  id_user: number;
  username: string;
  email: string;
}

interface TestResult {
  Scenario: string;
  Actor: string;
  TargetSantri: number | string;
  Expected: string;
  ActualStatus: number | string;
  Result: "PASS" | "FAIL";
  ErrorDetail?: string;
}

const results: TestResult[] = [];

async function login(email: string, password: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/halaqah/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error(`Login failed: ${res.status} ${res.statusText}`);
  const json = await res.json();
  return json.data.token;
}

async function impersonate(
  adminToken: string,
  userId: number
): Promise<string> {
  const res = await fetch(`${BASE_URL}/halaqah/auth/impersonate/${userId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${adminToken}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Impersonate failed for ${userId}: ${res.status} - ${txt}`);
  }
  const json = await res.json();
  return json.data.token;
}

async function getMuhafizList(token: string): Promise<Muhafiz[]> {
  const res = await fetch(`${BASE_URL}/halaqah/auth/muhafiz`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Failed to fetch muhafiz list: ${res.status}`);
  const json = await res.json();
  return json.data;
}

async function getSantriList(token: string): Promise<Santri[]> {
  const res = await fetch(`${BASE_URL}/santri`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Failed to fetch santri list: ${res.status}`);
  const json = await res.json();
  return json.data;
}

async function main() {
  console.log("Starting Verification for /api/setoran ...");

  try {
    // 1. Login as Superadmin
    console.log("Logging in as Superadmin...");
    const adminToken = await login(ADMIN_EMAIL, ADMIN_PASS);
    console.log("Admin logged in.");

    // 2. Get Muhafiz List
    console.log("Fetching Muhafiz list...");
    const muhafizList = await getMuhafizList(adminToken);
    console.log(`Found ${muhafizList.length} muhafiz.`);

    let muhafizA: { id: number; token: string; santri: Santri } | null = null;
    let muhafizB: { id: number; token: string; santri: Santri } | null = null;

    // 3. Find valid Muhafiz
    for (const m of muhafizList) {
      try {
        const token = await impersonate(adminToken, m.id_user);
        const santris = await getSantriList(token);

        if (santris.length > 0) {
          if (!muhafizA) {
            muhafizA = { id: m.id_user, token, santri: santris[0] };
          } else if (m.id_user !== muhafizA.id && !muhafizB) {
            muhafizB = { id: m.id_user, token, santri: santris[0] };
          }
        } else if (!muhafizB && muhafizA && m.id_user !== muhafizA.id) {
          // Check if we can use this as Muhafiz B even without santri,
          // but the constraint was "Pastikan Muhafiz B memiliki minimal 1 Santri".
          // So we skip if they don't have Santri.
        }

        if (muhafizA && muhafizB) break;
      } catch (e) {
        console.warn(`Error checking Muhafiz ${m.id_user}:`, e);
      }
    }

    if (!muhafizA || !muhafizB) {
      console.error(
        "FAILED PRE-REQUISITES: Could not find Muhafiz A and B with Santris."
      );
      if (!muhafizA) throw new Error("No Muhafiz A found");
      // If B is missing, we proceed but fail related tests?
      // Actually let's assume one of them works to get some results.
    } else {
      console.log(
        `Muhafiz A: ID ${muhafizA.id} (Santri ID: ${muhafizA.santri.id_santri})`
      );
      console.log(
        `Muhafiz B: ID ${muhafizB.id} (Santri ID: ${muhafizB.santri.id_santri})`
      );
    }

    const tokenA = muhafizA?.token || "";
    const santriAId = muhafizA?.santri.id_santri || 0;
    const tokenB = muhafizB?.token || "";

    // SCENARIO 1: Valid Input (Muhafiz A)
    await testScenario({
      Scenario: "Scenario 1: Valid Input (Muhafiz A)",
      Actor: "Muhafiz A",
      TargetSantri: santriAId,
      Expected: "201 Created",
      Token: tokenA,
      Payload: {
        santri_id: santriAId,
        juz: 30,
        surat: "An-Naba",
        ayat: "1-5",
        kategori: "HAFALAN",
        taqwim: "A",
        keterangan: "Lancar",
      },
      ExpectedStatus: 201,
    });

    // SCENARIO 2: Cross-Access Protection
    if (muhafizB) {
      await testScenario({
        Scenario: "Scenario 2: Cross-Access Protection",
        Actor: "Muhafiz B",
        TargetSantri: santriAId,
        Expected: "403 Forbidden",
        Token: tokenB,
        Payload: {
          santri_id: santriAId,
          juz: 30,
          surat: "An-Niasa",
          ayat: "1-5",
          kategori: "HAFALAN",
          taqwim: "B",
          keterangan: "Fail test",
        },
        ExpectedStatus: 403,
      });
    } else {
      results.push({
        Scenario: "Scenario 2: Cross-Access Protection",
        Actor: "Muhafiz B",
        TargetSantri: santriAId,
        Expected: "403 Forbidden",
        ActualStatus: "SKIPPED",
        Result: "FAIL",
        ErrorDetail: "Muhafiz B not found",
      });
    }

    // SCENARIO 3: Enum & Data Validation
    await testScenario({
      Scenario: "Scenario 3: Enum & Data Validation",
      Actor: "Muhafiz A",
      TargetSantri: santriAId,
      Expected: "400 Bad Request",
      Token: tokenA,
      Payload: {
        santri_id: santriAId,
        juz: 30,
        surat: "An-Naba",
        ayat: "1-5",
        kategori: "ZIDAYAH",
        taqwim: "A",
        keterangan: "Invalid enum test",
      },
      ExpectedStatus: 400,
    });

    // SCENARIO 4: Superadmin Power
    await testScenario({
      Scenario: "Scenario 4: Superadmin Power",
      Actor: "Superadmin",
      TargetSantri: santriAId,
      Expected: "201 Created",
      Token: adminToken,
      Payload: {
        santri_id: santriAId,
        juz: 29,
        surat: "Al-Mulk",
        ayat: "1-30",
        kategori: "MURAJAAH",
        taqwim: "A",
        keterangan: "Admin Input",
      },
      ExpectedStatus: 201,
    });

    // SCENARIO 5: Integrity Check
    await testScenario({
      Scenario: "Scenario 5: Integrity Check",
      Actor: "Muhafiz A",
      TargetSantri: 999999,
      Expected: "404 Not Found",
      Token: tokenA,
      Payload: {
        santri_id: 999999,
        juz: 30,
        surat: "An-Naba",
        ayat: "1",
        kategori: "HAFALAN",
        taqwim: "A",
        keterangan: "Invalid Santri",
      },
      ExpectedStatus: 404,
    });

    console.table(results);
    writeFileSync("test_report.json", JSON.stringify(results, null, 2));
  } catch (e: any) {
    console.error("Fatal execution error:", e);
  }
}

async function testScenario(params: {
  Scenario: string;
  Actor: string;
  TargetSantri: number | string;
  Expected: string;
  Token: string;
  Payload: any;
  ExpectedStatus: number;
}) {
  if (!params.Token) {
    results.push({
      Scenario: params.Scenario,
      Actor: params.Actor,
      TargetSantri: params.TargetSantri,
      Expected: params.Expected,
      ActualStatus: "NO TOKEN",
      Result: "FAIL",
      ErrorDetail: "Actor token is missing",
    });
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/setoran`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${params.Token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params.Payload),
    });

    let detail = "";
    try {
      const text = await res.text();
      detail = text;
    } catch {}

    if (res.status === params.ExpectedStatus) {
      results.push({
        Scenario: params.Scenario,
        Actor: params.Actor,
        TargetSantri: params.TargetSantri,
        Expected: params.Expected,
        ActualStatus: res.status,
        Result: "PASS",
        ErrorDetail: detail ? detail.substring(0, 50) : undefined,
      });
    } else {
      results.push({
        Scenario: params.Scenario,
        Actor: params.Actor,
        TargetSantri: params.TargetSantri,
        Expected: params.Expected,
        ActualStatus: res.status,
        Result: "FAIL",
        ErrorDetail: detail,
      });
    }
  } catch (e: any) {
    results.push({
      Scenario: params.Scenario,
      Actor: params.Actor,
      TargetSantri: params.TargetSantri,
      Expected: params.Expected,
      ActualStatus: "N/A",
      Result: "FAIL",
      ErrorDetail: e.message,
    });
  }
}

main();

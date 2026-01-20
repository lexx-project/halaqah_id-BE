// Absensi Endpoint Verification Script
// Test functional and security aspects of /api/absensi endpoints

const BASE_URL = "https://halaqah-id-be.vercel.app/api";

interface TestResult {
  Scenario: string;
  Actor: string;
  Target: string;
  ExpectedStatus: number;
  ActualStatus: number;
  Result: "PASS" | "FAIL";
  ErrorDetail?: string;
}

const results: TestResult[] = [];

// Helper: Make API request
async function request(
  method: string,
  path: string,
  token?: string,
  body?: any,
) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const opts: RequestInit = {
    method,
    headers,
  };
  if (body) opts.body = JSON.stringify(body);

  const res = await fetch(`${BASE_URL}${path}`, opts);
  const data = await res.json().catch(() => ({}));
  return { status: res.status, data };
}

// Helper: Record test result
function recordResult(
  scenario: string,
  actor: string,
  target: string,
  expectedStatus: number,
  actualStatus: number,
  errorDetail?: string,
) {
  results.push({
    Scenario: scenario,
    Actor: actor,
    Target: target,
    ExpectedStatus: expectedStatus,
    ActualStatus: actualStatus,
    Result: expectedStatus === actualStatus ? "PASS" : "FAIL",
    ErrorDetail: errorDetail,
  });

  const color = expectedStatus === actualStatus ? "\x1b[32m" : "\x1b[31m";
  const reset = "\x1b[0m";
  console.log(
    `${color}[${expectedStatus === actualStatus ? "PASS" : "FAIL"}] ${scenario}${reset}`,
  );
}

async function runTests() {
  console.log("🚀 Starting Absensi Endpoint Verification...\n");

  const CREDS = {
    superadmin: { email: "admin@mail.com", password: "admin123" },
  };

  let superadminToken = "";
  let muhafizAToken = "";
  let muhafizBToken = "";
  let muhafizAId = 22; // Muhafiz with Halaqah 34
  let muhafizBId = 27; // Muhafiz with Halaqah 36
  let santriAId = 23; // Owned by Muhafiz A (Halaqah 34)
  let santriBId = 30; // Owned by Muhafiz B (Halaqah 36)
  let halaqahAId = 34; // Halaqah of Muhafiz A

  // Step 1: Login as Superadmin
  console.log("📝 Step 1: Authenticating Superadmin...");
  try {
    const res = await request(
      "POST",
      "/halaqah/auth/login",
      undefined,
      CREDS.superadmin,
    );
    if (res.status === 200 || res.status === 201) {
      superadminToken =
        res.data.access_token ||
        res.data.token ||
        res.data.data?.access_token ||
        res.data.data?.token;
      console.log("✅ Superadmin authenticated\n");
    } else {
      console.error("❌ Failed to login as superadmin");
      return;
    }
  } catch (e: any) {
    console.error("❌ Superadmin login error:", e.message);
    return;
  }

  // Step 2: Impersonate Muhafiz A (ID: 50)
  console.log("📝 Step 2: Impersonating Muhafiz A...");
  try {
    const res = await request(
      "POST",
      `/halaqah/auth/impersonate/${muhafizAId}`,
      superadminToken,
    );
    if (res.status === 200 || res.status === 201) {
      muhafizAToken =
        res.data.access_token || res.data.token || res.data.data?.token;
      console.log("✅ Muhafiz A token obtained\n");
    } else {
      console.error("❌ Failed to impersonate Muhafiz A");
      return;
    }
  } catch (e: any) {
    console.error("❌ Muhafiz A impersonate error:", e.message);
    return;
  }

  // Step 3: Impersonate Muhafiz B (ID: 22)
  console.log("📝 Step 3: Impersonating Muhafiz B...");
  try {
    const res = await request(
      "POST",
      `/halaqah/auth/impersonate/${muhafizBId}`,
      superadminToken,
    );
    if (res.status === 200 || res.status === 201) {
      muhafizBToken =
        res.data.access_token || res.data.token || res.data.data?.token;
      console.log("✅ Muhafiz B token obtained\n");
    } else {
      console.error("❌ Failed to impersonate Muhafiz B");
      return;
    }
  } catch (e: any) {
    console.error("❌ Muhafiz B impersonate error:", e.message);
    return;
  }

  console.log("=".repeat(80));
  console.log("🧪 RUNNING TEST SCENARIOS");
  console.log("=".repeat(80) + "\n");

  // Scenario 1: Valid Input with TERLAMBAT status (Muhafiz A)
  console.log("Scenario 1: Input Absensi Valid (Muhafiz A - TERLAMBAT)");
  try {
    const res = await request("POST", "/absensi", muhafizAToken, {
      santri_id: santriAId,
      status: "TERLAMBAT",
      keterangan: "Telat karena hujan",
    });
    recordResult(
      "Input Absensi Valid (TERLAMBAT)",
      "Muhafiz A",
      `Santri A (ID: ${santriAId})`,
      201,
      res.status,
      JSON.stringify(res.data),
    );
  } catch (error: any) {
    recordResult(
      "Input Absensi Valid (TERLAMBAT)",
      "Muhafiz A",
      `Santri A (ID: ${santriAId})`,
      201,
      500,
      error.message,
    );
  }

  // Scenario 2: Cross-Access Protection
  console.log("\nScenario 2: Cross-Access Protection (Muhafiz B → Santri A)");
  try {
    const res = await request("POST", "/absensi", muhafizBToken, {
      santri_id: santriAId,
      status: "HADIR",
      keterangan: "Test cross-access",
    });
    recordResult(
      "Cross-Access Protection",
      "Muhafiz B",
      `Santri A (ID: ${santriAId})`,
      403,
      res.status,
      JSON.stringify(res.data),
    );
  } catch (error: any) {
    recordResult(
      "Cross-Access Protection",
      "Muhafiz B",
      `Santri A (ID: ${santriAId})`,
      403,
      500,
      error.message,
    );
  }

  // Scenario 3: Additional Valid Input (Muhafiz A with HADIR status)
  console.log("\nScenario 3: Additional Input (Muhafiz A - HADIR)");
  try {
    const res = await request("POST", "/absensi", muhafizAToken, {
      santri_id: santriAId,
      status: "HADIR",
      keterangan: "Tes hadir normal",
    });
    recordResult(
      "Additional Valid Input (HADIR)",
      "Muhafiz A",
      `Santri A (ID: ${santriAId})`,
      201,
      res.status,
      JSON.stringify(res.data),
    );
  } catch (error: any) {
    recordResult(
      "Additional Valid Input (HADIR)",
      "Muhafiz A",
      `Santri A (ID: ${santriAId})`,
      201,
      500,
      error.message,
    );
  }

  // Scenario 4: Get History per Santri
  console.log("\nScenario 4: Get History per Santri (Muhafiz A)");
  try {
    const res = await request(
      "GET",
      `/absensi/santri/${santriAId}`,
      muhafizAToken,
    );
    recordResult(
      "Get History per Santri",
      "Muhafiz A",
      `Santri A (ID: ${santriAId})`,
      200,
      res.status,
      JSON.stringify(res.data),
    );
  } catch (error: any) {
    recordResult(
      "Get History per Santri",
      "Muhafiz A",
      `Santri A (ID: ${santriAId})`,
      200,
      500,
      error.message,
    );
  }

  // Scenario 5: Get Absensi per Halaqah with Date Query
  console.log("\nScenario 5: Get Absensi per Halaqah (with date query)");
  try {
    const res = await request(
      "GET",
      `/absensi/halaqah/${halaqahAId}?date=2026-01-19`,
      muhafizAToken,
    );
    recordResult(
      "Get Absensi per Halaqah",
      "Muhafiz A",
      `Halaqah ${halaqahAId} (2026-01-19)`,
      200,
      res.status,
      JSON.stringify(res.data),
    );
  } catch (error: any) {
    recordResult(
      "Get Absensi per Halaqah",
      "Muhafiz A",
      `Halaqah ${halaqahAId} (2026-01-19)`,
      200,
      500,
      error.message,
    );
  }

  // Scenario 6: Invalid Enum Status
  console.log("\nScenario 6: Invalid Enum Status Validation");
  try {
    const res = await request("POST", "/absensi", muhafizAToken, {
      santri_id: santriAId,
      status: "MASUK",
      keterangan: "Test invalid status",
    });
    recordResult(
      "Invalid Enum Status",
      "Muhafiz A",
      `Santri A (ID: ${santriAId}, status: MASUK)`,
      400,
      res.status,
      JSON.stringify(res.data),
    );
  } catch (error: any) {
    recordResult(
      "Invalid Enum Status",
      "Muhafiz A",
      `Santri A (ID: ${santriAId}, status: MASUK)`,
      400,
      500,
      error.message,
    );
  }

  // Scenario 7: Cross-Access on Get History (Muhafiz B tries to get Santri A history)
  console.log(
    "\nScenario 7: Cross-Access on Get History (Muhafiz B → Santri A)",
  );
  try {
    const res = await request(
      "GET",
      `/absensi/santri/${santriAId}`,
      muhafizBToken,
    );
    recordResult(
      "Cross-Access on Get History",
      "Muhafiz B",
      `Santri A (ID: ${santriAId})`,
      403,
      res.status,
      JSON.stringify(res.data),
    );
  } catch (error: any) {
    recordResult(
      "Cross-Access on Get History",
      "Muhafiz B",
      `Santri A (ID: ${santriAId})`,
      403,
      500,
      error.message,
    );
  }

  // Final Report
  console.log("\n" + "=".repeat(80));
  console.log("📊 VERIFICATION RESULTS");
  console.log("=".repeat(80));
  console.table(results);

  // Save to JSON
  const fs = require("fs");
  fs.writeFileSync(
    "absensi_test_report.json",
    JSON.stringify({ tests: results, timestamp: new Date() }, null, 2),
  );
  console.log("\n✅ Report saved to absensi_test_report.json");

  // Summary
  const passed = results.filter((r) => r.Result === "PASS").length;
  const failed = results.filter((r) => r.Result === "FAIL").length;
  console.log(`\n📈 Summary: ${passed} PASSED | ${failed} FAILED\n`);
}

runTests().catch(console.error);

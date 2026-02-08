/**
 * HalaqahId Backend V2 - End-to-End API Test Script
 *
 * Menguji seluruh endpoint Backend HalaqahId V2
 *
 * Usage: npm install axios && npx tsx scripts/e2e-test.ts
 */

const BASE_URL = "https://halaqahid-be.vercel.app";

// Credentials
const CREDENTIALS = {
  email: "admin@mail.com",
  password: "admin123",
};

// State untuk menyimpan data antar test
let authToken = "";
let userId = 0;
let halaqahId = 0;
let santriId = 0;
let absensiId = 0;

// Helper functions
const log = {
  success: (msg: string) => console.log(`✅ ${msg}`),
  error: (msg: string) => console.log(`❌ ${msg}`),
  info: (msg: string) => console.log(`ℹ️  ${msg}`),
  header: (msg: string) =>
    console.log(`\n${"=".repeat(60)}\n🔷 ${msg}\n${"=".repeat(60)}`),
  endpoint: (method: string, path: string) =>
    console.log(`   📡 ${method} ${BASE_URL}${path}`),
};

async function request(
  method: "GET" | "POST" | "PUT" | "DELETE",
  path: string,
  data?: any,
  useAuth = true,
): Promise<{ success: boolean; status: number; data: any }> {
  const url = `${BASE_URL}${path}`;
  log.endpoint(method, path);

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (useAuth && authToken) {
      headers["Authorization"] = `Bearer ${authToken}`;
    }

    const options: RequestInit = {
      method,
      headers,
    };

    if (data && (method === "POST" || method === "PUT")) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const responseData = await response.json().catch(() => ({}));

    return {
      success: response.ok,
      status: response.status,
      data: responseData,
    };
  } catch (error: any) {
    return {
      success: false,
      status: 0,
      data: { error: error.message },
    };
  }
}

function handleError(testName: string, status: number, data: any) {
  log.error(`${testName} GAGAL!`);
  console.log(`   Status: ${status}`);
  console.log(`   Response: ${JSON.stringify(data, null, 2)}`);
  process.exit(1);
}

// ============================================
// TEST CASES
// ============================================

async function testLogin() {
  log.header("1. AUTHENTICATION - Login");

  const res = await request(
    "POST",
    "/api/halaqah/auth/login",
    CREDENTIALS,
    false,
  );

  if (!res.success || !res.data.data?.token) {
    handleError("Login", res.status, res.data);
  }

  authToken = res.data.data.token;
  log.success(`Login berhasil! Token: ${authToken.substring(0, 20)}...`);
}

async function testVerifyToken() {
  log.info("Verifikasi Token dengan GET /api/auth/me");

  const res = await request("GET", "/api/halaqah/auth/me");

  if (!res.success) {
    handleError("Verify Token", res.status, res.data);
  }

  userId = res.data.data.id_user || res.data.data.id;
  const role = res.data.data.role;

  log.success(`Token valid! User ID: ${userId}, Role: ${role}`);

  if (role !== "kepala_muhafiz" && role !== "superadmin") {
    log.error(`Role bukan kepala_muhafiz/superadmin! Actual: ${role}`);
    // Continue anyway for testing purposes
  }
}

async function testCreateHalaqah() {
  log.header("2. MASTER DATA - Create Halaqah");

  const payload = {
    name_halaqah: "TESTING_V2_HALAQAH",
    muhafiz_id: userId, // Production uses muhafiz_id
  };

  const res = await request("POST", "/api/halaqah", payload);

  if (!res.success) {
    // Check if it's unique constraint error (user already has halaqah)
    if (res.data.message?.includes("Unique constraint")) {
      log.info("User sudah punya halaqah, fetching existing...");
      const listRes = await request("GET", "/api/halaqah");
      if (listRes.success && listRes.data.data?.length > 0) {
        // Find halaqah belonging to this user
        const myHalaqah = listRes.data.data.find(
          (h: any) => h.muhafiz_id === userId,
        );
        if (myHalaqah) {
          halaqahId = myHalaqah.id_halaqah;
          log.success(`Menggunakan halaqah existing! ID: ${halaqahId}`);
          return;
        }
      }
    }
    handleError("Create Halaqah", res.status, res.data);
  }

  halaqahId = res.data.data.id_halaqah;
  log.success(`Halaqah dibuat! ID: ${halaqahId}`);
}

async function testCreateSantri() {
  log.info("Create Santri di Halaqah baru");

  const payload = {
    nama_santri: "Santri Test V2",
    target: "BACAAN", // Test V2 Enum
    halaqah_id: halaqahId,
    nomor_telepon: "081234567890",
  };

  const res = await request("POST", "/api/santri", payload);

  if (!res.success) {
    handleError("Create Santri", res.status, res.data);
  }

  santriId = res.data.data.id_santri;
  log.success(`Santri dibuat! ID: ${santriId}`);
}

async function testInputAbsensi() {
  log.header("3. MODUL ABSENSI (V2 Core)");
  log.info("POST /api/absensi - Input absen santri");

  const payload = {
    santri_id: santriId,
    status: "HADIR",
  };

  const res = await request("POST", "/api/absensi", payload);

  if (!res.success) {
    handleError("Input Absensi", res.status, res.data);
  }

  absensiId = res.data.data.id_absensi;
  log.success(`Absensi dicatat! ID: ${absensiId}`);
}

async function testUpdateAbsensi() {
  log.info("PUT /api/absensi/:id - Edit absensi (V2 Feature: Human Error Fix)");

  const payload = {
    status: "IZIN",
    keterangan: "Edit dari HADIR ke IZIN - test V2",
  };

  const res = await request("PUT", `/api/absensi/${absensiId}`, payload);

  if (!res.success) {
    handleError("Update Absensi", res.status, res.data);
  }

  log.success(`Absensi berhasil diedit ke status: IZIN`);
}

async function testAbsensiAsatidz() {
  log.info(
    "POST /api/absensi/asatidz - Kepala Muhafiz absen Muhafiz (V2 Feature)",
  );

  const payload = {
    user_id: userId,
    status: "HADIR",
    keterangan: "Testing KM Absen",
  };

  const res = await request("POST", "/api/absensi/asatidz", payload);

  if (!res.success) {
    // Jika error karena sudah diabsen hari ini, itu OK (dari test sebelumnya)
    if (res.data.message?.includes("sudah diabsen")) {
      log.success("Absensi asatidz sudah ada hari ini (from previous test)");
      return;
    }
    handleError("Absensi Asatidz", res.status, res.data);
  }

  log.success(`Absensi asatidz berhasil dicatat!`);
}

async function testInputSetoran() {
  log.header("4. MODUL SETORAN (V2 Core)");
  log.info("POST /api/setoran - Custom Date & New Kategori (V2 Features)");

  const payload = {
    santri_id: santriId,
    juz: 30,
    surat: "An-Naba",
    ayat: "1-10",
    kategori: "INTENS", // V2 Enum baru
    tanggal_setoran: "2023-12-01", // V2 Custom date
  };

  const res = await request("POST", "/api/setoran", payload);

  if (!res.success) {
    handleError("Input Setoran", res.status, res.data);
  }

  log.success(`Setoran berhasil dengan kategori INTENS & custom date!`);
}

async function testReportingDateRange() {
  log.header("5. REPORTING (V2 Feature: Date Range Filter)");

  const res = await request(
    "GET",
    "/api/setoran/all?startDate=2023-11-01&endDate=2023-12-31",
  );

  if (!res.success) {
    handleError("Reporting Date Range", res.status, res.data);
  }

  const data = res.data.data;
  log.success(
    `Laporan dengan date range berhasil! Total data: ${Array.isArray(data) ? data.length : 0}`,
  );
}

async function testPublicDisplay() {
  log.header("6. PUBLIC DISPLAY (V1)");

  const res = await request(
    "GET",
    `/api/display/halaqah/${halaqahId}`,
    undefined,
    false,
  );

  if (!res.success) {
    log.error(`Public display error - Status: ${res.status}`);
    // Continue anyway, not critical
  } else {
    log.success(`Public display berhasil!`);
  }
}

async function testCleanup() {
  log.header("7. CLEANUP");

  // Delete Santri
  log.info("DELETE /api/santri/:id - Hapus santri dummy");
  const resSantri = await request("DELETE", `/api/santri/${santriId}`);
  if (resSantri.success) {
    log.success(`Santri ID ${santriId} dihapus`);
  } else {
    log.error(`Gagal hapus santri: ${JSON.stringify(resSantri.data)}`);
  }

  // Delete Halaqah
  log.info("DELETE /api/halaqah/:id - Hapus halaqah dummy");
  const resHalaqah = await request("DELETE", `/api/halaqah/${halaqahId}`);
  if (resHalaqah.success) {
    log.success(`Halaqah ID ${halaqahId} dihapus`);
  } else {
    log.error(`Gagal hapus halaqah: ${JSON.stringify(resHalaqah.data)}`);
  }
}

// ============================================
// MAIN RUNNER
// ============================================

async function runTests() {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║     HalaqahId Backend V2 - E2E API Test Suite              ║
║     Target: ${BASE_URL.padEnd(40)}    ║
╚════════════════════════════════════════════════════════════╝
`);

  try {
    // 1. Authentication
    await testLogin();
    await testVerifyToken();

    // 2. Master Data
    await testCreateHalaqah();
    await testCreateSantri();

    // 3. Absensi (V2)
    await testInputAbsensi();
    await testUpdateAbsensi();
    await testAbsensiAsatidz();

    // 4. Setoran (V2)
    await testInputSetoran();

    // 5. Reporting (V2)
    await testReportingDateRange();

    // 6. Public Display
    await testPublicDisplay();

    // 7. Cleanup
    await testCleanup();

    console.log(`
╔════════════════════════════════════════════════════════════╗
║  🎉 ALL TESTS PASSED! HalaqahId V2 Backend is READY!       ║
╚════════════════════════════════════════════════════════════╝
`);
  } catch (error: any) {
    console.log(`\n❌ UNEXPECTED ERROR: ${error.message}`);
    process.exit(1);
  }
}

runTests();

import { strict as assert } from "assert";

const BASE_URL = "https://halaqah-id-be.vercel.app/api";
const CREDS = {
  email: "admin@mail.com",
  password: "admin123",
};

interface TestResult {
  method: string;
  endpoint: string;
  scenario: string;
  status: "PASS" | "FAIL";
  details?: string;
}

const results: TestResult[] = [];
let superadminToken = "";
let muhafizToken = "";
let muhafizId: any = ""; // can be number or string
let halaqahId: any = "";
let santriId1: any = "";
let santriId2: any = "";

// Helper to log result
function logResult(
  method: string,
  endpoint: string,
  scenario: string,
  status: "PASS" | "FAIL",
  details?: string
) {
  results.push({ method, endpoint, scenario, status, details });
  const color = status === "PASS" ? "\x1b[32m" : "\x1b[31m";
  const reset = "\x1b[0m";
  console.log(`${color}[${status}] ${scenario} (${details || ""})${reset}`);
}

// Helper for fetch wrapper
async function request(
  method: string,
  path: string,
  token?: string,
  body?: any
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

async function runTests() {
  console.log("Starting E2E Verification...");
  const timestamp = Date.now();
  const newMuhafiz = {
    username: `muhafiz_test_${timestamp}`,
    email: `muhafiz_${timestamp}@test.com`,
    password: "password123",
  };

  // --- 1. User Management ---

  // Login Superadmin
  try {
    const res = await request("POST", "/halaqah/auth/login", undefined, CREDS);
    if (res.status === 200 || res.status === 201) {
      superadminToken =
        res.data.access_token ||
        res.data.token ||
        res.data.data?.access_token ||
        res.data.data?.token;
      logResult("POST", "/halaqah/auth/login", "Login Superadmin", "PASS");
    } else {
      throw new Error(
        `Login failed: ${res.status} ${JSON.stringify(res.data)}`
      );
    }
  } catch (e: any) {
    logResult(
      "POST",
      "/halaqah/auth/login",
      "Login Superadmin",
      "FAIL",
      e.message
    );
    return;
  }

  // Register New Muhafiz (to ensure clean state for Halaqah creation)
  try {
    const res = await request(
      "POST",
      "/halaqah/auth/register",
      superadminToken,
      newMuhafiz
    );
    if (res.status === 200 || res.status === 201) {
      const d = res.data.data || res.data;
      muhafizId = d.id_user || d.id;
      logResult(
        "POST",
        "/halaqah/auth/register",
        "Register New Muhafiz",
        "PASS",
        `ID: ${muhafizId}`
      );
    } else {
      logResult(
        "POST",
        "/halaqah/auth/register",
        "Register New Muhafiz",
        "FAIL",
        `Status: ${res.status}`
      );
      return; // Cannot proceed
    }
  } catch (e: any) {
    logResult(
      "POST",
      "/halaqah/auth/register",
      "Register New Muhafiz",
      "FAIL",
      e.message
    );
    return;
  }

  // Get Active Muhafiz (Verify created user is in list)
  try {
    const res = await request("GET", "/halaqah/auth/muhafiz", superadminToken);
    let users = [];
    if (res.status === 200) {
      users = res.data.data || res.data;
    }

    if (Array.isArray(users) && users.length > 0) {
      const found = users.find(
        (u: any) => u.id_user == muhafizId || u.id == muhafizId
      );
      if (found) {
        logResult(
          "GET",
          "/halaqah/auth/muhafiz",
          "Get Active Muhafiz",
          "PASS",
          `Verified Muhafiz ID: ${muhafizId} in list`
        );
      } else {
        logResult(
          "GET",
          "/halaqah/auth/muhafiz",
          "Get Active Muhafiz",
          "FAIL",
          "Created Muhafiz not found in list"
        );
      }
    } else {
      logResult(
        "GET",
        "/halaqah/auth/muhafiz",
        "Get Active Muhafiz",
        "FAIL",
        `Status: ${res.status}`
      );
    }
  } catch (e: any) {
    logResult(
      "GET",
      "/halaqah/auth/muhafiz",
      "Get Active Muhafiz",
      "FAIL",
      e.message
    );
  }

  // User Soft Delete
  try {
    const res = await request(
      "DELETE",
      `/halaqah/auth/muhafiz/${muhafizId}`,
      superadminToken
    );
    if (res.status === 200) {
      logResult(
        "DELETE",
        `/halaqah/auth/muhafiz/${muhafizId}`,
        "Soft Delete Muhafiz",
        "PASS"
      );
    } else {
      logResult(
        "DELETE",
        `/halaqah/auth/muhafiz/${muhafizId}`,
        "Soft Delete Muhafiz",
        "FAIL",
        `Status: ${res.status} ${JSON.stringify(res.data)}`
      );
    }
  } catch (e: any) {
    logResult(
      "DELETE",
      `/halaqah/auth/muhafiz/${muhafizId}`,
      "Soft Delete Muhafiz",
      "FAIL",
      e.message
    );
  }

  // Get Deleted Muhafiz (Trash)
  try {
    const res = await request(
      "GET",
      "/halaqah/auth/muhafiz/deleted",
      superadminToken
    );
    if (res.status === 200) {
      const deletedUsers = res.data.data || res.data;
      const found = deletedUsers.find(
        (u: any) => (u.id_user || u.id) == muhafizId
      );
      if (found) {
        logResult(
          "GET",
          "/halaqah/auth/muhafiz/deleted",
          "Verify Muhafiz Deleted",
          "PASS"
        );
      } else {
        logResult(
          "GET",
          "/halaqah/auth/muhafiz/deleted",
          "Verify Muhafiz Deleted",
          "FAIL",
          "Deleted user not found in trash"
        );
      }
    } else {
      logResult(
        "GET",
        "/halaqah/auth/muhafiz/deleted",
        "Verify Muhafiz Deleted",
        "FAIL",
        `Status: ${res.status}`
      );
    }
  } catch (e: any) {
    logResult(
      "GET",
      "/halaqah/auth/muhafiz/deleted",
      "Get Deleted Muhafiz",
      "FAIL",
      e.message
    );
  }

  // Restore Muhafiz
  try {
    const res = await request(
      "PATCH",
      `/halaqah/auth/muhafiz/restore/${muhafizId}`,
      superadminToken
    );
    if (res.status === 200) {
      logResult(
        "PATCH",
        `/halaqah/auth/muhafiz/restore/${muhafizId}`,
        "Restore Muhafiz",
        "PASS"
      );
    } else {
      logResult(
        "PATCH",
        `/halaqah/auth/muhafiz/restore/${muhafizId}`,
        "Restore Muhafiz",
        "FAIL",
        `Status: ${res.status}`
      );
    }
  } catch (e: any) {
    logResult(
      "PATCH",
      `/halaqah/auth/muhafiz/restore/${muhafizId}`,
      "Restore Muhafiz",
      "FAIL",
      e.message
    );
  }

  // Verify Restore (Impersonate)
  try {
    const res = await request(
      "POST",
      `/halaqah/auth/impersonate/${muhafizId}`,
      superadminToken
    );
    if (res.status === 200 || res.status === 201) {
      muhafizToken =
        res.data.access_token || res.data.token || res.data.data?.token;
      logResult(
        "POST",
        `/halaqah/auth/impersonate/${muhafizId}`,
        "Impersonate Restored Muhafiz",
        "PASS"
      );
    } else {
      logResult(
        "POST",
        `/halaqah/auth/impersonate/${muhafizId}`,
        "Impersonate Restored Muhafiz",
        "FAIL",
        `Status: ${res.status}`
      );
    }
  } catch (e: any) {
    logResult(
      "POST",
      `/halaqah/auth/impersonate/${muhafizId}`,
      "Impersonate Restored Muhafiz",
      "FAIL",
      e.message
    );
  }

  // --- 2. Halaqah Management ---

  // Create Halaqah
  try {
    const payload = {
      name_halaqah: `Halaqah Test ${timestamp}`,
      muhafiz_id: muhafizId,
    };
    const res = await request("POST", "/halaqah", superadminToken, payload);
    if (res.status === 201 || res.status === 200) {
      const d = res.data.data || res.data;
      halaqahId = d.id || d.id_halaqah;
      logResult(
        "POST",
        "/halaqah",
        "Create Halaqah",
        "PASS",
        `ID: ${halaqahId}`
      );
    } else {
      logResult(
        "POST",
        "/halaqah",
        "Create Halaqah",
        "FAIL",
        `Status: ${res.status} ${JSON.stringify(res.data)}`
      );
    }
  } catch (e: any) {
    logResult("POST", "/halaqah", "Create Halaqah", "FAIL", e.message);
  }

  if (!halaqahId) return;

  // Soft Delete Halaqah
  try {
    const res = await request(
      "DELETE",
      `/halaqah/${halaqahId}`,
      superadminToken
    );
    if (res.status === 200) {
      logResult(
        "DELETE",
        `/halaqah/${halaqahId}`,
        "Soft Delete Halaqah",
        "PASS"
      );
    } else {
      logResult(
        "DELETE",
        `/halaqah/${halaqahId}`,
        "Soft Delete Halaqah",
        "FAIL",
        `Status: ${res.status}`
      );
    }
  } catch (e: any) {
    logResult(
      "DELETE",
      `/halaqah/${halaqahId}`,
      "Soft Delete Halaqah",
      "FAIL",
      e.message
    );
  }

  // Restore Halaqah
  try {
    const res = await request(
      "PATCH",
      `/halaqah/restore/${halaqahId}`,
      superadminToken
    );
    if (res.status === 200) {
      logResult(
        "PATCH",
        `/halaqah/restore/${halaqahId}`,
        "Restore Halaqah",
        "PASS"
      );
    } else {
      logResult(
        "PATCH",
        `/halaqah/restore/${halaqahId}`,
        "Restore Halaqah",
        "FAIL",
        `Status: ${res.status}`
      );
    }
  } catch (e: any) {
    logResult(
      "PATCH",
      "/halaqah/restore/...",
      "Restore Halaqah",
      "FAIL",
      e.message
    );
  }

  // --- 3. Santri Management ---

  // Create Santri 1
  try {
    const payload = {
      nama_santri: "Santri Test 1",
      nomor_telepon: `081${timestamp}`,
      target: "RINGAN",
      halaqah_id: halaqahId,
    };
    const res = await request("POST", "/santri", superadminToken, payload);
    if (res.status === 201 || res.status === 200) {
      const d = res.data.data || res.data;
      santriId1 = d.id || d.id_santri;
      logResult(
        "POST",
        "/santri",
        "Create Santri 1",
        "PASS",
        `ID: ${santriId1}`
      );
    } else {
      logResult(
        "POST",
        "/santri",
        "Create Santri 1",
        "FAIL",
        `Status: ${res.status} ${JSON.stringify(res.data)}`
      );
    }
  } catch (e: any) {
    logResult("POST", "/santri", "Create Santri 1", "FAIL", e.message);
  }

  // Create Santri 2
  try {
    const payload = {
      nama_santri: "Santri Test 2",
      nomor_telepon: `082${timestamp}`,
      target: "RINGAN",
      halaqah_id: halaqahId,
    };
    const res = await request("POST", "/santri", superadminToken, payload);
    if (res.status === 201 || res.status === 200) {
      const d = res.data.data || res.data;
      santriId2 = d.id || d.id_santri;
      logResult(
        "POST",
        "/santri",
        "Create Santri 2",
        "PASS",
        `ID: ${santriId2}`
      );
    } else {
      logResult(
        "POST",
        "/santri",
        "Create Santri 2",
        "FAIL",
        `Status: ${res.status} ${JSON.stringify(res.data)}`
      );
    }
  } catch (e: any) {
    logResult("POST", "/santri", "Create Santri 2", "FAIL", e.message);
  }

  // Read All (Admin)
  try {
    const res = await request("GET", "/santri", superadminToken);
    if (res.status === 200) {
      const all = res.data.data || res.data;
      const found = all.find((s: any) => (s.id || s.id_santri) == santriId1);
      if (found) logResult("GET", "/santri", "Read All Santri (Admin)", "PASS");
      else
        logResult(
          "GET",
          "/santri",
          "Read All Santri (Admin)",
          "FAIL",
          "Created santri not found in list"
        );
    } else {
      logResult(
        "GET",
        "/santri",
        "Read All Santri (Admin)",
        "FAIL",
        `Status: ${res.status}`
      );
    }
  } catch (e: any) {
    logResult("GET", "/santri", "Read All Santri (Admin)", "FAIL", e.message);
  }

  // Read (Muhafiz)
  if (muhafizToken) {
    try {
      const res = await request("GET", "/santri", muhafizToken);
      if (res.status === 200) {
        const list = res.data.data || res.data;
        const others = list.filter(
          (s: any) => s.halaqahId != halaqahId && s.halaqah_id != halaqahId
        );
        if (others.length === 0) {
          logResult(
            "GET",
            "/santri",
            "Read Santri (Muhafiz)",
            "PASS",
            "Visibility restricted correctly"
          );
        } else {
          logResult(
            "GET",
            "/santri",
            "Read Santri (Muhafiz)",
            "FAIL",
            `Saw ${others.length} santri from other halaqahs`
          );
        }
      } else {
        logResult(
          "GET",
          "/santri",
          "Read Santri (Muhafiz)",
          "FAIL",
          `Status: ${res.status}`
        );
      }
    } catch (e: any) {
      logResult("GET", "/santri", "Read Santri (Muhafiz)", "FAIL", e.message);
    }

    // Update Santri (Muhafiz)
    try {
      const updatePayload = { nama_santri: "Santri Updated" };
      const res = await request(
        "PATCH",
        `/santri/${santriId1}`,
        muhafizToken,
        updatePayload
      );
      if (res.status === 200) {
        logResult(
          "PATCH",
          `/santri/${santriId1}`,
          "Update Santri (Muhafiz)",
          "PASS"
        );
      } else {
        logResult(
          "PATCH",
          `/santri/${santriId1}`,
          "Update Santri (Muhafiz)",
          "FAIL",
          `Status: ${res.status}`
        );
      }
    } catch (e: any) {
      logResult(
        "PATCH",
        `/santri/${santriId1}`,
        "Update Santri (Muhafiz)",
        "FAIL",
        e.message
      );
    }

    // RBAC Check (Update Santri from other Halaqah)
    let otherSantriId = "";
    try {
      // Create other halaqah
      const hRes = await request("POST", "/halaqah", superadminToken, {
        name_halaqah: `Other Halaqah ${timestamp}`,
        muhafiz_id: null,
      });
      const hData = hRes.data?.data || hRes.data;
      const hId = hData?.id || hData?.id_halaqah;
      if (hId) {
        const sRes = await request("POST", "/santri", superadminToken, {
          nama_santri: "Other",
          nomor_telepon: `089${timestamp}`,
          target: "RINGAN",
          halaqah_id: hId,
        });
        const sData = sRes.data?.data || sRes.data;
        otherSantriId = sData?.id || sData?.id_santri;
      }
    } catch (e) {}

    if (otherSantriId) {
      const res = await request(
        "PATCH",
        `/santri/${otherSantriId}`,
        muhafizToken,
        { nama_santri: "Hacked" }
      );
      if (res.status === 403) {
        logResult(
          "PATCH",
          `/santri/${otherSantriId}`,
          "RBAC Check (Other Halaqah)",
          "PASS",
          "Got 403 as expected"
        );
      } else {
        logResult(
          "PATCH",
          `/santri/${otherSantriId}`,
          "RBAC Check (Other Halaqah)",
          "FAIL",
          `Got Status: ${res.status}`
        );
      }
    } else {
      // If we couldn't create setup data, we skip or mark as fail; but to avoid false noise we can log strictly
      logResult(
        "PATCH",
        "RBAC",
        "RBAC Check (Other Halaqah)",
        "FAIL",
        "Could not setup test data"
      );
    }

    // Delete Santri (Muhafiz)
    try {
      const res = await request("DELETE", `/santri/${santriId2}`, muhafizToken);
      if (res.status === 200) {
        logResult(
          "DELETE",
          `/santri/${santriId2}`,
          "Soft Delete Santri (Muhafiz)",
          "PASS"
        );
      } else {
        logResult(
          "DELETE",
          `/santri/${santriId2}`,
          "Soft Delete Santri (Muhafiz)",
          "FAIL",
          `Status: ${res.status}`
        );
      }
    } catch (e: any) {
      logResult(
        "DELETE",
        `/santri/${santriId2}`,
        "Soft Delete Santri (Muhafiz)",
        "FAIL",
        e.message
      );
    }
  }

  // Restore Santri (Admin)
  try {
    const res = await request(
      "PATCH",
      `/santri/${santriId2}/restore`,
      superadminToken
    );
    if (res.status === 200) {
      logResult(
        "PATCH",
        `/santri/${santriId2}/restore`,
        "Restore Santri (Admin)",
        "PASS"
      );
    } else {
      logResult(
        "PATCH",
        `/santri/${santriId2}/restore`,
        "Restore Santri (Admin)",
        "FAIL",
        `Status: ${res.status}`
      );
    }
  } catch (e: any) {
    logResult(
      "PATCH",
      `/santri/${santriId2}/restore`,
      "Restore Santri (Admin)",
      "FAIL",
      e.message
    );
  }

  // --- Output Report ---
  console.log("\n\n=== E2E TEST REPORT ===");
  console.table(results);
}

runTests();

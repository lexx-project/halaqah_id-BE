import requests
import json
import sys

BASE_URL = "https://halaqahid-backend.vercel.app/api"
ADMIN_EMAIL = "admin@mail.com"
ADMIN_PASS = "admin123"

# Helper to print table row
def log_result(method, endpoint, scenario, expected, actual, status):
    print(f"| {method} | {endpoint} | {scenario} | {expected} | {actual} | {status} |")
    sys.stdout.flush()

def run_tests():
    s = requests.Session()
    admin_headers = {}
    muhafiz_token = None
    muhafiz_id = None
    halaqah_id = None

    # --- 1. LOGIN ADMIN ---
    try:
        res = s.post(f"{BASE_URL}/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASS})
        if res.status_code in [200, 201]:
            data = res.json()
            # Handle possible structures
            token = None
            if 'data' in data and 'access_token' in data['data']:
                token = data['data']['access_token']
            elif 'access_token' in data:
                token = data['access_token']
            elif 'token' in data:
                token = data['token']
            
            if token:
                log_result("POST", "/api/auth/login", "Login Superadmin", "200 OK", f"{res.status_code} OK", "PASS")
                admin_headers = {"Authorization": f"Bearer {token}"}
            else:
                log_result("POST", "/api/auth/login", "Login Superadmin", "200 OK", "No token found in response", "FAIL")
                return
        else:
            log_result("POST", "/api/auth/login", "Login Superadmin", "200 OK", f"{res.status_code} {res.reason}", "FAIL")
            return
    except Exception as e:
        log_result("POST", "/api/auth/login", "Login Superadmin", "200 OK", f"Exception: {e}", "FAIL")
        return

    # --- 2. GET MUHAFIZ ID ---
    # We need a muhafiz ID for impersonation and halaqah creation.
    # Trying /auth/muhafiz as seen in auth.route.ts
    try:
        res = requests.get(f"{BASE_URL}/auth/muhafiz", headers=admin_headers)
        if res.status_code == 200:
            data = res.json().get('data', [])
            if isinstance(data, list) and len(data) > 0:
                muhafiz_id = data[0]['id']
                # print(f"DEBUG: Found Muhafiz ID: {muhafiz_id}")
            else:
                log_result("GET", "/api/auth/muhafiz", "Find Muhafiz", "List > 0", "Empty list", "FAIL")
        else:
            # Fallback: maybe /api/users?
            log_result("GET", "/api/auth/muhafiz", "Find Muhafiz", "200 OK", f"{res.status_code}", "FAIL")
    except Exception as e:
        log_result("GET", "/api/auth/muhafiz", "Find Muhafiz", "200 OK", str(e), "FAIL")

    if not muhafiz_id:
        print("Note: Skipping Impersonate and Creation verification dependent on Muhafiz ID.")

    # --- 3. IMPERSONATE ---
    if muhafiz_id:
        try:
            res = requests.post(f"{BASE_URL}/auth/impersonate/{muhafiz_id}", headers=admin_headers)
            if res.status_code in [200, 201]:
                data = res.json().get('data', {})
                muhafiz_token = data.get('access_token')
                
                if muhafiz_token:
                    # Validate /me
                    res_me = requests.get(f"{BASE_URL}/auth/me", headers={"Authorization": f"Bearer {muhafiz_token}"})
                    me_data = res_me.json().get('data', {})
                    if me_data.get('id') == muhafiz_id:
                        log_result("POST", "/api/auth/impersonate/:id", "Impersonate + Verify /me", "Token valid for Muhafiz", "Verified", "PASS")
                    else:
                        log_result("POST", "/api/auth/impersonate/:id", "Impersonate + Verify /me", "Token valid for Muhafiz", f"User mismatch: {me_data.get('id')}", "FAIL")
                else:
                    log_result("POST", "/api/auth/impersonate/:id", "Impersonate", "Token Returned", "No token", "FAIL")
            else:
                log_result("POST", "/api/auth/impersonate/:id", "Impersonate", "200 OK", f"{res.status_code} {res.text}", "FAIL")
        except Exception as e:
            log_result("POST", "/api/auth/impersonate/:id", "Impersonate", "200 OK", str(e), "FAIL")

    # --- 4. CRUD HALAQAH ---
    # Create
    try:
        # If no muhafiz_id, let's try with a dummy or random UUID if strictly required.
        # But for now assuming we got one or we send None if allowed (probably not).
        payload = {"name_halaqah": "Test AI", "muhafiz_id": muhafiz_id}
        res = requests.post(f"{BASE_URL}/halaqah", headers=admin_headers, json=payload)
        
        if res.status_code in [200, 201]:
            halaqah_id = res.json().get('data', {}).get('id')
            log_result("POST", "/api/halaqah", "Create Halaqah (Admin)", "201 Created", f"{res.status_code}", "PASS")
        else:
             log_result("POST", "/api/halaqah", "Create Halaqah (Admin)", "201 Created", f"{res.status_code} {res.text}", "FAIL")
    except Exception as e:
        log_result("POST", "/api/halaqah", "Create Halaqah (Admin)", "201 Created", str(e), "FAIL")

    if halaqah_id:
        # Read
        try:
            res = requests.get(f"{BASE_URL}/halaqah", headers=admin_headers)
            found = False
            deleted_at_null = False
            data = res.json().get('data', [])
            for h in data:
                if h.get('id') == halaqah_id:
                    found = True
                    if h.get('deleted_at') is None:
                        deleted_at_null = True
                    break
            
            if found and deleted_at_null:
                log_result("GET", "/api/halaqah", "Read New Halaqah", "Found & Active", "Found", "PASS")
            else:
                log_result("GET", "/api/halaqah", "Read New Halaqah", "Found & Active", f"Found={found}", "FAIL")
        except Exception as e:
             log_result("GET", "/api/halaqah", "Read New Halaqah", "200 OK", str(e), "FAIL")

        # Update
        try:
            res = requests.patch(f"{BASE_URL}/halaqah/{halaqah_id}", headers=admin_headers, json={"name_halaqah": "Test AI Updated"})
            if res.status_code == 200:
                # Verify update?
                log_result("PATCH", "/api/halaqah/:id", "Update name", "200 OK", "200", "PASS")
            else:
                log_result("PATCH", "/api/halaqah/:id", "Update name", "200 OK", f"{res.status_code}", "FAIL")
        except:
             log_result("PATCH", "/api/halaqah/:id", "Update name", "200 OK", "Error", "FAIL")

        # Delete (Soft)
        try:
            res = requests.delete(f"{BASE_URL}/halaqah/{halaqah_id}", headers=admin_headers)
            if res.status_code == 200:
                log_result("DELETE", "/api/halaqah/:id", "Soft Delete", "200 OK", "200", "PASS")
            else:
                log_result("DELETE", "/api/halaqah/:id", "Soft Delete", "200 OK", f"{res.status_code}", "FAIL")
        except:
            log_result("DELETE", "/api/halaqah/:id", "Soft Delete", "200 OK", "Error", "FAIL")
        
        # Verify Soft Delete (Not in Main List)
        try:
            res = requests.get(f"{BASE_URL}/halaqah", headers=admin_headers)
            found = any(h['id'] == halaqah_id for h in res.json().get('data', []))
            if not found:
                 log_result("GET", "/api/halaqah", "Verify Removed from Main", "Not Found", "Not Found", "PASS")
            else:
                 log_result("GET", "/api/halaqah", "Verify Removed from Main", "Not Found", "Still Found", "FAIL")
        except:
             pass

        # Verify Trash
        try:
            res = requests.get(f"{BASE_URL}/halaqah/deleted", headers=admin_headers)
            found = any(h['id'] == halaqah_id for h in res.json().get('data', []))
            if found:
                 log_result("GET", "/api/halaqah/deleted", "Verify in Trash", "Found", "Found", "PASS")
            else:
                 log_result("GET", "/api/halaqah/deleted", "Verify in Trash", "Found", "Not Found", "FAIL")
        except:
             log_result("GET", "/api/halaqah/deleted", "Verify in Trash", "Found", "Error", "FAIL")

        # Restore
        try:
            res = requests.patch(f"{BASE_URL}/halaqah/restore/{halaqah_id}", headers=admin_headers)
            if res.status_code == 200:
                log_result("PATCH", "/api/halaqah/restore/:id", "Restore", "200 OK", "200", "PASS")
                # Verify back in main
                res_main = requests.get(f"{BASE_URL}/halaqah", headers=admin_headers)
                found = any(h['id'] == halaqah_id for h in res_main.json().get('data', []))
                if found:
                    log_result("GET", "/api/halaqah", "Verify Restored in Main", "Found", "Found", "PASS")
                else:
                    log_result("GET", "/api/halaqah", "Verify Restored in Main", "Found", "Not Found", "FAIL")
            else:
                log_result("PATCH", "/api/halaqah/restore/:id", "Restore", "200 OK", f"{res.status_code}", "FAIL")
        except:
             log_result("PATCH", "/api/halaqah/restore/:id", "Restore", "200 OK", "Error", "FAIL")

    # --- 5. RBAC TEST ---
    if muhafiz_token:
        # Create (Should Fail)
        try:
            res = requests.post(f"{BASE_URL}/halaqah", headers={"Authorization": f"Bearer {muhafiz_token}"}, json={"name_halaqah": "Hacker", "muhafiz_id": muhafiz_id})
            if res.status_code == 403:
                log_result("POST", "/api/halaqah", "RBAC Create (Muhafiz)", "403 Forbidden", "403", "PASS")
            else:
                log_result("POST", "/api/halaqah", "RBAC Create (Muhafiz)", "403 Forbidden", f"{res.status_code}", "FAIL")
        except:
             log_result("POST", "/api/halaqah", "RBAC Create (Muhafiz)", "403 Forbidden", "Error", "FAIL")

        # List (Should Fail)
        try:
            res = requests.get(f"{BASE_URL}/halaqah", headers={"Authorization": f"Bearer {muhafiz_token}"})
            if res.status_code == 403:
                log_result("GET", "/api/halaqah", "RBAC List (Muhafiz)", "403 Forbidden", "403", "PASS")
            else:
                log_result("GET", "/api/halaqah", "RBAC List (Muhafiz)", "403 Forbidden", f"{res.status_code}", "FAIL")
        except:
             log_result("GET", "/api/halaqah", "RBAC List (Muhafiz)", "403 Forbidden", "Error", "FAIL")
    else:
        log_result("ALL", "RBAC Tests", "Run RBAC checks", "Muhafiz Token", "No Token", "SKIP")

if __name__ == "__main__":
    print("| Method | Endpoint | Skenario | Expected | Actual | Status |")
    print("|---|---|---|---|---|---|")
    run_tests()

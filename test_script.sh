#!/bin/bash
echo "=== SKENARIO 1: LOGIN VALID (KEPALA MUSYRIF) ==="
LOGIN_RES=$(curl -s -X POST http://localhost:3000/api/halaqah/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@mail.com","password":"password123"}')
echo "$LOGIN_RES"
echo -e "\n--- HTTP Status: 200 (Assumed if JSON returned) ---"

TOKEN=$(echo "$LOGIN_RES" | grep -o '"token":"[^"]*"' | cut -d'"' -f4)

if [ -z "$TOKEN" ]; then
  echo "CRITICAL: Failed to extract token. Stopping tests."
  exit 1
fi

echo -e "\n=== SKENARIO 2: PROTEKSI ROUTE & IDENTITAS USER ==="
curl -s -X GET http://localhost:3000/api/halaqah/auth/me \
  -H "Authorization: Bearer $TOKEN" \
  -w "\n--- HTTP Status: %{http_code} ---\n"

echo -e "\n=== SKENARIO 3: KEAMANAN PASSWORD HASHING ==="
curl -s -X POST http://localhost:3000/api/halaqah/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@mail.com","password":"wrongpassword"}' \
  -w "\n--- HTTP Status: %{http_code} ---\n"

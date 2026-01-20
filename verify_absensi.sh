#!/bin/bash

# Configuration
BASE_URL="http://localhost:3000/api"
SUPERADMIN_EMAIL="admin@mail.com"
SUPERADMIN_PASS="admin123"

# Actual IDs verified from system
MUHAFIZ_A_ID=55   # Manages Santri A (39)
MUHAFIZ_B_ID=22   # Does NOT manage Santri A
SANTRI_A_ID=39    # Mahmud (Managed by Muhafiz A)

# Dates
TODAY=$(date "+%Y-%m-%d")
YESTERDAY=$(date -d "yesterday" "+%Y-%m-%d")

echo "================================================"
echo "   API Testing - Module Absensi Verification"
echo "   Target: Santri $SANTRI_A_ID | Actors: $MUHAFIZ_A_ID & $MUHAFIZ_B_ID"
echo "================================================"

# 1. Login Superadmin
echo ""
echo "--- 1. Login Superadmin ---"
SUPERADMIN_TOKEN=$(curl -X POST "$BASE_URL/halaqah/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$SUPERADMIN_EMAIL\",\"password\":\"$SUPERADMIN_PASS\"}" \
  -s | jq -r '.data.token')

if [ -z "$SUPERADMIN_TOKEN" ] || [ "$SUPERADMIN_TOKEN" == "null" ]; then
    echo "❌ Superadmin login failed. Exiting."
    exit 1
fi
echo "✅ Superadmin Token acquired."

# 2. Get Muhafiz Tokens via Impersonation
echo ""
echo "--- 2. Getting Muhafiz Tokens ---"

MUHAFIZ_A_TOKEN=$(curl -X POST "$BASE_URL/halaqah/auth/impersonate/$MUHAFIZ_A_ID" \
  -H "Authorization: Bearer $SUPERADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -s | jq -r '.data.token')

if [ -z "$MUHAFIZ_A_TOKEN" ] || [ "$MUHAFIZ_A_TOKEN" == "null" ]; then
   echo "❌ Muhafiz A (ID $MUHAFIZ_A_ID) Token failed."
   exit 1
fi
echo "✅ Muhafiz A Token acquired."

MUHAFIZ_B_TOKEN=$(curl -X POST "$BASE_URL/halaqah/auth/impersonate/$MUHAFIZ_B_ID" \
  -H "Authorization: Bearer $SUPERADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -s | jq -r '.data.token')

if [ -z "$MUHAFIZ_B_TOKEN" ] || [ "$MUHAFIZ_B_TOKEN" == "null" ]; then
   echo "❌ Muhafiz B (ID $MUHAFIZ_B_ID) Token failed."
   exit 1
fi
echo "✅ Muhafiz B Token acquired."


echo ""
echo "================================================"
echo "   Starting 5 Test Scenarios"
echo "================================================"

# Result Arrays
declare -a SCENARIOS
declare -a ACTORS
declare -a TARGETS
declare -a EXPECTED
declare -a ACTUAL
declare -a RESULTS

# ---------------------------------------------------------
# Scenario 1: Initial Attendance (Success)
# ---------------------------------------------------------
echo ""
echo ">>> Scenario 1: Initial Attendance (today)"
echo "Action: POST /api/absensi (Status: HADIR)"

RESPONSE_1=$(curl -X POST "$BASE_URL/absensi" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $MUHAFIZ_A_TOKEN" \
  -d "{
    \"santri_id\": $SANTRI_A_ID,
    \"status\": \"HADIR\",
    \"tanggal\": \"$TODAY\"
  }" -s)

STATUS_CODE_1=$(echo "$RESPONSE_1" | jq -r '.success')
MESSAGE_1=$(echo "$RESPONSE_1" | jq -r '.message')

echo "Response Success: $STATUS_CODE_1"
echo "Message: $MESSAGE_1"

SCENARIOS+=("1. Initial Attendance")
ACTORS+=("Muhafiz A")
TARGETS+=("$SANTRI_A_ID")
EXPECTED+=("201 Created")

if [ "$STATUS_CODE_1" == "true" ]; then
    ACTUAL+=("Success (201)")
    RESULTS+=("PASS")
    echo "✅ Result: PASS"
else
    # If it fails because it already exists (from previous run), we need to handle that.
    if [[ "$MESSAGE_1" == *"sudah diabsen"* ]]; then
        ACTUAL+=("Already Exists")
        RESULTS+=("PASS (Pre-existing)")
        echo "⚠️ Result: PASS (Record already existed from previous run)"
    else
        ACTUAL+=("Failed: $MESSAGE_1")
        RESULTS+=("FAIL")
        echo "❌ Result: FAIL"
        echo "Full Response: $RESPONSE_1"
    fi
fi

# ---------------------------------------------------------
# Scenario 2: Duplicate Prevention
# ---------------------------------------------------------
echo ""
echo ">>> Scenario 2: Duplicate Prevention (today)"
echo "Action: Repeat POST /api/absensi (Status: TERLAMBAT)"

RESPONSE_2=$(curl -X POST "$BASE_URL/absensi" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $MUHAFIZ_A_TOKEN" \
  -d "{
    \"santri_id\": $SANTRI_A_ID,
    \"status\": \"TERLAMBAT\",
    \"tanggal\": \"$TODAY\"
  }" -s)

STATUS_CODE_2=$(echo "$RESPONSE_2" | jq -r '.success')
ERROR_MSG_2=$(echo "$RESPONSE_2" | jq -r '.message')

echo "Response Success: $STATUS_CODE_2"
echo "Message: $ERROR_MSG_2"

SCENARIOS+=("2. Duplicate Prevention")
ACTORS+=("Muhafiz A")
TARGETS+=("$SANTRI_A_ID")
EXPECTED+=("400 Bad Request")

if [[ "$ERROR_MSG_2" == *"sudah diabsen"* ]]; then
    ACTUAL+=("400 (Caught)")
    RESULTS+=("PASS")
    echo "✅ Result: PASS"
else
    ACTUAL+=("Failed to Catch")
    RESULTS+=("FAIL")
    echo "❌ Result: FAIL - Validation NOT triggered"
    echo "Full Response: $RESPONSE_2"
fi

# ---------------------------------------------------------
# Scenario 3: Different Date (Backdate)
# ---------------------------------------------------------
echo ""
echo ">>> Scenario 3: Different Date (yesterday)"
echo "Action: POST /api/absensi (Date: $YESTERDAY)"

RESPONSE_3=$(curl -X POST "$BASE_URL/absensi" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $MUHAFIZ_A_TOKEN" \
  -d "{
    \"santri_id\": $SANTRI_A_ID,
    \"status\": \"HADIR\",
    \"tanggal\": \"$YESTERDAY\"
  }" -s)

STATUS_CODE_3=$(echo "$RESPONSE_3" | jq -r '.success')
MESSAGE_3=$(echo "$RESPONSE_3" | jq -r '.message')

SCENARIOS+=("3. Backdate (Yesterday)")
ACTORS+=("Muhafiz A")
TARGETS+=("$SANTRI_A_ID")
EXPECTED+=("201 Created")

if [ "$STATUS_CODE_3" == "true" ]; then
    ACTUAL+=("Success")
    RESULTS+=("PASS")
    echo "✅ Result: PASS"
else
    if [[ "$MESSAGE_3" == *"sudah diabsen"* ]]; then
         ACTUAL+=("Already Exists")
         RESULTS+=("PASS (Pre-existing)")
         echo "⚠️ Result: PASS (Record already existed)"
    else
        ACTUAL+=("Failed: $MESSAGE_3")
        RESULTS+=("FAIL")
        echo "❌ Result: FAIL"
    fi
fi

# ---------------------------------------------------------
# Scenario 4: Security RBAC Cross-Halaqah
# ---------------------------------------------------------
echo ""
echo ">>> Scenario 4: RBAC Cross-Halaqah"
echo "Action: Muhafiz B managing Santri A via POST /api/absensi"

RESPONSE_4=$(curl -X POST "$BASE_URL/absensi" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $MUHAFIZ_B_TOKEN" \
  -d "{
    \"santri_id\": $SANTRI_A_ID,
    \"status\": \"ALFA\",
    \"tanggal\": \"$TODAY\"
  }" -s)

STATUS_CODE_4=$(echo "$RESPONSE_4" | jq -r '.success')
MESSAGE_4=$(echo "$RESPONSE_4" | jq -r '.message')

SCENARIOS+=("4. RBAC Security")
ACTORS+=("Muhafiz B")
TARGETS+=("$SANTRI_A_ID")
EXPECTED+=("403 Forbidden")

if [[ "$MESSAGE_4" == *"Akses ditolak"* ]] || [[ "$MESSAGE_4" == *"bukan anggota halaqah"* ]]; then
    ACTUAL+=("403 (Blocked)")
    RESULTS+=("PASS")
    echo "✅ Result: PASS"
else
    ACTUAL+=("Allowed/Wrong Error")
    RESULTS+=("FAIL")
    echo "❌ Result: FAIL - Security barrier breached!"
    echo "Full Response: $RESPONSE_4"
fi

# ---------------------------------------------------------
# Scenario 5: Data Integrity Verification
# ---------------------------------------------------------
echo ""
echo ">>> Scenario 5: Data Integrity"
echo "Action: GET /api/absensi/santri/$SANTRI_A_ID"

RESPONSE_5=$(curl -X GET "$BASE_URL/absensi/santri/$SANTRI_A_ID" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $SUPERADMIN_TOKEN" \
  -s)

# Count how many records match today
COUNT_TODAY=$(echo "$RESPONSE_5" | jq "[.data[] | select(.tanggal | startswith(\"$TODAY\"))] | length")

echo "Records for today ($TODAY): $COUNT_TODAY"

SCENARIOS+=("5. Data Integrity")
ACTORS+=("Superadmin")
TARGETS+=("$SANTRI_A_ID")
EXPECTED+=("1 Record Today")

if [ "$COUNT_TODAY" -eq "1" ]; then
    ACTUAL+=("Found 1")
    RESULTS+=("PASS")
    echo "✅ Result: PASS"
elif [ "$COUNT_TODAY" -eq "0" ]; then
    ACTUAL+=("Found 0")
    RESULTS+=("FAIL (No data)")
    echo "❌ Result: FAIL (No record found)"
else
    ACTUAL+=("Found $COUNT_TODAY")
    RESULTS+=("FAIL (Duplicate)")
    echo "❌ Result: FAIL (Duplicates found!)"
fi

# =========================================================
# FINAL REPORT
# =========================================================
echo ""
echo "################################################################################"
echo "                            TEST REPORT SUMMARY"
echo "################################################################################"
printf "%-25s | %-12s | %-10s | %-15s | %-20s | %s\n" "Scenario" "Actor" "Target" "Expected" "Actual" "Result"
echo "--------------------------|--------------|------------|-----------------|----------------------|-------"

for i in "${!SCENARIOS[@]}"; do
  printf "%-25s | %-12s | %-10s | %-15s | %-20s | %s\n" "${SCENARIOS[$i]}" "${ACTORS[$i]}" "${TARGETS[$i]}" "${EXPECTED[$i]}" "${ACTUAL[$i]}" "${RESULTS[$i]}"
done

echo "################################################################################"

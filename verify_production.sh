#!/bin/bash

# ============================================================================
# PRODUCTION VERIFICATION SCRIPT - Vercel Environment Only
# ============================================================================

BASE_URL="https://halaqah-id-be.vercel.app/api"
SUPERADMIN_EMAIL="admin@mail.com"
SUPERADMIN_PASS="admin123"

# Production IDs (verified from live database)
MUHAFIZ_A_ID=55   # Manages Santri 39
MUHAFIZ_B_ID=22   # Manages Santri 35-38 (NOT 39)
SANTRI_A_ID=39    # Mahmud (belongs to Muhafiz A)

# Dates
TODAY=$(date "+%Y-%m-%d")
YESTERDAY=$(date -d "yesterday" "+%Y-%m-%d")

echo "################################################################################"
echo "#                  PRODUCTION VERIFICATION - VERCEL DEPLOYMENT                #"
echo "################################################################################"
echo "Environment: https://halaqah-id-be.vercel.app"
echo "Test Target: Santri $SANTRI_A_ID (Mahmud)"
echo "Actors: Muhafiz A ($MUHAFIZ_A_ID) & Muhafiz B ($MUHAFIZ_B_ID)"
echo "Date: $TODAY"
echo "################################################################################"

# Authentication
echo ""
echo "--- Authentication Phase ---"
SUPERADMIN_TOKEN=$(curl -X POST "$BASE_URL/halaqah/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$SUPERADMIN_EMAIL\",\"password\":\"$SUPERADMIN_PASS\"}" \
  -s | jq -r '.data.token')

if [ -z "$SUPERADMIN_TOKEN" ] || [ "$SUPERADMIN_TOKEN" == "null" ]; then
    echo "❌ FATAL: Superadmin login failed"
    exit 1
fi
echo "✅ Superadmin authenticated"

MUHAFIZ_A_TOKEN=$(curl -X POST "$BASE_URL/halaqah/auth/impersonate/$MUHAFIZ_A_ID" \
  -H "Authorization: Bearer $SUPERADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -s | jq -r '.data.token')

if [ -z "$MUHAFIZ_A_TOKEN" ] || [ "$MUHAFIZ_A_TOKEN" == "null" ]; then
   echo "❌ FATAL: Muhafiz A token acquisition failed"
   exit 1
fi
echo "✅ Muhafiz A authenticated (ID: $MUHAFIZ_A_ID)"

MUHAFIZ_B_TOKEN=$(curl -X POST "$BASE_URL/halaqah/auth/impersonate/$MUHAFIZ_B_ID" \
  -H "Authorization: Bearer $SUPERADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -s | jq -r '.data.token')

if [ -z "$MUHAFIZ_B_TOKEN" ] || [ "$MUHAFIZ_B_TOKEN" == "null" ]; then
   echo "❌ FATAL: Muhafiz B token acquisition failed"
   exit 1
fi
echo "✅ Muhafiz B authenticated (ID: $MUHAFIZ_B_ID)"

echo ""
echo "################################################################################"
echo "#                           TEST EXECUTION                                    #"
echo "################################################################################"

# Result tracking
declare -a SCENARIOS
declare -a ACTORS
declare -a EXPECTED
declare -a ACTUAL
declare -a RESULTS

# ============================================================================
# SCENARIO 1: First Attendance (Success)
# ============================================================================
echo ""
echo ">>> SCENARIO 1: First Attendance (Success)"
echo "    Actor: Muhafiz A | Santri: $SANTRI_A_ID | Date: $TODAY | Status: HADIR"

RESPONSE_1=$(curl -X POST "$BASE_URL/absensi" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $MUHAFIZ_A_TOKEN" \
  -d "{\"santri_id\": $SANTRI_A_ID, \"status\": \"HADIR\", \"tanggal\": \"$TODAY\"}" \
  -s)

SUCCESS_1=$(echo "$RESPONSE_1" | jq -r '.success')
MESSAGE_1=$(echo "$RESPONSE_1" | jq -r '.message')

echo "    Response: success=$SUCCESS_1, message='$MESSAGE_1'"

SCENARIOS+=("1. First Attendance")
ACTORS+=("Muhafiz A")
EXPECTED+=("201 Created")

if [ "$SUCCESS_1" == "true" ]; then
    ACTUAL+=("201 Created")
    RESULTS+=("✅ PASS")
    echo "    ✅ PASS"
elif [[ "$MESSAGE_1" == *"sudah diabsen"* ]]; then
    ACTUAL+=("Already exists")
    RESULTS+=("⚠️  PASS*")
    echo "    ⚠️  PASS (pre-existing from previous test run)"
else
    ACTUAL+=("Error: $MESSAGE_1")
    RESULTS+=("❌ FAIL")
    echo "    ❌ FAIL"
    echo "    Full response: $RESPONSE_1"
fi

# ============================================================================
# SCENARIO 2: Duplicate Prevention (THE CORE TEST)
# ============================================================================
echo ""
echo ">>> SCENARIO 2: Duplicate Prevention (CORE VALIDATION)"
echo "    Actor: Muhafiz A | Santri: $SANTRI_A_ID | Date: $TODAY | Status: TERLAMBAT"

RESPONSE_2=$(curl -X POST "$BASE_URL/absensi" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $MUHAFIZ_A_TOKEN" \
  -d "{\"santri_id\": $SANTRI_A_ID, \"status\": \"TERLAMBAT\", \"tanggal\": \"$TODAY\"}" \
  -s)

SUCCESS_2=$(echo "$RESPONSE_2" | jq -r '.success')
MESSAGE_2=$(echo "$RESPONSE_2" | jq -r '.message')

echo "    Response: success=$SUCCESS_2, message='$MESSAGE_2'"

SCENARIOS+=("2. Duplicate Prevention")
ACTORS+=("Muhafiz A")
EXPECTED+=("400 Bad Request")

if [[ "$MESSAGE_2" == *"sudah diabsen"* ]]; then
    ACTUAL+=("400 (Blocked)")
    RESULTS+=("✅ PASS")
    echo "    ✅ PASS - Duplicate correctly prevented!"
elif [ "$SUCCESS_2" == "true" ]; then
    ACTUAL+=("201 (Allowed)")
    RESULTS+=("❌ FAIL")
    echo "    ❌ FAIL - CRITICAL: Duplicate was allowed!"
    echo "    Full response: $RESPONSE_2"
else
    ACTUAL+=("Other error")
    RESULTS+=("❌ FAIL")
    echo "    ❌ FAIL - Unexpected error"
    echo "    Full response: $RESPONSE_2"
fi

# ============================================================================
# SCENARIO 3: Backdate Test (Different Date)
# ============================================================================
echo ""
echo ">>> SCENARIO 3: Backdate Test (Different Date)"
echo "    Actor: Muhafiz A | Santri: $SANTRI_A_ID | Date: $YESTERDAY | Status: HADIR"

RESPONSE_3=$(curl -X POST "$BASE_URL/absensi" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $MUHAFIZ_A_TOKEN" \
  -d "{\"santri_id\": $SANTRI_A_ID, \"status\": \"HADIR\", \"tanggal\": \"$YESTERDAY\"}" \
  -s)

SUCCESS_3=$(echo "$RESPONSE_3" | jq -r '.success')
MESSAGE_3=$(echo "$RESPONSE_3" | jq -r '.message')

echo "    Response: success=$SUCCESS_3, message='$MESSAGE_3'"

SCENARIOS+=("3. Backdate Test")
ACTORS+=("Muhafiz A")
EXPECTED+=("201 Created")

if [ "$SUCCESS_3" == "true" ]; then
    ACTUAL+=("201 Created")
    RESULTS+=("✅ PASS")
    echo "    ✅ PASS"
elif [[ "$MESSAGE_3" == *"sudah diabsen"* ]]; then
    ACTUAL+=("Already exists")
    RESULTS+=("⚠️  PASS*")
    echo "    ⚠️  PASS (pre-existing from previous test)"
else
    ACTUAL+=("Error: $MESSAGE_3")
    RESULTS+=("❌ FAIL")
    echo "    ❌ FAIL"
fi

# ============================================================================
# SCENARIO 4: Security - Cross-Halaqah Access Control
# ============================================================================
echo ""
echo ">>> SCENARIO 4: Security (Cross-Halaqah RBAC)"
echo "    Actor: Muhafiz B | Santri: $SANTRI_A_ID (NOT his student) | Date: $TODAY"

RESPONSE_4=$(curl -X POST "$BASE_URL/absensi" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $MUHAFIZ_B_TOKEN" \
  -d "{\"santri_id\": $SANTRI_A_ID, \"status\": \"ALFA\", \"tanggal\": \"$TODAY\"}" \
  -s)

SUCCESS_4=$(echo "$RESPONSE_4" | jq -r '.success')
MESSAGE_4=$(echo "$RESPONSE_4" | jq -r '.message')

echo "    Response: success=$SUCCESS_4, message='$MESSAGE_4'"

SCENARIOS+=("4. RBAC Security")
ACTORS+=("Muhafiz B")
EXPECTED+=("403 Forbidden")

if [[ "$MESSAGE_4" == *"Akses ditolak"* ]] || [[ "$MESSAGE_4" == *"bukan anggota halaqah"* ]]; then
    ACTUAL+=("403 Forbidden")
    RESULTS+=("✅ PASS")
    echo "    ✅ PASS - Access correctly denied!"
elif [ "$SUCCESS_4" == "true" ]; then
    ACTUAL+=("200 (Allowed)")
    RESULTS+=("❌ FAIL")
    echo "    ❌ FAIL - CRITICAL: Security breach! Cross-halaqah access allowed!"
else
    ACTUAL+=("Other error")
    RESULTS+=("⚠️  WARN")
    echo "    ⚠️  WARN - Blocked but with unexpected error"
fi

# ============================================================================
# SCENARIO 5: Data Integrity Verification
# ============================================================================
echo ""
echo ">>> SCENARIO 5: Data Integrity Verification"
echo "    Actor: Superadmin | Action: GET /api/absensi/santri/$SANTRI_A_ID"

RESPONSE_5=$(curl -X GET "$BASE_URL/absensi/santri/$SANTRI_A_ID" \
  -H "Authorization: Bearer $SUPERADMIN_TOKEN" \
  -s)

COUNT_TODAY=$(echo "$RESPONSE_5" | jq "[.data[] | select(.tanggal | startswith(\"$TODAY\"))] | length")

echo "    Records found for $TODAY: $COUNT_TODAY"

SCENARIOS+=("5. Data Integrity")
ACTORS+=("Superadmin")
EXPECTED+=("1 record only")

if [ "$COUNT_TODAY" -eq "1" ]; then
    ACTUAL+=("1 record")
    RESULTS+=("✅ PASS")
    echo "    ✅ PASS - No duplicates in database"
elif [ "$COUNT_TODAY" -eq "0" ]; then
    ACTUAL+=("0 records")
    RESULTS+=("⚠️  WARN")
    echo "    ⚠️  WARN - No data found (Scenario 1 may have failed)"
else
    ACTUAL+=("$COUNT_TODAY records")
    RESULTS+=("❌ FAIL")
    echo "    ❌ FAIL - CRITICAL: Duplicate records exist in database!"
fi

# ============================================================================
# FINAL REPORT
# ============================================================================
echo ""
echo "################################################################################"
echo "#                            FINAL TEST REPORT                                #"
echo "################################################################################"
echo ""
printf "%-30s | %-15s | %-20s | %-20s | %s\n" "Scenario" "Actor" "Expected" "Actual" "Result"
echo "-------------------------------|-----------------|----------------------|----------------------|--------"

for i in "${!SCENARIOS[@]}"; do
  printf "%-30s | %-15s | %-20s | %-20s | %s\n" \
    "${SCENARIOS[$i]}" \
    "${ACTORS[$i]}" \
    "${EXPECTED[$i]}" \
    "${ACTUAL[$i]}" \
    "${RESULTS[$i]}"
done

echo ""
echo "################################################################################"
echo "Environment Confirmed: Production (Vercel)"
echo "Test Completed: $(date)"
echo "################################################################################"

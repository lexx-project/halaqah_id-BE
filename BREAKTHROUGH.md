(Copy teks di bawah ini dan kirim ke WhatsApp Tim Frontend)

📢 _UPDATE DOKUMENTASI API BACKEND V2_ 🚀
(Lengkap & Final)

🔗 _BASE URL (Production):_
`https://kholakohsistem.vercel.app`

⚠️ _PENTING (BREAKING CHANGES V2)_ ⚠️
Harap sesuaikan nama field di request body:

1. ❌ id_muhafiz ➡️ ✅ _muhafiz_id_
2. ❌ id_santri ➡️ ✅ _santri_id_
3. ❌ id_user ➡️ ✅ _user_id_
4. Response object relasi mungkin menggunakan huruf Kapital (misal: `User`, `Santri`).

---

📂 _DAFTAR ENDPOINT LENGKAP_

1️⃣ _AUTHENTICATION_
Prefix: `/api/halaqah/auth`
🔹 _Login:_ POST `/login`
Body: { "username": "...", "password": "..." }
🔹 _Profile:_ GET `/me`
Header: Authorization: Bearer <token>
🔹 _Register:_ POST `/register` (Superadmin)
Body: { "username": "...", "password": "...", "role": "muhafiz" }
🔹 _List Muhafiz:_ GET `/muhafiz` (Superadmin)
🔹 _Update Muhafiz:_ PATCH `/muhafiz/:id` (Superadmin)
🔹 _Delete Muhafiz:_ DELETE `/muhafiz/:id` (Soft Delete)
🔹 _Restore Muhafiz:_ PATCH `/muhafiz/restore/:id` (Superadmin)
🔹 _Impersonate:_ POST `/impersonate/:id` (Login as User)

2️⃣ _MASTER DATA: HALAQAH_
Prefix: `/api/halaqah`
🔹 _List Aktif:_ GET `/`
🔹 _Create:_ POST `/`
Body: { "name_halaqah": "...", "muhafiz_id": 123 }
🔹 _Update:_ PATCH `/:id`
Body: { "name_halaqah": "..." }
🔹 _Delete:_ DELETE `/:id` (Soft Delete)
🔹 _List Deleted:_ GET `/deleted` (Superadmin)
🔹 _Restore:_ PATCH `/restore/:id` (Superadmin)

3️⃣ _MASTER DATA: SANTRI_
Prefix: `/api/santri`
🔹 _List Aktif:_ GET `/`
🔹 _Create:_ POST `/`
Body: { "nama_santri": "...", "nomor_telepon": "...", "target": "ZIYADAH", "halaqah_id": 123 }
🔹 _Update:_ PATCH `/:id`
Body: { "nama_santri": "...", "nomor_telepon": "..." }
🔹 _Delete:_ DELETE `/:id` (Soft Delete)
🔹 _Restore:_ PATCH `/:id/restore` (Superadmin)

4️⃣ _MODUL ABSENSI (V2)_
Prefix: `/api/absensi`
🔹 _Input Santri:_ POST `/`
Body: { "santri_id": 123, "status": "HADIR", "keterangan": "..." }
🔹 _Edit Absen (Revisi):_ PUT `/:id` 🆕
Body: { "status": "IZIN", "keterangan": "..." }
🔹 _Absen Muhafiz:_ POST `/asatidz` 🆕
Body: { "user_id": 99, "status": "HADIR" } (Khusus Kepala Muhafiz)
🔹 _History Santri:_ GET `/santri/:santriId`
🔹 _Rekap Halaqah:_ GET `/halaqah/:halaqahId`
Query: ?date=YYYY-MM-DD

5️⃣ _MODUL SETORAN (V2)_
Prefix: `/api/setoran`
🔹 _Input Setoran:_ POST `/` 🆕
Body: {
"santri_id": 123,
"juz": 30,
"surat": "An-Naba",
"ayat": "1-10",
"kategori": "INTENS",
"tanggal_setoran": "2023-10-25"
}
(Kategori: HAFALAN, MURAJAAH, INTENS, BACAAN)
🔹 _History Santri:_ GET `/santri/:santriId`
🔹 _Laporan/Rekap:_ GET `/all` 🆕
Query: ?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD

6️⃣ _PUBLIC DISPLAY (NO LOGIN)_
Prefix: `/api/display`
🔹 _List Halaqah:_ GET `/halaqah`
🔹 _List Santri:_ GET `/santri`
🔹 _Absensi per Halaqah:_ GET `/absensi/halaqah/:id`
🔹 _Semua Setoran:_ GET `/setoran/all`

---

💡 _CATATAN DEVELOPER:_

- _Token:_ Wajib sertakan `Authorization: Bearer <token>` di header (kecuali modul Display & Login).
- _Tanggal:_ Gunakan format ISO `YYYY-MM-DD`.
- _Error Handling:_ Backend validasi field `muhafiz_id` dll, pastikan frontend kirim nama field yang benar agar tidak 400 Bad Request.

Semangat Integrasi! 🔥

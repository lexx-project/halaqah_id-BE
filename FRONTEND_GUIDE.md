# HalaqahId Backend V2 - Frontend Integration Guide

## 🔗 Base URL

**Production:** `https://kholakohsistem.vercel.app`

Semua endpoint diawali dengan `/api`.
Contoh: `https://kholakohsistem.vercel.app/api/halaqah/auth/login`

---

## 🚨 PENTING: Perubahan V2 (Breaking Changes)

Mohon perhatikan perubahan nama field berikut agar aplikasi berjalan lancar:

### 1. Perubahan Nama Field ID

Backend V2 menyesuaikan dengan schema database production.

- `id_muhafiz` ❌ -> **`muhafiz_id`** ✅
- `id_santri` ❌ -> **`santri_id`** ✅
- `id_user` ❌ -> **`user_id`** ✅ (Khusus tabel AbsensiAsatidz)

### 2. Perubahan Nama Relation (Response Object)

Objek relasi dalam response JSON mungkin berubah menjadi **Kapital** atau tetap kecil tergantung repository:

- Response Halaqah: `User` (Kapital), `santri` (Kecil).
- Response Absensi: `Santri` (Kapital).
- Response Setoran: `Santri` (Kapital).

---

## 📚 Daftar Endpoint

### 1. Authentication

- **Login**: `POST /api/halaqah/auth/login`
  - Body: `{ "username": "...", "password": "..." }`
  - Response: `{ "token": "...", "user": { ... } }`
- **Me**: `GET /api/halaqah/auth/me`
  - Headers: `Authorization: Bearer <token>`

### 2. Master Data: Halaqah

- **List**: `GET /api/halaqah`
- **Create**: `POST /api/halaqah`
  - Body: `{ "name_halaqah": "...", "muhafiz_id": 123 }`
- **Delete**: `DELETE /api/halaqah/:id`

### 3. Master Data: Santri

- **List**: `GET /api/santri`
- **Create**: `POST /api/santri`
  - Body: `{ "nama_santri": "...", "nomor_telepon": "...", "target": "ZIYADAH", "halaqah_id": 123 }`
- **Delete**: `DELETE /api/santri/:id`

### 4. Modul Absensi (V2)

- **Input Absen Santri**: `POST /api/absensi`
  - Body: `{ "santri_id": 123, "status": "HADIR", "keterangan": "..." }`
- **Edit Absen Santri [BARU]**: `PUT /api/absensi/:id`
  - Body: `{ "status": "SAKIT", "keterangan": "..." }`
  - _Gunakan ini untuk koreksi human error._
- **Input Absen Asatidz [BARU]**: `POST /api/absensi/asatidz`
  - Body: `{ "user_id": 99, "status": "HADIR", "keterangan": "..." }`
  - _Hanya untuk Kepala Muhafiz._

### 5. Modul Setoran (V2)

- **Input Setoran**: `POST /api/setoran`
  - Body:
    ```json
    {
      "santri_id": 123,
      "juz": 30,
      "surat": "An-Naba",
      "ayat": "1-10",
      "kategori": "INTENS", // [BARU] Opsi: HAFALAN, MURAJAAH, INTENS, BACAAN
      "tanggal_setoran": "2023-10-25" // [BARU] Format YYYY-MM-DD (Optional, default now)
    }
    ```
- **History Santri**: `GET /api/setoran/santri/:santriId`
- **Laporan/Reporting [BARU]**: `GET /api/setoran/all`
  - Query Params: `?startDate=2023-01-01&endDate=2023-01-31`
  - _Mengambil semua setoran dalam rentang waktu tertentu._

---

## 💡 Notes

- Pastikan token selalu dikirim di Header untuk endpoint yang butuh auth.
- Gunakan `muhafiz_id` dan `santri_id` di seluruh request body, jangan gunakan `id_...`.

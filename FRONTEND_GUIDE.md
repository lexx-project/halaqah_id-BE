# HalaqahId Backend V2 - Comprehensive API Documentation

## 🔗 Base URL

**Production:** `https://kholakohsistem.vercel.app`

---

## 🚨 PENTING: Perubahan V2 Support (Breaking Changes)

### 1. Perubahan Nama Field ID

Backend V2 menggunakan nama field yang sinkron dengan database:

- `id_muhafiz` ❌ -> **`muhafiz_id`** ✅
- `id_santri` ❌ -> **`santri_id`** ✅
- `id_user` ❌ -> **`user_id`** ✅

### 2. Relation Naming

Relasi dalam response object mungkin menggunakan **Huruf Kapital**:

- `User` (bukan `user`)
- `Santri` (bukan `santri`) - _Tergantung endpoint_

---

## 📚 Daftar Endpoint Lengkap

### 1. Authentication & User Management

**Prefix:** `/api/halaqah/auth`

| Method   | Endpoint               | Description             | Body / Note                                                                                     |
| :------- | :--------------------- | :---------------------- | :---------------------------------------------------------------------------------------------- |
| `POST`   | `/login`               | Login User              | `{ "username": "...", "password": "..." }`                                                      |
| `GET`    | `/me`                  | Get Profile             | Header: `Authorization: Bearer <token>`                                                         |
| `POST`   | `/register`            | Register Muhafiz Baru   | `{ "username": "...", "password": "...", "email": "...", "role": "muhafiz" }` (Superadmin Only) |
| `GET`    | `/muhafiz`             | List Semua Muhafiz      | (Superadmin Only)                                                                               |
| `PATCH`  | `/muhafiz/:id`         | Update Data Muhafiz     | `{ "username": "..." }` (Superadmin Only)                                                       |
| `DELETE` | `/muhafiz/:id`         | Soft Delete Muhafiz     | (Superadmin Only)                                                                               |
| `GET`    | `/muhafiz/deleted`     | List Deleted Muhafiz    | (Superadmin Only)                                                                               |
| `PATCH`  | `/muhafiz/restore/:id` | Restore Deleted Muhafiz | (Superadmin Only)                                                                               |
| `POST`   | `/impersonate/:id`     | Impersonate User        | (Superadmin Only)                                                                               |

### 2. Master Data: Halaqah

**Prefix:** `/api/halaqah`

| Method   | Endpoint       | Description          | Body / Note                                    |
| :------- | :------------- | :------------------- | :--------------------------------------------- |
| `GET`    | `/`            | List Halaqah         | Mengambil halaqah aktif                        |
| `POST`   | `/`            | Create Halaqah       | `{ "name_halaqah": "...", "muhafiz_id": 123 }` |
| `PATCH`  | `/:id`         | Update Halaqah       | `{ "name_halaqah": "..." }`                    |
| `DELETE` | `/:id`         | Soft Delete Halaqah  |                                                |
| `GET`    | `/deleted`     | List Deleted Halaqah | (Superadmin Only)                              |
| `PATCH`  | `/restore/:id` | Restore Halaqah      | (Superadmin Only)                              |

### 3. Master Data: Santri

**Prefix:** `/api/santri`

| Method   | Endpoint       | Description        | Body / Note                                                                                |
| :------- | :------------- | :----------------- | :----------------------------------------------------------------------------------------- |
| `GET`    | `/`            | List Santri        | Mengambil semua santri (filter by halaqah jika muhafiz)                                    |
| `POST`   | `/`            | Create Santri      | `{ "nama_santri": "...", "nomor_telepon": "...", "target": "ZIYADAH", "halaqah_id": 123 }` |
| `PATCH`  | `/:id`         | Update Santri      | `{ "nama_santri": "...", "nomor_telepon": "...", "target": "..." }`                        |
| `DELETE` | `/:id`         | Soft Delete Santri |                                                                                            |
| `PATCH`  | `/:id/restore` | Restore Santri     | (Superadmin Only)                                                                          |

### 4. Modul Absensi (V2)

**Prefix:** `/api/absensi`

| Method | Endpoint              | Description                 | Body / Note                                                               |
| :----- | :-------------------- | :-------------------------- | :------------------------------------------------------------------------ |
| `POST` | `/`                   | Input Absen Santri          | `{ "santri_id": 123, "status": "HADIR", "keterangan": "..." }`            |
| `PUT`  | `/:id`                | **Edit Absen Santri** (Fix) | `{ "status": "IZIN", "keterangan": "..." }` (**New V2**)                  |
| `POST` | `/asatidz`            | **Input Absen Muhafiz**     | `{ "user_id": 99, "status": "HADIR" }` (Kepala Muhafiz Only) (**New V2**) |
| `GET`  | `/santri/:santriId`   | History Absen Santri        |                                                                           |
| `GET`  | `/halaqah/:halaqahId` | Absensi per Halaqah         | Query: `?date=YYYY-MM-DD`                                                 |

### 5. Modul Setoran (V2)

**Prefix:** `/api/setoran`

| Method | Endpoint            | Description            | Body / Note                                                                                                             |
| :----- | :------------------ | :--------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| `POST` | `/`                 | Input Setoran          | `{ "santri_id": 123, "juz": 30, "surat": "...", "ayat": "...", "kategori": "INTENS", "tanggal_setoran": "YYYY-MM-DD" }` |
| `GET`  | `/santri/:santriId` | History Setoran Santri |                                                                                                                         |
| `GET`  | `/all`              | **Laporan Setoran**    | Query: `?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` (**New V2**)                                                          |

### 6. Public Display (V1 - No Auth Required)

**Prefix:** `/api/display`

| Method | Endpoint                      | Description         | Note |
| :----- | :---------------------------- | :------------------ | :--- |
| `GET`  | `/halaqah`                    | List Public Halaqah |      |
| `GET`  | `/santri`                     | List Public Santri  |      |
| `GET`  | `/absensi/halaqah/:halaqahId` | Public Absensi View |      |
| `GET`  | `/setoran/all`                | Public Setoran View |      |

---

## 💡 Notes for Frontend Devs

1.  **Authorization Header:** Jangan lupa menyertakan `Authorization: Bearer <token>` untuk semua endpoint kecuali `Public Display` dan `Login`.
2.  **Date Format:** Gunakan format ISO `YYYY-MM-DD` untuk parameter tanggal.
3.  **Error Handling:** Perhatikan response error 400/500 untuk debugging. Validasi field `muhafiz_id` dll sangat penting.

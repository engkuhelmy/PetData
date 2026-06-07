# 🐾 PetData — Pet Digital Identity & Health Management System
**Versi:** 0.1.0-draft  
**Tarikh:** Jun 2026  
**Status:** Planning / Pre-Development  

---

## 1. Gambaran Projek

PetData adalah sistem pengurusan identiti digital dan kesihatan haiwan peliharaan berasaskan web/PWA. Sistem ini direka untuk menggantikan kad temujanji manual dan buku rekod fizikal dengan platform bersepadu yang dihubungkan kepada API veterinar kerajaan dan swasta.

**Visi:** Satu platform — satu profil haiwan — semua maklumat kesihatan, perjalanan, dan rekod tersedia secara digital.

---

## 2. Modul & Feature Set

### 2.1 🐶 Animal Profile (Core)
**Keutamaan: Phase 1.0**

| Field | Type | Sumber |
|---|---|---|
| Nama haiwan | Text | Manual input |
| Spesies / Baka | Dropdown | Local DB |
| Warna / Ciri fizikal | Text + Tags | Manual input |
| Gambar profil | Image upload | User upload |
| Tarikh lahir (DOB) | Date | Manual input |
| Berat badan | Float (kg) + history log | Manual + sync API |
| Jantina | Dropdown | Manual input |
| Warna microchip | Text | Manual / API |
| Nombor microchip | Text | Manual / API |
| Sejarah makanan | Log entries (date + food type + brand) | Manual input |
| ID Haiwan (sistem) | Auto-generated UUID | System |

**UX Notes:**
- Profile photo kena ada fallback avatar ikut spesies
- Berat badan kena ada chart trend (boleh lihat naik/turun)
- Sejarah makanan boleh categorize: dry food, wet food, raw, supplement

---

### 2.2 ✈️ Travel History — Vets Passport API
**Keutamaan: Phase 1.0**

Ambik data dari **Vet Passport API** (kerajaan) untuk rekod:
- Negara yang dilawati
- Tarikh masuk/keluar
- Sijil kesihatan yang dikeluarkan semasa travel
- Kuarantin status
- Endorsement officer info

**API Integration:**
```
GET /api/vetpassport/{animal_id}/travel-history
Response: [ { country, entry_date, exit_date, cert_id, quarantine_status } ]
```

**UX Notes:**
- Timeline view — visual journey map
- Flag ikon untuk setiap negara
- Badge colour: Hijau = clear, Kuning = quarantine selesai, Merah = ada isu

---

### 2.3 🔄 Ownership Transfer
**Keutamaan: Phase 1.0**

Fungsi untuk tukar pemilikan haiwan antara pengguna sistem.

**Flow:**
1. Owner semasa initiate transfer
2. Masukkan IC/ID pemilik baru atau email
3. Sistem fetch data pemilik baru dari API
4. Confirmation step — kedua belah pihak perlu confirm
5. Transfer log disimpan (timestamp, from_owner, to_owner)
6. Sijil pemilikan baru auto-generate

**API Integration:**
```
POST /api/ownership/transfer
Body: { animal_id, current_owner_id, new_owner_ic_or_email, reason }
GET  /api/ownership/{animal_id}/history
```

**UX Notes:**
- Require PIN/biometric confirmation sebelum transfer
- Auto-notify pemilik baru via email/WhatsApp
- Transfer history log visible kepada semua pemilik sebelum ini

---

### 2.4 📡 NFC Collar Integration
**Keutamaan: Phase 2.0**

Link NFC collar tag kepada profil haiwan. Bila scan NFC — terus ke profil haiwan.

**Flow Phase 2.0:**
- Register NFC tag UID kepada animal_id
- Scan collar → redirect ke public mini-profile
- Public profile tunjuk: nama, gambar, owner contact, status kesihatan asas
- Option untuk "Report Found Pet" kalau haiwan sesat

**API Integration:**
```
POST /api/nfc/register  { nfc_uid, animal_id }
GET  /api/nfc/{nfc_uid}/profile  → public mini-profile
```

**Redirect strategy:** guna pendek URL / QR redirect layer supaya URL kat NFC tak perlu hardcode (ikut pattern Projek ID yang dah buat)

---

### 2.5 🏅 Animal Certificate
**Keutamaan: Phase 1.0**

Sijil digital rasmi untuk setiap haiwan yang berdaftar. Link kepada veterinar API untuk pengesahan.

**Jenis Sijil:**
- Sijil Pendaftaran Haiwan
- Sijil Kesihatan (Health Certificate)
- Sijil Pemilikan (Ownership Certificate)
- Sijil Travel / Export Health
- Sijil Sterilisasi / Neutering

**Ciri-ciri:**
- QR code untuk verify keaslian
- Boleh download PDF
- Expiry date untuk sijil berkaitan (e.g. health cert)
- Vet signature digital (via API)

**API Integration:**
```
GET  /api/certificates/{animal_id}
POST /api/certificates/request { animal_id, cert_type, vet_clinic_id }
GET  /api/certificates/{cert_id}/verify
```

---

### 2.6 💉 Medical Information — Vet API
**Keutamaan: Phase 1.0**

Dashboard maklumat perubatan yang sync dengan veterinar API.

**Data Points:**
| Info | Detail |
|---|---|
| Status vaksin | Senarai vaksin, tarikh, due date |
| Deworming | Tarikh terakhir, jenis ubat, due date |
| Flea/tick treatment | Tarikh, produk, due date |
| Rekod penyakit | Diagnosis, tarikh, vet yang merawat |
| Rekod pembedahan | Procedure, tarikh, outcome |
| Alahan | Senarai allergen |
| Ubat semasa | Nama, dos, tempoh |

**API Integration:**
```
GET /api/medical/{animal_id}/vaccines
GET /api/medical/{animal_id}/treatments
GET /api/medical/{animal_id}/records
GET /api/medical/{animal_id}/medications/current
```

**UX Notes:**
- Colour coded status: Hijau = up to date, Kuning = due soon (<30 hari), Merah = overdue
- Push notification bila vaksin nak due (boleh set reminder)
- Timeline view untuk medical history

---

### 2.7 📅 Appointment Booking — Vet Kerajaan
**Keutamaan: Phase 1.0**

Fungsi ganti kad temujanji manual. Book terus dengan klinik veterinar kerajaan.

**Flow:**
1. Pilih haiwan dari profil
2. Pilih jenis temujanji (checkup biasa, vaksin, penyakit, pembedahan, dll)
3. Pilih klinik vet kerajaan (list dari API, dengan lokasi & slot tersedia)
4. Pilih tarikh & masa (real-time slot availability)
5. Confirm booking → dapat confirmation number
6. Auto-add ke calendar + reminder
7. Vet boleh update rekod terus selepas appointment

**API Integration:**
```
GET  /api/clinics/government?location={lat,lng}&radius={km}
GET  /api/clinics/{clinic_id}/slots?date={date}&service={type}
POST /api/appointments/book
GET  /api/appointments/{owner_id}/upcoming
PUT  /api/appointments/{apt_id}/cancel
```

**UX Notes:**
- Map view untuk cari klinik terdekat
- Filter: jarak, rating, available slot
- Boleh reschedule dalam app
- Status tracking: Booked → Confirmed → In Progress → Done

---

## 3. API Integration Map

| Modul | API | Auth Method |
|---|---|---|
| Travel History | Vets Passport API (Kerajaan) | OAuth2 / API Key |
| Ownership Transfer | MyGovID / Vet Registry API | OAuth2 |
| NFC Collar | Internal PetData API | JWT |
| Certificate | Vet Registry API | API Key + Signature |
| Medical Info | Vet Clinic API (JPPH/DVS) | OAuth2 |
| Appointment | Klinik Vet Kerajaan API | OAuth2 |

**DVS** = Jabatan Perkhidmatan Veterinar Malaysia  
**JPP** = Jabatan Perkhidmatan Haiwan (state level)

---

## 4. Tech Stack (Cadangan)

| Layer | Tech |
|---|---|
| Frontend | React PWA / Next.js |
| Backend | Node.js (Express) atau Python (FastAPI) |
| Database | PostgreSQL (structured) + Supabase (auth + realtime) |
| File Storage | Supabase Storage / Cloudflare R2 |
| NFC Handling | Web NFC API (Android Chrome) |
| PDF Generation | Puppeteer / jsPDF |
| Push Notification | Firebase FCM |
| Hosting | Vercel / Cloudflare Pages |

---

## 5. Phase Roadmap

### Phase 1.0 — Core Platform
- [ ] Animal Profile (photo, DOB, weight, food history)
- [ ] Medical Information dashboard (vet API)
- [ ] Vaccine status & reminders
- [ ] Certificate viewer
- [ ] Appointment booking (vet kerajaan)
- [ ] Ownership transfer
- [ ] Travel history viewer

### Phase 2.0 — NFC & Physical Integration
- [ ] NFC Collar registration & linking
- [ ] Public mini-profile via NFC scan
- [ ] "Report Found Pet" feature
- [ ] QR code on certificates

### Phase 3.0 — Ecosystem Expansion
- [ ] Vet swasta integration
- [ ] Pet insurance link
- [ ] Community features (lost & found board)
- [ ] Analytics untuk DVS (aggregate data)

---

## 6. Data Privacy & Compliance

- Comply dengan **PDPA Malaysia (Act 709)**
- Owner consent required untuk data sharing ke third-party API
- Medical data encrypted at rest
- Audit log untuk semua data access
- Owner boleh request data deletion (Right to Erasure)

---

## 7. Open Items / Perlu Clarify

- [ ] DVS API — ada public API atau perlu MOU?
- [ ] Vet Passport API — endpoint docs tersedia?
- [ ] MyGovID integration untuk verify ownership — feasible?
- [ ] NFC collar vendor — siapa supplier? standard apa (NTAG213/215/216)?
- [ ] Bahasa antara muka — dual lang BM/EN atau BM only?

---

*Dokumen ini adalah living document. Update bila ada clarification daripada stakeholder atau API provider.*

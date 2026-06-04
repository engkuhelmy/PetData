# PetID Malaysia (AnimaID) - Sistem Identiti Digital Haiwan Bersepadu

PetID Malaysia (atau **AnimaID**) adalah sebuah platform pengenalan digital haiwan berpusat yang dibangunkan berasaskan **Laravel 11**, **SQLite3**, dan rekabentuk **CSS3 Moden**. Platform ini diinspirasikan oleh seni bina **MyDigital ID** untuk menyediakan ekosistem pengurusan haiwan peliharaan, kebajikan animalia, dan biosekuriti yang selamat, tangkas, dan pantas di Malaysia.

Berbeza dengan platform pengenalan asas (seperti petag.id) yang hanya berfungsi sebagai direktori statik, PetID Malaysia mengintegrasikan infrastruktur **Kriptografi Kunci Awam (PKI)**, enkripsi data, serta reka bentuk antaramuka (*UI/UX*) modern menggunakan utiliti CSS3 terkini untuk memberikan pengalaman pengguna bertaraf aplikasi enterprise.

---

## 🌟 Ciri-Ciri Utama & "Advanced" (Maju)

### 1. Identiti Kriptografi Haiwan (Pet Cryptographic Identity)
* **Unique Pet ID (UPID):** Setiap haiwan menerima ID digital unik yang disahkan melalui algoritma sistem untuk mengelakkan pemalsuan baka tulen (*pedigree*).
* **Sijil Digital Pemilikan:** Sijil digital yang sah dari segi undang-undang untuk memudahkan proses pemindahan hak milik (*ownership transfer*) antara pemilik secara atas talian.

### 2. Rekod Kesihatan Berpusat & Imunisasi (EHR)
* **Electronic Health Record (EHR):** Portal khusus untuk Klinik Veterinar merekodkan sejarah perubatan, pembedahan, dan rawatan secara *real-time*.
* **Smart Vaccine Passport:** Pasport vaksinasi digital dengan fungsi pengesahan tanda tangan kriptografi doktor veterinar bertauliah (MVR) bagi memudahkan urusan rentas sempadan negara/negeri.

### 3. Ekosistem IoT & Jejak Pintar (Lost & Found Protocol)
* **Unified Microchip Registry:** Integrasi perkakasan mikrocip ISO RFID (ISO 11784/11785) terus ke pangkalan data SQLite3.
* **Dynamic QR & NFC Access Control:** Tag kolar pintar dengan mod kecemasan (*Lost Mode*). Apabila orang awam mengimbas tag tersebut, koordinat GPS peranti pengimbas dihantar terus kepada pemilik tanpa mendedahkan data peribadi pemilik (*Privacy-Preserving Protocol*).

### 4. Integrasi AI & Analitik Data
* **Pengecaman Wajah Haiwan (AI Biometrics):** Menggunakan model komputer visi sebagai sandaran (*backup*) pengenalan melalui corak hidung (*nose print*) atau geometri wajah sekiranya mikrocip tidak dapat dikesan.

---

## 🎨 Layout & UI CSS3 Modern

Sistem ini dibina dengan memfokuskan kepada estetika moden dan mesra pengguna menggunakan ciri-ciri **CSS3** terkini:
* **CSS Custom Properties (Variables):** Pengurusan palet warna bertema (Dynamic Dark/Light Mode) yang konsisten (cth: `#2563eb` untuk slate blue, `#f8fafc` untuk latar belakang bersih).
* **CSS Flexbox & Grid:** Reka bentuk papan pemuka (*dashboard*) yang responsif tanpa bergantung penuh kepada kerangka berat, memastikan paparan kemas di desktop mahupun peranti mudah alih.
* **Glassmorphism & Shadows:** Kesan visual *frosted glass* (`backdrop-filter: blur()`) dan *box-shadow* lembut untuk kad maklumat haiwan bagi memberikan impak premium dan moden.
* **Modern Transitions & Animations:** Animasi mikro (`transition: all 0.3s ease`) pada komponen interaktif seperti butang menu dan status kolar pintar.

---

## 🏗️ Seni Bina Sistem (System Architecture)

```
┌─────────────────────────────────────────────────────────┐
│           Presentation Layer (CSS3 Modern Layout)       │
│    [Owner Dashboard]   [Vet Portal]   [Admin Console]   │
└────────────────────────────┬────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────┐
│                 Laravel Core Engine (MVC)               │
│    [Routing]    [Controllers]    [Breeze/Fortify Auth]   │
└────────────────────────────┬────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────┐
│                  Service & Security Layer               │
│  [Identity Crypto]  [EHR System]  [AI/NFC Verification] │
└────────────────────────────┬────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────┐
│                   Data Layer (SQLite3)                  │
│    (database.sqlite - Fast, Lightweight, Zero-Config)   │
└─────────────────────────────────────────────────────────┘
```

### Teknostak (Technology Stack)
* **Framework:** Laravel 11 (PHP 8.2+)
* **Database:** SQLite 3 (Dihoskan secara lokal / fail terenkripsi untuk kelajuan akses maksima)
* **Frontend UI:** Blade Templating Engine + CSS3 Vanilla (atau Tailwind CSS untuk utiliti moden)
* **Authentication:** Laravel Breeze / Sanctum (Sistem log masuk selamat bersepadu dengan kawalan peranan - RBAC)

---

## 🔒 Privasi & Keselamatan Data (Privacy by Design)

* **Zero-Knowledge Proofs (ZKP):** Hotel haiwan atau pihak berkuasa tempatan (PBT) boleh menyemak status lesen atau vaksinasi tanpa melihat nama penuh atau no. kad pengenalan pemilik.
* **Encrypted SQLite Columns:** Data sensitif pemilik haiwan dienkripsi di peringkat model Laravel menggunakan fungsi `AsEncryptedCollection` atau `Crypt::encryptString`.

---

## 🛠️ Panduan Pemasangan & Pembangunan (Installation)

### Prasyarat
* PHP 8.2 ke atas
* Composer
* SQLite3

### Langkah Demi Langkah

1. Klon repositori projek:
   ```bash
   git clone https://github.com/yourorganization/petid-laravel.git
   cd petid-laravel
   ```

2. Pasang dependencies menggunakan Composer:
   ```bash
   composer install
   ```

3. Sediakan fail persekitaran (`.env`):
   ```bash
   cp .env.example .env
   ```

4. Konfigurasikan pangkalan data **SQLite3** dalam fail `.env`:
   ```env
   DB_CONNECTION=sqlite
   # Secara lalai, Laravel 11 akan mencipta fail database.sqlite di dalam direktori database/
   ```

5. Jana Kunci Aplikasi (Application Key):
   ```bash
   php artisan key:generate
   ```

6. Jalankan migrasi pangkalan data bersama data ujian (*seeders*):
   ```bash
   php artisan migrate --seed
   ```

7. Jalankan pelayan pembangunan Laravel:
   ```bash
   php artisan serve
   ```
   Aplikasi kini boleh diakses di: `http://127.0.0.1:8000`

---

## 🗺️ Hala Tuju Pembangunan (Roadmap)

* [x] **Fasa 1:** Migrasi struktur sistem ke **Laravel 11** dan tetapan asas **SQLite3**.
* [ ] **Fasa 2:** Pembangunan UI/UX menggunakan reka bentuk **CSS3 Modern Layout** (Glassmorphic Dashboard).
* [ ] **Fasa 3:** Integrasi Modul Kriptografi MyDigital ID Pemilik dan Sijil Pengesahan UPID Haiwan.
* [ ] **Fasa 4:** Pembangunan API untuk integrasi perkakasan pembaca mikrocip RFID/NFC.

---

## 🤝 Sumbangan (Contributing)
Sila rujuk fail [CONTRIBUTING.md](CONTRIBUTING.md) sebelum menghantar sebarang *Pull Request* (PR).

## 📜 Lesen
Projek ini dilesenkan di bawah Lesen MIT.

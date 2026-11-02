# 📜 Jejak Perang: Detektif Sumber WW2
> **Aplikasi Web Edukasi Interaktif Kearsipan Sejarah Perang Dunia II & Literasi Kritis Sumber Sejarah**  
> *IFB-303 Teknik Multimedia — Institut Teknologi Nasional (ITENAS) Bandung (2026)*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat&logo=leaflet&logoColor=white)](https://leafletjs.com/)

---

## 🔍 Tentang Proyek
Dalam pembelajaran sejarah konvensional, siswa kerap diminta sekadar menghafal tanggal pertempuran dan nama tokoh. **Jejak Perang: Detektif Sumber WW2** mengubah paradigma tersebut:
Pengguna berperan sebagai **peneliti arsip baru** di *Balai Arsip Perang*. Tugas utama pengguna bukan hanya mengetahui apa yang terjadi, tetapi **menguji kebenaran sumber** yang saling bertentangan:
- Membedakan **Sumber Primer** (kesaksian saksi mata, buku harian, telegram dinas) dan **Sumber Sekunder** (analisis sejarawan, kajian retrospektif).
- Mengenali **Propaganda & Bias Pengarang** (misal: sensor fasis militer pendudukan Jepang vs catatan korban riil).
- Menilai kredibilitas dokumen menggunakan parameter: *Siapa yang menulis? Kapan ditulis? Untuk siapa ditujukan? Dan apa motif di baliknya?*

---

## 🏛️ Fitur Utama & Modul Pembelajaran

### 1. 🎞️ Layar Intro & Monolog Mesin Tik
- Suasana tematik arsip sepia vintage dengan efek partikel kanvas debu melayang (*floating archive dust particles*).
- Monolog interaktif dari Arsiparis Senior dengan efek suara ketikan mesin tik mekanik.
- Peringatan sensitivitas konten sejarah (*Holocaust*, kekerasan perang, kerja paksa).

### 2. 🗺️ Mode Jelajah (Garis Waktu & Peta Interaktif)
- Garis waktu 5 fase sejarah lengkap:
  1. **Jalan Menuju Perang (1919–1939):** Dari Perjanjian Versailles hingga Pakta Molotov-Ribbentrop.
  2. **Perang di Eropa (1939–1945):** Blitzkrieg, Evakuasi Dunkirk, hingga Pertempuran Stalingrad.
  3. **Pasifik & Asia (1941–1945):** Pearl Harbor, Kapitulasi Kalijati, Pendudukan Jepang & Tragedi Romusha di Indonesia.
  4. **Dampak Kemanusiaan:** Konferensi Wannsee, Holocaust, dan bencana kelaparan warga sipil.
  5. **Akhir Perang & Pascaperang:** Bom atom Hiroshima-Nagasaki, Proklamasi Kemerdekaan RI 17 Agustus 1945, Piagam PBB, dan Sidang Nuremberg.
- Kartu peristiwa akordeon interaktif yang membuka catatan arsip mendalam.
- Integrasi **Peta Dunia Leaflet** dengan tema kartografi vintage dan filter per fase sejarah.

### 3. 🔍 Mode Detektif Sumber (Inti Proyek)
- **5 Kasus Investigasi Dokumen Khusus** (1 kasus untuk tiap fase sejarah).
- **3D Flip Card**: Klik kartu untuk membalik dokumen dan membedah konteks penulis, tujuan penerbitan, dan bias politik di baliknya.
- **Slider Kredibilitas Interaktif (0–100%)**: Uji kredibilitas dengan indikator level realtime (*Propaganda*, *Perlu Diuji*, *Berimbang*, *Kredibel*).
- **Laporan Putusan Sejarawan (*Verdict*)**: Ulasan objektif dan netral mengapa angka atau laporan bisa berbeda antar dokumen tanpa menghakimi pengguna.

### 4. ✍️ Mode Kuis Evaluasi Literasi
- 10 butir pertanyaan pilihan ganda yang menguji nalar kritis dan pemahaman sejarah.
- Dilengkapi animasi getar (*shake*) untuk jawaban salah dan kilau hijau (*pulse glow*) untuk jawaban benar.
- Ulasan penjelasan edukatif instan per butir soal.

### 5. 🎖️ Lencana Kehormatan & Analisis Kemampuan
- Pemberian lencana dinamis beranimasi stempel cap lilin:
  - 📜 *Peneliti Arsip Pratama*
  - 🔍 *Detektif Sumber Mahir*
  - 🎖️ *Arsiparis Utama WW2*
- Rekomendasi personal fase arsip yang perlu dikaji ulang.
- Animasi penghitung skor dinamis dan efek konfeti perayaan.

### 6. 🔊 Mesin Audio Prosedural (Web Audio API)
- Menggunakan generator gelombang suara sintetis bawaan peramban (tanpa ketergantungan file MP3 eksternal):
  - Ketukan tuts mesin tik
  - Pembalik kertas (*paper rustle / card flip*)
  - Klik UI vintage & gesekan slider
  - *Chime* keberhasilan dan nada koreksi
- Kontrol *Mute / Unmute* global.

---

## 🛠️ Struktur Direktori

```text
Projek_Tekmul_Akhit/
├── index.html                  # Antarmuka web utama
├── PROJECT_CHECKLIST.md        # Lembar kontrol checklist proyek multimedia
├── README.md                   # Dokumentasi lengkap repositori
├── .gitignore                  # Berkas filter git
└── assets/
    ├── css/
    │   └── style.css           # Styling vintage, variabel CSS, & animasi responsif
    ├── js/
    │   ├── data.js             # Basis data sejarah, kasus investigasi, & soal kuis
    │   ├── audio.js            # Generator efek suara Web Audio API
    │   └── app.js              # State manager, navigasi, partikel kanvas, & logika kuis
    ├── images/                 # Direktori aset gambar
    └── audio/                  # Direktori aset audio
```

---

## 🚀 Cara Menjalankan Secara Lokal

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/USERNAME/NAMA-REPO.git
   cd NAMA-REPO
   ```
2. **Jalankan langsung:**
   - Cukup klik dua kali berkas `index.html` untuk membuka di browser apa saja (Google Chrome, Microsoft Edge, Firefox, Safari).
   - Atau gunakan ekstensi **Live Server** di VS Code.

---

## 🌐 Publikasi Gratis via GitHub Pages

Website ini dibuat berbasis *static web* sehingga 100% siap di-hosting langsung secara gratis melalui **GitHub Pages**:
1. Buka repositori Anda di GitHub.
2. Masuk ke menu **Settings** > **Pages** (di bilah kiri).
3. Pada bagian **Build and deployment** > **Source**, pilih branch `main` dan folder `/(root)`.
4. Klik **Save**. Dalam 1-2 menit, situs Anda akan aktif di URL:
   `https://USERNAME.github.io/NAMA-REPO/`

---

## 👥 Pengembang
- **Mata Kuliah:** IFB-303 Teknik Multimedia
- **Institusi:** Institut Teknologi Nasional (ITENAS) Bandung
- **Tahun:** 2026


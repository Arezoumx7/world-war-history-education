# 📋 LEMBAR KONTROL PROYEK (PROJECT CHECKLIST)
## Jejak Perang: Detektif Sumber WW2
**Mata Kuliah:** IFB-303 Teknik Multimedia — Institut Teknologi Nasional Bandung (2026)  
**Tema:** Aplikasi Web Interaktif Arsip Sejarah Perang Dunia II & Literasi Kritis Sumber Sejarah

---

### Status Keseluruhan Proyek:
- [x] **Konsep & Storyline:** Selesai (Sesuai Proposal & Tabel Storyline)
- [x] **Desain Sistem & Visual:** Selesai (Palet Warna Kertas Arsip, Tipografi Serif/Sans, Micro-interactions)
- [x] **Struktur Folder & Aset:** Selesai (`assets/css`, `assets/js`, `assets/images`, `assets/audio`)
- [x] **Styling CSS:** Selesai (`assets/css/style.css` — Modern, Anti-Overlap, & Responsive)
- [x] **Basis Data Sejarah (5 Fase + 5 Kasus Detektif + 10 Kuis):** Selesai (`assets/js/data.js`)
- [x] **Mesin Suara Prosedural (Web Audio API):** Selesai (`assets/js/audio.js` — efek ketik, flip kartu, klik, chimes)
- [x] **Logika Aplikasi & Interaktivitas:** Selesai (`assets/js/app.js` — Partikel Debu Arsip, Rating Dinamis, Confetti)
- [x] **Halaman Utama (HTML5):** Selesai (`index.html`)

---

### Detail Verifikasi Fitur & Animasi Interaktif

| No | Modul / Fitur | Kebutuhan Spesifikasi | Status | Peningkatan Animasi & Perbaikan Anti-Tumpang-Tindih |
|:--:|:---|:---|:---:|:---|
| **1** | **Intro & Landing (Scene 1)** | • Fullscreen hero bernuansa arsip sepia<br>• Teks typewriter arsiparis senior<br>• Peringatan konten sensitif<br>• Tombol besar "Mulai Misi" | **SELESAI** | ✨ **Animasi partikel debu kearsipan antik (Canvas Particles)** melayang di udara.<br>🛡️ **Anti-Overlap:** Memperbaiki layout flex hero, tombol tidak tertimpa hint scroll pada layar pendek. |
| **2** | **Menu Utama (Scene 2)** | • 3 Kartu besar: Jelajah, Detektif Sumber, Kuis<br>• Indikator progres global realtime<br>• Desain kertas arsip vintage | **SELESAI** | ✨ **Hover lift 3D** dengan bayangan lembut dan rotasi ikon dinamis.<br>🛡️ **Pemberian padding-top aman (105px)** sehingga judul tidak tertutup fixed navbar. |
| **3** | **Mode Jelajah: Garis Waktu (Scene 3)** | • 5 Fase sejarah lengkap (1919–1945+)<br>• Kartu peristiwa interaktif dapat diperluas | **SELESAI** | ✨ **Animasi Akordeon Halus (max-height & opacity transition)** saat kartu diklik, panah berputar mulus.<br>✨ **Pulsing dot** pada garis waktu ketika kartu diarahkan kursor (*hover*). |
| **4** | **Mode Jelajah: Peta Interaktif (Scene 4)** | • Peta interaktif dunia (Leaflet)<br>• Pin koordinat peristiwa penting<br>• Filter per fase | **SELESAI** | 🛡️ **Resolusi Konflik Z-Index:** Kontrol zoom Leaflet diamankan di `z-index: 500` di bawah navbar (`z-index: 2500`), menghilangkan bug peta menabrak menu navigasi saat di-scroll. |
| **5** | **Mode Detektif Sumber (Scene 5 & 6) — INTI** | • 5 Kasus investigasi dokumen bersejarah<br>• Flip Card 3D (kutipan vs konteks & bias)<br>• Slider kredibilitas interaktif<br>• Panel putusan (*verdict*) sejarawan | **SELESAI** | ✨ **Efek 3D Mouse Tilt** saat kursor melayang di atas kartu arsip.<br>✨ **Tag Level Kredibilitas Dinamis Realtime** berganti warna (*Propaganda*, *Bias*, *Berimbang*, *Kredibel*) saat slider digeser.<br>✨ **Animasi Stempel Cap Verifikasi (Pop Check)** pada tombol kasus.<br>🛡️ **Tinggi kartu fleksibel dengan scroll internal khusus** sehingga kutipan panjang tidak memotong teks klaim di bawahnya. |
| **6** | **Mode Kuis (Scene 7)** | • 10 Soal pilihan ganda berbasis dokumen arsip<br>• Umpan balik instan & penjelasan edukatif | **SELESAI** | ✨ **Animasi Shake (Getar)** saat jawaban kurang tepat.<br>✨ **Animasi Pulse Hijau Bercahaya** saat jawaban benar.<br>✨ Efek suara sinkron dengan respons visual. |
| **7** | **Skor & Lencana (Scene 8)** | • Lencana "Peneliti Arsip" (Pratama, Mahir, Utama)<br>• Rincian skor gabungan<br>• Rekomendasi materi | **SELESAI** | ✨ **Efek Cap Stempel Lilin Berputar (Stamp Press Bounce)** pada lencana.<br>✨ **Animasi Counter Angka Total Skor** menghitung dari 0 ke nilai akhir secara dinamis.<br>✨ **Hujan Partikel Kertas Emas (Confetti Celebration Burst)** saat halaman skor terbuka. |
| **8** | **Audio & Efek Suara** | • Web Audio API Synthesizer (Tanpa file MP3 eksternal)<br>• Tombol toggle suara global | **SELESAI** | Suara ketikan mesin tik, gesekan pembalik kertas, klik vintage, nada benar/salah, dan chime perayaan. |
| **9** | **Navigasi & Tata Letak** | • Fixed bar responsif<br>• Mobile drawer menu | **SELESAI** | ✨ **Navbar scroll detection:** Otomatis menambahkan bayangan blur saat pengguna menggulir halaman. |

---

### Cara Menguji & Menjalankan:
1. Buka file `index.html` langsung di browser modern apa saja (Chrome, Edge, Firefox, Safari).
2. Nikmati partikel debu di halaman awal $\rightarrow$ klik **Mulai Misi** $\rightarrow$ buka **Detektif Sumber** untuk mencoba efek 3D Tilt dan slider interaktif $\rightarrow$ selesaikan kuis $\rightarrow$ lihat animasi cap lencana dan hujan konfeti di Halaman Skor!

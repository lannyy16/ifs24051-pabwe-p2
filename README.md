Praktikum 2 — PABWE 2026
Topik: CSS, Bootstrap 5 & Tailwind CSS 4
Tujuan: Membangun website multi-halaman untuk sebuah perusahaan jasa AI (chatbot, otomasi, computer vision, konsultasi data, dsb.), dengan setiap halaman menerapkan pendekatan styling yang berbeda sesuai teknologi yang ditentukan.
Bahasa konten: Bahasa Indonesia (istilah teknis boleh dalam Bahasa Inggris).
---
1. Brand
Tema: perusahaan jasa AI.
Contoh nama brand: `NovaMind AI`, `DelAI Studio`, `Aether Intelligence` — boleh diganti sesuai selera, asalkan konsisten.
Wajib: nama brand / logo yang sama digunakan di semua halaman.
2. Aturan Global
Gunakan semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
Seluruh halaman harus responsive (desktop & mobile).
Gambar boleh berasal dari file lokal (`assets/img/`) maupun URL publik.
Dilarang mengumpulkan file latihan/lab tanpa modifikasi — konten harus disesuaikan dengan studi kasus perusahaan jasa AI.
Tambahkan komentar singkat pada bagian-bagian penting kode.
Kode harus terbaca dengan indentasi konsisten.
3. Struktur File
File	Peran
`index.html`	Landing page
`blog.html`	Daftar blog
`blog-detail.html`	Detail blog (minimal 1 artikel)
`cv.html`	Curriculum Vitae
`assets/css/style.css`	External CSS khusus landing page
`assets/img/`	Folder gambar (opsional)
`README.md`	Dokumentasi proyek (opsional)
> **Catatan penting:** setiap halaman punya *satu* pendekatan styling — jangan mencampur framework antar halaman (lihat detail per halaman di bawah).
---
4. Halaman: `index.html` (Landing Page)
Aspek	Ketentuan
Teknologi	HTML + CSS murni, wajib external CSS (`assets/css/style.css`)
Dilarang	Bootstrap, Tailwind, atau CSS framework lain
Boleh	Google Fonts, CSS variables, Flexbox, CSS Grid, media query, hover/transition
Section wajib
Navbar / header — logo/nama perusahaan, link in-page (`#layanan`, `#tentang`, `#kontak`, dsb.), serta link ke `blog.html` dan `cv.html`.
Hero — judul utama, value proposition singkat, tombol CTA.
Layanan — minimal 3 item/card jasa AI.
Tentang / Keunggulan — intro singkat perusahaan.
Kontak / CTA — form sederhana (nama, email, pesan) atau info kontak + tombol.
Footer — nama perusahaan, tahun, link cepat.
Fitur CSS yang diharapkan
Selectors (element/class/id), box model, Flexbox atau Grid, tipografi konsisten, hover/transition, `@media` responsive.
---
5. Halaman: `blog.html` (Daftar Blog)
Aspek	Ketentuan
Teknologi	Bootstrap 5 (CDN diperbolehkan, versi 5.x stabil) + Bootstrap Icons
Catatan	CSS custom tipis boleh; jangan ganti Bootstrap dengan framework lain
Konten	Minimal 4 artikel blog bertema AI
Navbar	Link ke `index.html`, `blog.html`, `cv.html`
Setiap card artikel wajib menampilkan
Cover / thumbnail
Kategori / tag (boleh pakai badge + ikon)
Judul yang mengarah ke `blog-detail.html`
Ringkasan singkat (1–2 kalimat)
Penulis, tanggal, dan Bootstrap Icons (contoh: `bi-person`, `bi-calendar`, `bi-clock`)
Komponen yang diharapkan
`navbar`, `container`, `row`, `col-*`, `card`, `badge`, `footer` — pagination bersifat opsional.
---
6. Halaman: `blog-detail.html` (Detail Blog)
Aspek	Ketentuan
Teknologi	Bootstrap 5 + Bootstrap Icons (sama seperti `blog.html`)
Dibuka dari	Judul artikel / tombol "baca selengkapnya" di `blog.html`
Konten wajib
Cover lebar
Meta: penulis, tanggal, kategori (dengan Bootstrap Icons)
Judul `<h1>` yang jelas
Minimal 3 paragraf topik AI
Opsional
`blockquote`, list tips, alert, card artikel terkait, area komentar sederhana (avatar/ikon + textarea + tombol submit).
---
7. Halaman: `cv.html` (Curriculum Vitae)
Aspek	Ketentuan
Teknologi	Tailwind CSS 4 (Play CDN `@tailwindcss/browser@4` diperbolehkan)
Catatan	Tailwind harus jadi sistem styling utama
Boleh	Tabler Icons / SVG; `@theme` untuk token warna brand
Section wajib
Header profil — foto/avatar, nama lengkap, role/tagline, kontak (email, telepon/WA, lokasi, GitHub/LinkedIn).
About — 2–4 kalimat.
Pendidikan — institusi, program, tahun.
Pengalaman — minimal 2 item (magang / organisasi / proyek).
Keahlian — chip/badge teknis (HTML, CSS, Bootstrap, Tailwind, Git, dsb.).
Proyek / Portfolio — minimal 2 item (boleh taut ke halaman lain di repo ini).
Opsional tapi direkomendasikan: sertifikat / penghargaan.
Utility Tailwind yang diharapkan
`flex` / `grid` + `gap`, spacing, responsive prefixes (`sm:` / `md:` / `lg:`), `hover:` / `transition`, tipografi.
---
8. Integrasi Antar Halaman
Wajib dipenuhi:
Setiap halaman memiliki navigasi ke halaman utama lain (Landing, Blog, CV).
Judul blog di `blog.html` membuka `blog-detail.html`.
Identitas brand (nama/logo) konsisten di semua halaman, meskipun stack styling-nya berbeda.
Konten landing page dan blog bertema AI.
Kode relatif rapi, dengan komentar singkat di bagian penting.
Bukan salinan penuh file latihan tanpa modifikasi.
---
9. Kriteria Penilaian
Kriteria	Bobot	Fokus Pemeriksaan
`struktur_project`	25	Kerapian struktur proyek sesuai spesifikasi: organisasi file (`index.html` untuk landing dengan CSS, `blog.html` & `blog-detail.html` untuk Bootstrap 5, `cv.html` untuk Tailwind CSS 4, `assets/css/style.css`, `assets/img/`); keterhubungan antar halaman melalui navigasi (Landing, Blog, CV); link dari daftar blog ke detail artikel; konsistensi identitas visual (nama brand/logo) antar halaman meskipun teknologinya berbeda.
`clean_code`	25	Kebersihan penulisan kode: keterbacaan, indentasi konsisten, penamaan class/id yang jelas, minim duplikasi markup, penggunaan semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`), komentar singkat pada bagian penting, serta kode bukan salinan penuh file latihan tanpa modifikasi sesuai studi kasus.
`best_practice`	25	Penerapan praktik terbaik sesuai teknologi tiap halaman: landing page memakai external CSS murni (tanpa framework) dengan selectors, box model, Flexbox/Grid, hover/transition, CSS variables, dan media query; blog memakai Bootstrap 5 + Bootstrap Icons dengan komponen navbar, card, badge, form; CV memakai Tailwind CSS 4 (utility class, responsive prefixes, `@theme` bila ada); konten bertema AI; serta halaman responsive di desktop dan mobile.
`separation_of_concern`	25	Pemisahan tanggung jawab antar bagian sistem secara jelas: `index.html` fokus landing page jasa AI dengan external CSS; `blog.html` & `blog-detail.html` fokus daftar dan detail artikel AI dengan Bootstrap 5; `cv.html` fokus CV digital dengan Tailwind CSS 4; pemisahan markup HTML dari stylesheet (external CSS / CDN framework sesuai halaman); serta setiap halaman punya peran tunggal tanpa mencampur stack styling.
Total bobot: 100
---
10. Checklist Pengerjaan
[ ] `index.html` — landing page, CSS murni via `assets/css/style.css`, tanpa framework
[ ] `blog.html` — daftar minimal 4 artikel AI, Bootstrap 5 + Bootstrap Icons
[ ] `blog-detail.html` — detail artikel, minimal 3 paragraf, Bootstrap 5 + Bootstrap Icons
[ ] `cv.html` — CV digital, Tailwind CSS 4 sebagai sistem styling utama
[ ] Navigasi antar halaman (Landing / Blog / CV) berfungsi di semua file
[ ] Judul blog di `blog.html` mengarah ke `blog-detail.html`
[ ] Nama brand/logo konsisten di seluruh halaman
[ ] Semantic HTML5 digunakan secara konsisten
[ ] Komentar singkat pada bagian penting kode
[ ] Responsive di desktop dan mobile
[ ] Tidak ada pencampuran framework antar halaman (separation of concern)
11. Catatan untuk AI Assistant
Setiap halaman wajib satu stack styling saja, jangan bantu menambahkan Bootstrap di `index.html`/`cv.html`, atau Tailwind di `blog.html`/`blog-detail.html` — ini melanggar `best_practice` dan `separation_of_concern`.
`index.html` tidak boleh memuat file/CDN framework CSS apa pun — hanya `assets/css/style.css`.
Gunakan tag semantic HTML5 secara konsisten di semua halaman, bukan hanya `<div>`.
Pastikan setiap halaman baru menyertakan navbar yang konsisten dengan brand yang sama.
Konten (teks layanan, artikel blog, dsb.) harus bertema perusahaan jasa AI, bukan konten generik/placeholder dari tutorial.
Jangan menyalin mentah contoh dari dokumentasi Bootstrap/Tailwind tanpa penyesuaian konten dan brand.
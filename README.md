# DelAI Studio — Praktikum 2 PABWE

Website multi-halaman perusahaan jasa AI dengan tiga pendekatan styling sesuai ketentuan praktikum: CSS murni, Bootstrap 5, dan Tailwind CSS 4.

## Struktur Proyek

```text
ifs24051-pabwe-p2/
├── index.html
├── blog.html
├── blog-detail.html
├── cv.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── blog.css
│   └── img/
│       ├── logo.svg
│       ├── gen-ai.webp
│       ├── machine.webp
│       ├── etika.webp
│       ├── produktivitas.webp
│       └── karina-256.webp
└── .vscode/
    └── settings.json
```

## Pembagian Styling

- `index.html` menggunakan HTML + CSS murni melalui `assets/css/style.css`. Tidak menggunakan Bootstrap atau Tailwind.
- `blog.html` dan `blog-detail.html` menggunakan Bootstrap 5 + Bootstrap Icons. Penyesuaian kecil dipisahkan ke `assets/css/blog.css`.
- `cv.html` menggunakan Tailwind CSS 4 sebagai sistem styling utama.

## Perbaikan Struktur

- Folder gambar diseragamkan menjadi `assets/img/`.
- Nama file gambar dibuat konsisten dan tanpa spasi.
- CSS tambahan halaman blog dipindahkan dari HTML ke `assets/css/blog.css`.
- Inline `style` pada halaman blog dan detail dihilangkan.
- Referensi JavaScript lokal yang tidak diperlukan dihapus.
- Gambar profil dioptimalkan dan diberi ukuran eksplisit.
- Semantic HTML5, navigasi antar halaman, dan identitas DelAI Studio tetap dipertahankan.

## Halaman

- `index.html` — landing page DelAI Studio.
- `blog.html` — daftar 4 artikel AI.
- `blog-detail.html` — detail artikel Generative AI.
- `cv.html` — CV Karina Putri Sion.

# DelAI Studio — Website Multi-Halaman (Praktikum 2 PABWE)

Website multi-halaman untuk brand fiktif perusahaan jasa AI **DelAI Studio**,
dibangun sesuai ketentuan Praktikum 2: CSS murni, Bootstrap 5, dan Tailwind CSS 4.

## Struktur Proyek

| File | Teknologi | Peran |
|---|---|---|
| `index.html` | HTML + CSS murni (`assets/css/style.css`) | Landing page |
| `blog.html` | Bootstrap 5 + Bootstrap Icons | Daftar blog (4 artikel AI) |
| `blog-detail.html` | Bootstrap 5 + Bootstrap Icons | Detail artikel, artikel terkait, komentar |
| `cv.html` | Tailwind CSS 4 (Play CDN) | Curriculum Vitae |
| `assets/css/style.css` | — | External CSS untuk landing page |
| `assets/img/*.svg` | — | Ilustrasi cover artikel blog (custom, tanpa dependensi eksternal) |
| `assets/js/main.js` | Vanilla JS | Feedback sederhana untuk form kontak |

Setiap halaman hanya menggunakan **satu** pendekatan styling sesuai perannya
(separation of concern): `index.html` tidak memuat Bootstrap/Tailwind,
`blog.html`/`blog-detail.html` tidak memuat Tailwind, dan `cv.html` tidak
memuat Bootstrap.

## Ringkasan Perbaikan

- **Gambar blog yang broken diperbaiki** — path lama (`assets/img/*.jpg`)
  tidak pernah ada filenya. Diganti dengan 4 ilustrasi SVG custom (ringan,
  tanpa request eksternal) lengkap dengan `width`/`height`/`loading`/`decoding`
  untuk mencegah layout shift dan mempercepat render.
- **Kontras warna diperbaiki** untuk memenuhi WCAG AA — beberapa warna
  (`text-slate-400` di CV, `text-secondary` & warna primary default Bootstrap
  di halaman blog) sebelumnya berada di ambang batas atau gagal kontras.
- **Konsistensi brand** — warna primer Bootstrap di `blog.html` &
  `blog-detail.html` diselaraskan dengan warna brand ungu (`#5b4bdb`) yang
  dipakai di `index.html` dan `cv.html`.
- **Aksesibilitas keyboard & screen reader** — skip link di setiap halaman,
  `aria-hidden` pada ikon dekoratif, `aria-current="page"` pada navigasi
  aktif, label form yang terhubung dengan benar, dan status area
  (`aria-live`) untuk feedback form kontak.
- **Kelengkapan konten** — `blog-detail.html` kini memiliki breadcrumb,
  bagian "Artikel Terkait", dan area komentar sederhana.

## Menjalankan Secara Lokal

Tidak perlu build tool. Cukup buka `index.html` langsung di browser, atau
jalankan server statis sederhana, contoh:

```bash
python3 -m http.server 8000
```

lalu buka `http://localhost:8000`.

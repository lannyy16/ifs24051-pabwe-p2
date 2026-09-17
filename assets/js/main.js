// ================= FORM KONTAK =================
// Mencegah reload halaman saat submit (tidak ada backend pada demo ini)
// dan memberi feedback sederhana kepada pengguna.
(function () {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");

    if (!form || !status) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = form.elements["nama"].value.trim();

        status.textContent =
            "Terima kasih" + (nama ? ", " + nama : "") +
            "! Pesan Anda telah kami terima dan akan segera kami balas.";

        form.reset();
    });
})();

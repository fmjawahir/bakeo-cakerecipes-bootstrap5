// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// challangeForm
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("challangeForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Lakukan permintaan POST ke skrip Google Apps Script
    fetch(
      "https://script.google.com/macros/s/AKfycby3hIYlD3v2pZgMOB5cLi7gfR1atNruCovn9rJ5RxVG8gSgJCqrSP_oK4-VDIxBxES-/exec",
      {
        method: "POST",
        body: new FormData(form),
      }
    )
      .then(function (response) {
        if (response.ok) {
          // Form berhasil dikirim
          alert("Formulir berhasil dikirim.");
          location.reload(); // Memuat ulang halaman
        } else {
          // Gagal mengirim
          alert("Gagal mengirim formulir.");
        }
      })
      .catch(function (error) {
        console.error("Terjadi kesalahan:", error);
      });
  });
});

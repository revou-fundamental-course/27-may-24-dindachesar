document.addEventListener("DOMContentLoaded", function () {
  // Prompt the user for their name
  var userName = prompt("Siapa Ini:");

  // If the user enters a name, update the welcome message
  if (userName) {
    var welcomeName = document.getElementById("welcomeName");
    welcomeName.innerText = "Hai, " + userName + ". Welcome";
  }
});

function submitForm() {
  // Ambil nilai dari formulir
  var nama = document.getElementById("nama").value;
  var tanggalLahir = document.getElementById("tanggal-lahir").value;
  var jenisKelamin = document.querySelector(
    'input[name="jenis-kelamin"]:checked'
  ).value;
  var pesan = document.getElementById("pesan").value;

  // Masukkan data ke dalam Current Info
  var currentInfo = document.querySelector(".current-info");
  currentInfo.querySelector("p:nth-of-type(1)").innerText = "Nama: " + nama;
  currentInfo.querySelector("p:nth-of-type(2)").innerText =
    "Tanggal Lahir: " + tanggalLahir;
  currentInfo.querySelector("p:nth-of-type(3)").innerText =
    "Jenis Kelamin: " + jenisKelamin;
  currentInfo.querySelector("p:nth-of-type(4)").innerText = "Pesan: " + pesan;

  // Perbarui teks di welcome section
  var welcomeName = document.getElementById("welcomeName");
  welcomeName.innerText = "Hai, " + nama + ". Welcome";

  // Kembalikan false untuk mencegah pengiriman formulir tradisional
  return false;
}

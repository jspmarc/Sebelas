// # TODO:
// * [x] Tunjukin soal sekarang
//  - [x] Bener pas tambahin soal
//  - [x] Bener pas hapus soal
// * Simpen state soal

class Soal {
  constructor(pertanyaan, pilihan, jawabanBenar) {
    // Pertanyaan: String,
    // Pilihan: array of strings,
    // jawabanBenar: integer, string untuk array
    this._pertanyaan = pertanyaan;
    this._pilihan = pilihan;
    this._jawabanBenar = jawabanBenar;
  }

  get pertanyaan() {
    return this._pertanyaan;
  }
  set pertanyaan(pertanyaanBaru) {
    this._pertanyaan = pertanyaanBaru;
  }

  get pilihan() {
    return this._pilihan;
  }
  set pilihan(pilihanBaru) {
    this._pilihan = pilihanBaru;
  }

  get jawabanBenar() {
    return this._jawabanBenar;
  }
  set jawabanBenar(jawabanBenarBaru) {
    this._jawabanBenar = jawabanBenarBaru;
  }
}

let listSoal = [];
let gNomorSekarang = 1;

// =========================================================================================================================================
// Buat ganti nomor soal yang ditunjukin
// =========================================================================================================================================
const simpanSoal = () => {
  let soal = document.querySelector("#form-soal");
};

// =========================================================================================================================================
// Buat ganti nomor soal yang ditunjukin
// =========================================================================================================================================
const gantiNomorDisplayed = () => {
  document.querySelector(".question-no").innerText = gNomorSekarang;
};

// =========================================================================================================================================
// Buat dapetin nomor soal sekarang
// =========================================================================================================================================
const ambilNomor = (event) => {
  if (event.target.id !== "add-no-item") {
    gNomorSekarang = event.target.id;
    gantiNomorDisplayed();
  }
};

// =========================================================================================================================================
// Buat nambahin soal
// =========================================================================================================================================
const soalTambah = () => {
  // Milih dropdown menu
  let dropMenu = document.getElementById("question-no-menu");

  // Ambil nomor terakhir
  let lastNo = dropMenu.childNodes[dropMenu.childNodes.length-2].textContent;

  // Membuat item html baru dengan tags dan attribute
  let newOpt = document.createElement("a");
  newOpt.classList = ["dropdown-item question-no-item"];
  newOpt.id = Number(lastNo)+1;
  newOpt.setAttribute("role", "presentation");
  newOpt.setAttribute("href", "#");

  // Ngisi elemen barunya dengan nomor yang bener
  newOpt.innerHTML = Number(lastNo)+1;

  // Tambahin element barunya ke dropdown menu
  dropMenu.insertBefore(newOpt, document.getElementById("question-no-menu").lastChild);

  // Nambahin event listener ke element baru
  newOpt.addEventListener( "click", (event) => {
    ambilNomor(event);
  } );
  gNomorSekarang = Number(lastNo)+1;
  gantiNomorDisplayed();
};

// =========================================================================================================================================
// Buat hapus soal
// =========================================================================================================================================
const soalHapus = () => {
  // Memastikan user tidak salah  click
  if (!window.confirm('Yakin menghapus soal ini?')) return;
  else {
    // komentar
    // window.alert("Soalnya harusnya diapus, tapi ya karena masih bingung jadinya entry terakhir aja yang diapus wkwk");

    // Memilih element dan mengambil option terakhir
    let dropMenu = document.getElementById("question-no-menu");
    let lastNo = dropMenu.childNodes[dropMenu.childNodes.length-2].textContent;

    // Agar tidak menghapus elemen terakhir
    if (lastNo == 1) {
      window.alert("Tidak dapat menghapus nomor terakhir");
      return;
    }

    // Menghapus elemen
    dropMenu.removeChild(document.getElementById(gNomorSekarang));

    // Mengganti angka selanjut2nya
    document.querySelectorAll(".question-no-item").forEach( (elm) => {
      if ( elm.innerText !== "Tambahkan" && Number(elm.innerText) > gNomorSekarang ) {
        let nomorBaru = Number(elm.innerText)-1;
        elm.innerText = nomorBaru;
        elm.id = nomorBaru;
      }
    });

    // Ganti displayd number ke nomor sebelumnya
    gNomorSekarang--;
    gantiNomorDisplayed();
  }
};

// Kode-kode yang dijalanin pas render laman
gantiNomorDisplayed();

// Tombol tambah soal
document.querySelector("#add-no-item").addEventListener("click", soalTambah);

// Tombol dropdown pilih soal
document.querySelectorAll(".question-no-item").forEach( ( elm ) => {
  elm.addEventListener("click", (event) => {
    ambilNomor(event);
  });
});

// Tombol hapus
document.querySelector("#remove-no-item").addEventListener("click", soalHapus);

// Tombol simpan
document.querySelector(".button-submit").addEventListener("click", () => {

});
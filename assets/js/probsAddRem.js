document.getElementById("add-no-item").onclick = () => {
  // Selects the dropdown menu
  let dropMenu = document.getElementById("question-no-menu");

  // Gets the last number
  let lastNo = dropMenu.childNodes[dropMenu.childNodes.length-2].textContent;

  // Creating the new item (tags and attributes)
  let newOpt = document.createElement("a");
  newOpt.setAttribute("class", "dropdown-item question-no-item");
  newOpt.setAttribute("id", `${Number(lastNo)+1}`);
  newOpt.setAttribute("role", "presentation");

  // Filling the new item with a number
  newOpt.innerHTML = Number(lastNo)+1;

  // Adds the new item to the dropdown menu
  // dropMenu.appendChild(newOpt);
  dropMenu.insertBefore(newOpt, document.getElementById("question-no-menu").lastChild);
};

document.getElementById("remove-no-item").onclick = () => {
  // Memastikan user tidak salah  click
  if (!window.confirm('Yakin menghapus soal ini?')) return;
  else {
    // komentar
    window.alert("Soalnya harusnya diapus, tapi ya karena masih bingung jadinya entry terakhir aja yang diapus wkwk");

    // Memilih element dan mengambil option terakhir
    let dropMenu = document.getElementById("question-no-menu");
    let lastNo = dropMenu.childNodes[dropMenu.childNodes.length-2].textContent;

    // Agar tidak menghapus elemen terakhir
    if (lastNo == 1) {
      window.alert("Tidak dapat menghapus nomor terakhir");
      return;
    }

    // Menghapus elemen
    dropMenu.removeChild(document.getElementById(lastNo));
  }
};
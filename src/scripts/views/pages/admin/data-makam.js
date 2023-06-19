/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable function-paren-newline */
/* eslint-disable no-dupe-keys */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable operator-linebreak */
/* eslint-disable prefer-const */
import { DataMakamPage } from "../../templates/template-creator";

const DataMakam = {
  render() {
    return `
    <section class="input_section">
      <div class="container-form border-secondary-subtle shadow rounde mb-5">
      <h2 class="title-form d-flex align-items-center justify-content-center fs-4 fw-bold pb-4">Masukkan Data Makam Baru</h2>
        <form id="submit-form">
        <div class="form-input mb-3">
            <label for="namaLengkap" class="form-label">Nama Lengkap</label>
            <input type="text" class="form-control" id="namaLengkap" required placeholder="Masukkan nama lengkap">
          </div>
          <div class="form-input mb-3">
            <label for="jenisKelamin" class="form-label">Jenis Kelamin</label>
            <div class="d-flex">
              <div class="form-check mx-3">
                <input class="form-check-input" type="radio" name="jenisKelamin" id="lakiLaki" value="Laki-laki">
                <label class="form-check-label" for="lakiLaki">
                  Laki-laki
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="jenisKelamin" id="perempuan" value="Perempuan" checked>
                <label class="form-check-label" for="perempuan">
                  Perempuan
                </label>
              </div>
            </div>
          </div>
          <div class="form-input mb-3">
            <label for="tanggalLahir" class="form-label">Tanggal Lahir</label>
            <input type="date" class="form-control" id="tanggalLahir" required placeholder="Tanggal Lahir">
          </div>
          <div class="form-input mb-3">
            <label for="tanggalMeninggal" class="form-label">Tanggal Meninggal</label>
            <input type="date" class="form-control" id="tanggalMeninggal" required placeholder="Tanggal Meninggal">
          </div>
          <div class="form-input mb-3">
            <label for="agama" class="form-label">Agama</label>
            <input type="text" class="form-control" id="agama" required placeholder="Masukkan Agama">
          </div>
          <div class="form-input mb-3">
            <label for="namaAyah" class="form-label">Nama Ayah</label>
            <input type="text" class="form-control" id="namaAyah" required placeholder="Masukkan Nama Ayah">
          </div>
          <div class="form-input mb-3">
            <label for="alamat" class="form-label">Alamat</label>
            <input type="text" class="form-control" id="alamat" required placeholder="Masukkan Alamat">
          </div>
          <div class="form-input mb-3">
            <label for="nomorMakam" class="form-label">Nomor Makam</label>
            <input type="text" class="form-control" id="nomorMakam" required placeholder="Masukkan Nomor Makam">
          </div>
          <div class="form-input mb-3 d-flex justify-content-center align-items-center">
          <button type="submit" id="btn-submit" value="Submit Data">
          Simpan
        </button>
          </div>
    </form>
    </div>
    
    <div class="container-table">
    <h2 class="title-table d-flex align-items-center justify-content-center fs-4 fw-bold pb-3 pt-5">Data Makam</h2>
    <div class="search-bar d-flex mb-4">
    <input class="form-control me-2" type="search" id="searchInput" placeholder="Cari berdasarkan nama" aria-label="Search">
    <button class="btn btn-outline-success" id="searchButton" type="button">Cari</button>
  </div>
    <table id="makamTable" class="table table-bordered table-striped p-2">
    <thead class="text-center">
        <tr>
          <th style="background-color: #f97b22; color: #ffff;" class="fw-medium fs-6" scope="col">Nama Lengkap</th>
          <th style="background-color: #f97b22; color: #ffff;" class="fw-medium fs-6" scope="col">Jenis Kelamin</th>
          <th style="background-color: #f97b22; color: #ffff;" class="fw-medium fs-6" scope="col">Tanggal Lahir</th>
          <th style="background-color: #f97b22; color: #ffff;" class="fw-medium fs-6" scope="col">Tanggal Meninggal</th>
          <th style="background-color: #f97b22; color: #ffff;" class="fw-medium fs-6" scope="col">Agama</th>
          <th style="background-color: #f97b22; color: #ffff;" class="fw-medium fs-6" scope="col">Nama Ayah</th>
          <th style="background-color: #f97b22; color: #ffff;" class="fw-medium fs-6" scope="col">Alamat</th>
          <th style="background-color: #f97b22; color: #ffff;" class="fw-medium fs-6" scope="col">Nomor Makam</th>
          <th style="background-color: #f97b22; color: #ffff;" class="fw-medium fs-6" scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody class="text-center" id="makamTableBody">
      </tbody>
    </table>
    </div>
  </section>
    `;
  },

  async afterRender() {
    const headerBg = document.querySelector("header");
    headerBg.classList.add("remove-background");
    headerBg.style.height = "120px";
    headerBg.style.backgroundColor = "#1d2939";

    const formElement = document.querySelector(".formpesanan");
    formElement.classList.add("remove-content");

    const submitForm = document.getElementById("submit-form");
    submitForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const namaLengkapInput = document.getElementById("namaLengkap");
      const jenisKelaminInput = document.querySelector(
        'input[name="jenisKelamin"]:checked'
      );
      const tanggalLahirInput = document.getElementById("tanggalLahir");
      const tanggalMeninggalInput = document.getElementById("tanggalMeninggal");
      const agamaInput = document.getElementById("agama");
      const namaAyahInput = document.getElementById("namaAyah");
      const alamatInput = document.getElementById("alamat");
      const nomorMakamInput = document.getElementById("nomorMakam");

      const makamObject = {
        namaLengkap: namaLengkapInput.value,
        jenisKelamin: jenisKelaminInput.value,
        tanggalLahir: tanggalLahirInput.value,
        tanggalMeninggal: tanggalMeninggalInput.value,
        agama: agamaInput.value,
        namaAyah: namaAyahInput.value,
        alamat: alamatInput.value,
        nomorMakam: nomorMakamInput.value,
      };

      // Simpan data makam ke localStorage
      this.saveMakamToLocalStorage(makamObject);

      // Reset form input values
      submitForm.reset();

      // Render kembali tabel makam
      this.renderMakamTable();
    });

    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", () => {
      const searchInput = document.getElementById("searchInput").value;
      this.searchMakamTable(searchInput);
    });

    // Render tabel makam saat halaman dimuat
    this.renderMakamTable();
  },

  saveMakamToLocalStorage(makamObject) {
    const existingMakam = localStorage.getItem("makam");
    let makamList = existingMakam ? JSON.parse(existingMakam) : [];
    makamList.push(makamObject);
    localStorage.setItem("makam", JSON.stringify(makamList));
  },

  renderMakamTable() {
    const tableBody = document.getElementById("makamTableBody");
    tableBody.innerHTML = "";

    const makamList = JSON.parse(localStorage.getItem("makam")) || [];

    makamList.forEach((makamObject, index) => {
      const row = document.createElement("tr");

      const namaCell = document.createElement("td");
      namaCell.innerText = makamObject.namaLengkap;

      const jenisKelaminCell = document.createElement("td");
      jenisKelaminCell.innerText = makamObject.jenisKelamin;

      const tanggalLahirCell = document.createElement("td");
      tanggalLahirCell.innerText = makamObject.tanggalLahir;

      const tanggalMeninggalCell = document.createElement("td");
      tanggalMeninggalCell.innerText = makamObject.tanggalMeninggal;

      const agamaCell = document.createElement("td");
      agamaCell.innerText = makamObject.agama;

      const namaAyahCell = document.createElement("td");
      namaAyahCell.innerText = makamObject.namaAyah;

      const alamatCell = document.createElement("td");
      alamatCell.innerText = makamObject.alamat;

      const nomorMakamCell = document.createElement("td");
      nomorMakamCell.innerText = makamObject.nomorMakam;

      const actionsCell = document.createElement("td");

      const editButton = document.createElement("button");
      editButton.classList.add("btn", "btn-primary", "btn-sm");
      editButton.innerHTML = '<i class="fas fa-edit"></i>';
      editButton.addEventListener("click", () => {
        this.populateFormForEdit(makamObject, index);
      });

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger", "btn-sm");
      deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
      deleteButton.addEventListener("click", () => {
        this.deleteMakamFromLocalStorage(makamObject, index);
        this.renderMakamTable();
      });

      actionsCell.appendChild(editButton);
      actionsCell.appendChild(deleteButton);

      row.appendChild(namaCell);
      row.appendChild(jenisKelaminCell);
      row.appendChild(tanggalLahirCell);
      row.appendChild(tanggalMeninggalCell);
      row.appendChild(agamaCell);
      row.appendChild(namaAyahCell);
      row.appendChild(alamatCell);
      row.appendChild(nomorMakamCell);
      row.appendChild(actionsCell);

      tableBody.appendChild(row);
    });
  },

  searchMakamTable(keyword) {
    const tableBody = document.getElementById("makamTableBody");
    tableBody.innerHTML = "";

    const makamList = JSON.parse(localStorage.getItem("makam")) || [];

    const filteredMakamList = makamList.filter((makamObject) =>
      makamObject.namaLengkap.toLowerCase().includes(keyword.toLowerCase())
    );

    filteredMakamList.forEach((makamObject) => {
      const row = document.createElement("tr");

      const namaCell = document.createElement("td");
      namaCell.innerText = makamObject.namaLengkap;

      const jenisKelaminCell = document.createElement("td");
      jenisKelaminCell.innerText = makamObject.jenisKelamin;

      const tanggalLahirCell = document.createElement("td");
      tanggalLahirCell.innerText = makamObject.tanggalLahir;

      const tanggalMeninggalCell = document.createElement("td");
      tanggalMeninggalCell.innerText = makamObject.tanggalMeninggal;

      const agamaCell = document.createElement("td");
      agamaCell.innerText = makamObject.agama;

      const namaAyahCell = document.createElement("td");
      namaAyahCell.innerText = makamObject.namaAyah;

      const alamatCell = document.createElement("td");
      alamatCell.innerText = makamObject.alamat;

      const nomorMakamCell = document.createElement("td");
      nomorMakamCell.innerText = makamObject.nomorMakam;

      const actionsCell = document.createElement("td");
      const editButton = document.createElement("button");
      editButton.classList.add("btn", "btn-primary", "btn-sm");
      editButton.innerHTML = '<i class="fas fa-edit"></i>';
      editButton.addEventListener("click", () => {
        this.populateFormForEdit(makamObject, index);
      });

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger", "btn-sm");
      deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
      deleteButton.addEventListener("click", () => {
        this.deleteMakamFromLocalStorage(makamObject, index);
        this.renderMakamTable();
      });

      actionsCell.appendChild(editButton);
      actionsCell.appendChild(deleteButton);

      row.appendChild(namaCell);
      row.appendChild(jenisKelaminCell);
      row.appendChild(tanggalLahirCell);
      row.appendChild(tanggalMeninggalCell);
      row.appendChild(agamaCell);
      row.appendChild(namaAyahCell);
      row.appendChild(alamatCell);
      row.appendChild(nomorMakamCell);
      row.appendChild(actionsCell);

      tableBody.appendChild(row);
    });
  },

  populateFormForEdit(makamObject, index) {
    const namaLengkapInput = document.getElementById("namaLengkap");
    const jenisKelaminInputs = document.getElementsByName("jenisKelamin");
    const tanggalLahirInput = document.getElementById("tanggalLahir");
    const tanggalMeninggalInput = document.getElementById("tanggalMeninggal");
    const agamaInput = document.getElementById("agama");
    const namaAyahInput = document.getElementById("namaAyah");
    const alamatInput = document.getElementById("alamat");
    const nomorMakamInput = document.getElementById("nomorMakam");

    namaLengkapInput.value = makamObject.namaLengkap;
    jenisKelaminInputs.forEach((input) => {
      if (input.value === makamObject.jenisKelamin) {
        input.checked = true;
      }
    });
    tanggalLahirInput.value = makamObject.tanggalLahir;
    tanggalMeninggalInput.value = makamObject.tanggalMeninggal;
    agamaInput.value = makamObject.agama;
    namaAyahInput.value = makamObject.namaAyah;
    alamatInput.value = makamObject.alamat;
    nomorMakamInput.value = makamObject.nomorMakam;
    document.getElementById("submit-form").dataset.editIndex = index.toString();
  },

  deleteMakamFromLocalStorage(makamObject) {
    const makamList = JSON.parse(localStorage.getItem("makam")) || [];
    const updatedMakamList = makamList.filter((item) => item !== makamObject);
    localStorage.setItem("makam", JSON.stringify(updatedMakamList));
    this.renderMakamTable(); // Render ulang tabel makam setelah menghapus item
  },

  saveMakamToLocalStorage(makamObject, editIndex) {
    const makamList = JSON.parse(localStorage.getItem("makam")) || [];

    if (editIndex !== undefined) {
      // Jika ada editIndex, hapus item yang diedit dari daftar makam
      makamList.splice(editIndex, 1);
    }

    makamList.push(makamObject);
    localStorage.setItem("makam", JSON.stringify(makamList));
    this.renderMakamTable(); // Render ulang tabel makam setelah menyimpan item
  },

  deleteMakamFromLocalStorage(makamObject) {
    const makamList = JSON.parse(localStorage.getItem("makam")) || [];
    const updatedMakamList = makamList.filter(
      (item) =>
        item.namaLengkap !== makamObject.namaLengkap ||
        item.jenisKelamin !== makamObject.jenisKelamin ||
        item.tanggalLahir !== makamObject.tanggalLahir ||
        item.tanggalMeninggal !== makamObject.tanggalMeninggal ||
        item.agama !== makamObject.agama ||
        item.namaAyah !== makamObject.namaAyah ||
        item.alamat !== makamObject.alamat ||
        item.nomorMakam !== makamObject.nomorMakam
    );
    localStorage.setItem("makam", JSON.stringify(updatedMakamList));
  },
};

export default DataMakam;

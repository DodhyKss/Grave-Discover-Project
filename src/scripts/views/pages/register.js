/* eslint-disable prefer-const */
import { registerTemplate } from "../templates/template-creator";

const RegisterPage = {
  render() {
    return `
    <section class="input_section">
      <h2>Masukkan Pesanan Perawatan Baru</h2>
        <form id="submit-pesanan">
        <div class="mb-3">
            <label for="namaLengkap" class="form-label">Nama Lengkap</label>
            <input type="text" class="form-control" id="namaLengkap" placeholder="Masukkan nama lengkap">
          </div>
          <div class="mb-3">
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
          <div class="mb-3">
            <label for="tanggalLahir" class="form-label">Tanggal Lahir</label>
            <input type="date" class="form-control" id="tanggalLahir" placeholder="Tanggal Lahir">
          </div>
          <div class="mb-3">
            <label for="tanggalMeninggal" class="form-label">Tanggal Meninggal</label>
            <input type="date" class="form-control" id="tanggalMeninggal" placeholder="Tanggal Meninggal">
          </div>
          <div class="mb-3">
            <label for="agama" class="form-label">Agama</label>
            <input type="text" class="form-control" id="agama" placeholder="Masukkan Agama">
          </div>
          <div class="mb-3">
            <label for="namaAyah" class="form-label">Nama Ayah</label>
            <input type="text" class="form-control" id="namaAyah" placeholder="Masukkan Nama Ayah">
          </div>
          <div class="mb-3">
            <label for="alamat" class="form-label">Alamat</label>
            <input type="text" class="form-control" id="alamat" placeholder="Masukkan Alamat">
          </div>
          <div class="mb-3">
            <label for="nomorMakam" class="form-label">Nomor Makam</label>
            <input type="text" class="form-control" id="nomorMakam" placeholder="Masukkan Nomor Makam">
          </div>
      <button type="submit" value="Submit Data">
        Simpan
      </button>
    </form>
    
    <table id="makamTable" class="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">Nama Lengkap</th>
          <th scope="col">Jenis Kelamin</th>
          <th scope="col">Tanggal Lahir</th>
          <th scope="col">Tanggal Meninggal</th>
          <th scope="col">Agama</th>
          <th scope="col">Nama Ayah</th>
          <th scope="col">Alamat</th>
          <th scope="col">Nomor Makam</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody id="makamTableBody">
      </tbody>
    </table>
  </section>
    `;
  },

  async afterRender() {
    const headerBg = document.querySelector("header");
    headerBg.classList.add("remove-background");
    headerBg.style.height = "120px";
    headerBg.style.backgroundColor = "#1d2939";

    const formElement = document.querySelector('.formpesanan');
    formElement.classList.add('remove-content');

    const submitForm = document.getElementById("submit-pesanan");
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

    makamList.forEach((makamObject) => {
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

      const deleteButtonCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger", "btn-sm");
      deleteButton.innerText = "Hapus";
      deleteButton.addEventListener("click", () => {
        this.deleteMakamFromLocalStorage(makamObject);
        this.renderMakamTable();
      });
      deleteButtonCell.appendChild(deleteButton);

      row.appendChild(namaCell);
      row.appendChild(jenisKelaminCell);
      row.appendChild(tanggalLahirCell);
      row.appendChild(tanggalMeninggalCell);
      row.appendChild(agamaCell);
      row.appendChild(namaAyahCell);
      row.appendChild(alamatCell);
      row.appendChild(nomorMakamCell);
      row.appendChild(deleteButtonCell);

      tableBody.appendChild(row);
    });
  },

  deleteMakamFromLocalStorage(makamObject) {
    const existingMakam = localStorage.getItem("makam");
    let makamList = existingMakam ? JSON.parse(existingMakam) : [];
    makamList = makamList.filter((makam) => makam !== makamObject);
    localStorage.setItem("makam", JSON.stringify(makamList));
  },
};

export default RegisterPage;

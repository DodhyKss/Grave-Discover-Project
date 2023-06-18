/* eslint-disable no-undef */
const FormTambahData = {
  async render() {
    return `
      <sidebar-admin></sidebar-admin>
      <div class="container-admin">
      <div>
        <h3 class="fs-4 fw-bold d-flex justify-content-center mx-2">Tambah Data Jenazah</h3>
      </div>
      <form class="input-data" id="formTambahData">
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
        <div class="btn-submit">
          <button type="submit" class="btn" style="background: #f97b22; color: white;" id="simpanButton">Simpan</button>
        </div>
      </form>
    </div>
    `;
  },

  async afterRender() {
    const headerElement = document.querySelector("header");
    headerElement.classList.add("remove-content");

    const footerElement = document.querySelector("footer");
    footerElement.classList.add("remove-content");

    const formTambahData = document.getElementById("formTambahData");
    formTambahData.addEventListener("submit", this.handleSubmit);
  },

  handleSubmit(event) {
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

    const namaLengkap = namaLengkapInput.value;
    const jenisKelamin = jenisKelaminInput.value;
    const tanggalLahir = tanggalLahirInput.value;
    const tanggalMeninggal = tanggalMeninggalInput.value;
    const agama = agamaInput.value;
    const namaAyah = namaAyahInput.value;
    const alamat = alamatInput.value;
    const nomorMakam = nomorMakamInput.value;

    console.log("Nama Lengkap:", namaLengkap);
    console.log("Jenis Kelamin:", jenisKelamin);
    console.log("Tanggal Lahir:", tanggalLahir);
    console.log("Tanggal Meninggal:", tanggalMeninggal);
    console.log("Agama:", agama);
    console.log("Nama Ayah:", namaAyah);
    console.log("Alamat:", alamat);
    console.log("Nomor Makam:", nomorMakam);

    formTambahData.reset();
  },
};

export default FormTambahData;

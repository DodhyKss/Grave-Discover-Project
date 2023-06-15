/* eslint-disable quotes */
const FormTambahData = {
  async render() {
    return `
      <sidebar-admin></sidebar-admin>
      <div class="container-admin">
        <div>
          <h3 class="fs-4 fw-bold d-flex justify-content-center mx-2">Tambah Data Jenazah</h3>
        </div>
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
          <button class="btn" style="background: #f97b22; color: white;" id="simpanButton">Simpan</button>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const headerElement = document.querySelector("header");
    headerElement.classList.add("remove-content");

    const footerElement = document.querySelector("footer");
    footerElement.classList.add("remove-content");

    const simpanButton = document.getElementById("simpanButton");
    simpanButton.addEventListener("click", this.simpanData);
  },

  async simpanData() {
    // Ambil nilai input
    const namaLengkap = document.getElementById("namaLengkap").value;
    const jenisKelamin = document.querySelector(
      'input[name="jenisKelamin"]:checked'
    ).value;
    const tanggalLahir = document.getElementById("tanggalLahir").value;
    const tanggalMeninggal = document.getElementById("tanggalMeninggal").value;
    const agama = document.getElementById("agama").value;
    const namaAyah = document.getElementById("namaAyah").value;
    const alamat = document.getElementById("alamat").value;
    const nomorMakam = document.getElementById("nomorMakam").value;

    // Lakukan proses penyimpanan data
    // ...

    // Contoh: Tampilkan data yang diinputkan
    console.log("Nama Lengkap:", namaLengkap);
    console.log("Jenis Kelamin:", jenisKelamin);
    console.log("Tanggal Lahir:", tanggalLahir);
    console.log("Tanggal Meninggal:", tanggalMeninggal);
    console.log("Agama:", agama);
    console.log("Nama Ayah:", namaAyah);
    console.log("Alamat:", alamat);
    console.log("Nomor Makam:", nomorMakam);
  },
};

export default FormTambahData;

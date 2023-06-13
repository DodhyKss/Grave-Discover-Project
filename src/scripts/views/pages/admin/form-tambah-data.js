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
          <label for="formGroupExampleInput" class="form-label">Nama Lengkap</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Masukkan nama lengkap">
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Jenis Kelamin</label>
          <div class="d-flex">
            <div class="form-check mx-3">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                Laki-laki
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                Perempuan
              </label>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Tanggal Lahir</label>
          <input type="date" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Tanggal Meninggal</label>
          <input type="date" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Agama</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Masukkan Agama">
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Nama Ayah</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Masukkan Nama Ayah">
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Alamat</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Masukkan Alamat">
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Nomor Makam</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Masukkan Nomor Makam">
        </div>
        <div class="btn-submit">
          <input class="btn" style="background: #f97b22; color: white;" type="submit" value="Simpan">
        </div>
      </div>
    </div>
              `;
  },

  async afterRender() {
    const headerElement = document.querySelector("header");
    headerElement.classList.add("remove-content");
  },
};

export default FormTambahData;

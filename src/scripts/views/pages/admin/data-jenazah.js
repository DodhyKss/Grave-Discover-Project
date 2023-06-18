const DataJenazah = {
  async render() {
    return `
      <sidebar-admin></sidebar-admin>
      </div>
      <div class="container-admin">
      <div>
          <h3 class="fs-4 fw-bold d-flex justify-content-center mx-2">Data Jenazah</h3>
        </div>

        <div class="btn-add">
        <button id="btnTambah" class="btn" style="background: #f97b22; color: white;">
          <a href="#/form-tambah-data">+ Tambah</a>
        </button>
      </div>

        <table class="table table-hover">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
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
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <a href=""><i class="fas fa-edit"></i></a>
                  <a href="#" class="delete-button"><i class="fas fa-trash"></i></a>
                </td>
              </tr>
              <!-- Tambahkan data jenazah lainnya di sini -->
            </tbody>
          </table>
        </table>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const headerElement = document.querySelector("header");
    headerElement.classList.add("remove-content");

    const footerElement = document.querySelector("footer");
    footerElement.classList.add("remove-content");

    const btnTambah = document.getElementById("btnTambah");
    btnTambah.addEventListener("click", () => {
      // eslint-disable-next-line import/extensions
      import("./form-tambah-data")
        .then((module) => {
          const FormTambahData = module.default;
          FormTambahData.loadForm();
        })
        .catch((error) => {
          console.error("Gagal memuat halaman formulir:", error);
        });
    });

    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.showAlert();
      });
    });

    // Panggil fungsi untuk mengisi tabel dengan data jenazah
    this.populateTable();
  },

  async populateTable() {
    const tableBody = document.querySelector("tbody");

    try {
      // Panggil fungsi untuk mendapatkan data jenazah dari API
      // eslint-disable-next-line no-undef
      const jenazahData = await getDataJenazah();

      // Hapus semua baris tabel sebelum mengisi data baru
      tableBody.innerHTML = "";

      // Loop melalui data jenazah dan tambahkan setiap baris ke tabel
      jenazahData.forEach((jenazah, index) => {
        const row = document.createElement("tr");

        // Buat kolom untuk setiap properti jenazah
        const columns = [
          index + 1,
          jenazah.namaLengkap,
          jenazah.jenisKelamin,
          jenazah.tanggalLahir,
          jenazah.tanggalMeninggal,
          jenazah.agama,
          jenazah.namaAyah,
          jenazah.alamat,
          jenazah.nomorMakam,
          `<a href=""><i class="fas fa-edit"></i></a>
           <a href="" class="delete-button"><i class="fas fa-trash"></i></a>`,
        ];

        // Tambahkan setiap kolom ke dalam baris
        columns.forEach((column) => {
          const cell = document.createElement("td");
          cell.innerHTML = column;
          row.appendChild(cell);
        });

        // Tambahkan baris ke dalam tbody tabel
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error("Gagal mendapatkan data jenazah:", error);
    }
  },

  showAlert() {
    const alertContainer = document.getElementById("alert-container");
    alertContainer.innerHTML = "<alert-warning></alert-warning>";
  },
};

export default DataJenazah;

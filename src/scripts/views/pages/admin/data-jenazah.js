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
        <button id="btnTambah" style="background: #f97b22; color: white;">
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
                <a href="#"><i class="fas fa-edit"></i></a>
                <a href="#"><i class="fas fa-trash"></i></a>
              </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  <a href="#"><i class="fas fa-edit"></i></a>
                  <a href="#"><i class="fas fa-trash"></i></a>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td colspan="2">Larry the Bird</td>
                <td>
                  <a href="#"><i class="fas fa-edit"></i></a>
                  <a href="#"><i class="fas fa-trash"></i></a>
                </td>
              </tr>
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
          // eslint-disable-next-line no-console
          console.error("Gagal memuat halaman formulir:", error);
        });
    });
  },
};

export default DataJenazah;

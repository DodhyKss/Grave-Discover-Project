const Pesanan = {
  async render() {
    return `
        <sidebar-admin></sidebar-admin>
        <div>
        <div class="container-admin">
            <div>
              <h3 class="fs-4 fw-bold d-flex justify-content-center mx-2 pb-5">
                Pesanan Perawatan Makam
              </h3>
            </div>

        <table class="table table-hover">
          <table class="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Nama Pada Makam</th>
                  <th scope="col">Tanggal Pemesanan</th>
                  <th scope="col">Nama Pemesanan</th>
                  <th scope="col">Nomor Makam</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Selesaikan Pesanan</th>
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
                  <td>
                    <button class="btn btn-success">Selesai</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>
                    <button class="btn btn-success">Selesai</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>
                    <button class="btn btn-success">Selesai</button>
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

export default Pesanan;

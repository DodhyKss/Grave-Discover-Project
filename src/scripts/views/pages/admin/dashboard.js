import iconData from "../../../../public/icons/icon-data.png";
import iconPesanan from "../../../../public/icons/icon-pesanan.png";

const Dashboard = {
  async render() {
    return `
    <sidebar-admin></sidebar-admin>
    <div class="container-dashboard">
      <div class="content-dashboard">
        <div>
          <h3 class="title-bar fs-4 fw-bold d-flex justify-content-center">Pusat data Grave Discover</h3>
        </div>
        <div class="container-admin px-5">
          <div class="row g-2 my-2 gap-5 justify-content-center">
            <div class="col-md-4">
              <div class="card-dashboard p-3 shadow-sm d-flex justify-content-around align-items-center">
                <div>
                  <h3 class="fs-5 text-white">Total Jenazah</h3>
                    <p class="total fs-2 fw-bold">0</p>
              </div>
              <img src="${iconData}" height="60px" alt="">
                  <i class="fas rounded-full p-2"></i>
            </div>
          </div>
            <div class="col-md-4">
              <div class="card-dashboard p-3 shadow-sm d-flex justify-content-around align-items-center">
                  <div>
                    <h3 class="fs-5 text-white">Total Pesanan</h3>
                      <p class="total fs-2 fw-bold">0</p>
                  </div>
                  <img src="${iconPesanan}" height="60px" alt="">
                    <i class="fas rounded-full p-2"></i>
              </div>
            </div>
            <div class="contact-info row-2">
                <div class="item-contact">
                  <h5 class="fw-bold d-flex justify-content-center px-1">Data Makam</h1>
                      <div class="p-2">
                        <span class="info">Alamat :</span>
                        <span class="contact border border-dark pl-2 d-flex">Jalan Imam Bonjol gang lebar Blok C No. 23</span>
                      </div>
                      <div class="p-2">
                        <span class="info">No. Telepon :</span>
                        <span class="contact border border-dark pl-3 d-flex">08123456789</span>
                      </div>
                      <div class="p-2">
                        <span class="info">Email :</span>
                        <span class="contact border border-dark pl-3 d-flex">admin@grave-discover.sipapasi. com</span>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

          `;
  },

  async afterRender() {
    const headerElement = document.querySelector("header");
    headerElement.classList.add("remove-content");

    const footerElement = document.querySelector("footer");
    footerElement.classList.add("remove-content");
  },
};

export default Dashboard;

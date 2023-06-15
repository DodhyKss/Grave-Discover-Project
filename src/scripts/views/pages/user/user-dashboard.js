/* eslint-disable linebreak-style */
const UserDashboard = {
  async render() {
    return `
    <div class="wrapper">
      <div class="wrapper_inner">
        <div class="vertical_wrap">
          <div class="backdrop"></div>
          <div class="vertical_bar">
            <div class="profile_info">
              <div class="img_holder">
                <img src="./img/avatar.jpeg" alt="profile_pic" />
              </div>
              <p class="title">Admin</p>
              <p class="sub_title">grave-discover@sipapasi.com</p>
            </div>
            <ul class="menu">
              <li>
                <a href="#">
                  <span class="icon"
                    ><i class="fas fa-home" style="color: #f97b22"></i
                  ></span>
                  <span class="text">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon"
                    ><i class="fas fa-file-alt" style="color: #f97b22"></i
                  ></span>
                  <span class="text">Data Jenazah</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon"
                    ><i class="fas fa-solid fa-broom" style="color: #f97b22"></i
                  ></span>
                  <span class="text">Pesanan</span>
                </a>
              </li>
              <li><a href="#">
                <span class="icon"><i class="fas fa-user" style="color: #f97b22"></i></span>
                <span class="text">Profil</span>
              </a></li>
              <li><a href="#">
                <span class="icon"><i class="fas fa-sign-out-alt" style="color: #f97b22"></i></span>
                <span class="text">Keluar</span>
              </a></li>
            </ul>
          </div>
        </div>
        <div class="main_container">
          <div class="top_bar">
            <div class="hamburger">
              <i class="fas fa-bars"></i>
            </div>
            <div class="logo">Grave <span>Discover</span></div>
      </div>
      <div class="container-main">
        <div>
          <h3 class="fs-4 fw-bold d-flex justify-content-center mx-2">Perawatan Makam</h3>
        </div>

        <div class="btn-add">
          <input class="btn" style="background: #f97b22; color: white;" type="submit" value="+ Pesan Perawatan">
        </div>



        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100 shadow rounded">
              <div class="card-body">
                <p class="card-text">Tanggal Pemesanan: 17 Agustus 2020</p>
                <p class="card-text">Nomor Makam :17</p>
                <p class="card-text">Keterarangan:</p>
                <p class="text-center">Sedang Diproses</p> 
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 shadow rounded">
              <div class="card-body">
                <p class="card-text">Tanggal Pemesanan: 17 Agustus 2020</p>
                <p class="card-text">Nomor Makam :17</p>
                <p class="card-text">Keterarangan:</p>
                <p class="text-center">Sedang Diproses</p> 
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 shadow rounded">
              <div class="card-body">
                <p class="card-text">Tanggal Pemesanan: 17 Agustus 2020</p>
                <p class="card-text">Nomor Makam :17</p>
                <p class="card-text">Keterarangan:</p>
                <p class="text-center">Sedang Diproses</p> 
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 shadow rounded">
              <div class="card-body">
                <p class="card-text">Tanggal Pemesanan: 17 Agustus 2020</p>
                <p class="card-text">Nomor Makam :17</p>
                <p class="card-text">Keterarangan:</p>
                <p class="text-center">Sedang Diproses</p> 
              </div>
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
    const headerElement = document.querySelector('header');
    headerElement.classList.add('remove-content');
    const hamburger = document.querySelector('.hamburger');
    const wrapper = document.querySelector('.wrapper');
    const backdrop = document.querySelector('.backdrop');

    hamburger.addEventListener('click', () => {
      wrapper.classList.add('active');
    });

    backdrop.addEventListener('click', () => {
      wrapper.classList.remove('active');
    });
  },
};

export default UserDashboard;

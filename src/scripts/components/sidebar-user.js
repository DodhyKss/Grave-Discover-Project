import avatar from "../../public/icons/avatar.jpeg";

class SidebarUser extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
      <div class="wrapper">
        <div class="wrapper_inner">
          <div class="vertical_wrap">
            <div class="backdrop"></div>
            <div class="vertical_bar">
              <div class="profile_info">
                <div class="img_holder">
                <img src="${avatar}" alt="profile_pic" />
                </div>
                <p class="title">Admin</p>
                <p class="sub_title">grave-discover@sipapasi.com</p>
              </div>
              <ul class="menu">
                <li>
                  <a href="#/dashboard">
                    <span class="icon">
                      <i class="fas fa-home" style="color: #f97b22"></i>
                    </span>
                    <span class="text">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#/data-jenazah">
                    <span class="icon">
                      <i class="fas fa-file-alt" style="color: #f97b22"></i>
                    </span>
                    <span class="text">Data Jenazah</span>
                  </a>
                </li>
                <li>
                  <a href="#/pesanan">
                    <span class="icon">
                      <i class="fas fa-solid fa-broom" style="color: #f97b22"></i>
                    </span>
                    <span class="text">Pesanan</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon">
                      <i class="fas fa-sign-out-alt" style="color: #f97b22"></i>
                    </span>
                    <span class="text">Keluar</span>
                  </a>
                </li>
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
            
          </div>
        </div>
      </div>
    `;
  }

  addEventListeners() {
    const hamburger = this.querySelector(".hamburger");
    const wrapper = this.querySelector(".wrapper");
    const backdrop = this.querySelector(".backdrop");

    hamburger.addEventListener("click", () => {
      wrapper.classList.add("active");
    });

    backdrop.addEventListener("click", () => {
      wrapper.classList.remove("active");
    });
  }
}

customElements.define("sidebar-admin", SidebarUser);

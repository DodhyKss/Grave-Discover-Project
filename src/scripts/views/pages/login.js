import { loginTemplate } from "../templates/template-creator";

const LoginPage = {
  async render() {
    return `
    <div class="container-login mt-3 mb-5">
    <div class="login-form rounded-2">
      <div class="card-body mt-3">
        <h3 class="card-title text-center fs-5">Selamat Datang!</h3>
        <h3 class="card-title text-center fs-5 pb-2">Masuk untuk lanjutkan</h3>

        <form class="login-input mt-3" onsubmit="handleSubmit(event)">
          <div class="mb-3 ">
            <label for="email" class="form-label"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" class="form-control fs-8" placeholder="raisa@gmail.com" required/>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label"><i class="fa fa-key"></i> Kata Sandi</label>
            <input type="password" id="password" class="form-control fs-8" placeholder="*****" required/>
          </div>

          <div class="d-grid mt-3">
            <button type="submit" class="btn btn-login">
              Masuk
            </button>
          </div>

          <div class="mt-3 fs-6 mb-3">
            <label>Belum Punya Akun? <a href="/register" class="link">Daftar</a></label>
          </div>
        </form>
      </div>
    </div>
  </div>
`;
  },

  async afterRender() {
    const headerBg = document.querySelector("header");
    headerBg.classList.add("remove-background");
    headerBg.style.height = "120px";
    headerBg.style.backgroundColor = "#1d2939";

    const heroText = document.getElementById("hero");
    heroText.remove();

    const main = document.getElementById("maincontent");
    const section = document.createElement("section");
    section.setAttribute("tabindex", "0");
    section.innerHTML = loginTemplate();
    main.appendChild(section);

    const handleSubmit = (event) => {
      event.preventDefault();

      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");

      const email = emailInput.value;
      const password = passwordInput.value;

      if (email && password) {
        // Lakukan pengiriman data ke server atau lakukan operasi lain sesuai kebutuhan
        console.log("Email:", email);
        console.log("Password:", password);

        // Setelah operasi selesai, bisa redirect ke halaman lain jika diperlukan
        window.location.href = "/dashboard";
      }
    };
  },
};

export default LoginPage;

import { registerTemplate } from "../templates/template-creator";

const RegisterPage = {
  render() {
    return `
      <div class="container-register mt-3 mb-5">
        <div class="register-form rounded-2">
          <div class="card-body mt-3">
            <h3 class="card-title text-center fs-5">Daftar Akun</h3>
            <form class="register-input mt-3" onsubmit="handleSubmit(event)">
              <div class="mb-3">
                <label for="name" class="form-label"><i class="fa fa-user"></i>Nama Lengkap</label>
                <input type="text" id="name" class="form-control fs-8" placeholder="Bowoaji" required/>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label"><i class="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" class="form-control fs-8" placeholder="bowo@gmail.com" required/>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label"><i class="fa fa-key"></i> Kata Sandi</label>
                <input type="password" id="password" class="form-control fs-8" placeholder="*****" required/>
              </div>
              <div class="mb-3">
                <label for="telp" class="form-label"><i class="fa fa-phone"></i>Nomor Telepon</label>
                <input type="number" id="telp" class="form-control fs-8" placeholder="081234765098" required/>
              </div>
              <div class="d-grid mt-3">
                <button type="submit" class="btn btn-register">
                  Daftar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  afterRender() {
    const headerBg = document.querySelector("header");
    headerBg.classList.add("remove-background");
    headerBg.style.height = "120px";
    headerBg.style.backgroundColor = "#1d2939";

    const heroText = document.getElementById("hero");
    heroText.remove();

    const main = document.getElementById("maincontent");
    const section = document.createElement("section");
    section.setAttribute("tabindex", "0");
    section.innerHTML = registerTemplate();
    main.appendChild(section);

    const handleSubmit = (event) => {
      event.preventDefault();

      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      const nameInput = document.getElementById("name");
      const noTelpInput = document.getElementById("telp");

      const email = emailInput.value;
      const password = passwordInput.value;
      const name = nameInput.value;
      const telp = noTelpInput.value;

      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Nama:", name);
      console.log("Nomor Telepon:", telp);
    };

    const form = document.querySelector(".register-input");
    form.addEventListener("submit", handleSubmit);
  },
};

export default RegisterPage;

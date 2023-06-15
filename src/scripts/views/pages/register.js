import { registerTemplate } from "../templates/template-creator";

const RegisterPage = {
  render() {
    return ``;
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

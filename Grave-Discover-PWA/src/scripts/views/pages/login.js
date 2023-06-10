import { loginTemplate } from '../templates/template-creator';

const LoginPage = {
  async render() {
    return `
        <h1 id="main-favorite-restaurant">Login Page</h1>
        `;
  },

  async afterRender() {
    const main = document.getElementById('maincontent');
    const section = document.createElement('section');
    section.setAttribute('tabindex', '0');
    section.innerHTML = loginTemplate();
    main.appendChild(section);
  },
};

export default LoginPage;

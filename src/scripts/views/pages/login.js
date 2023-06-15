/* eslint-disable linebreak-style */
import { loginTemplate } from '../templates/template-creator';

const LoginPage = {
  async render() {
    return `
        <h1 id="main-favorite-restaurant">Login Page</h1>
        `;
  },

  async afterRender() {
    const headerBg = document.querySelector('header');
    headerBg.classList.add('remove-background');
    headerBg.style.height = '120px';
    headerBg.style.backgroundColor = '#1d2939';

    const heroText = document.getElementById('hero');
    heroText.remove();

    const main = document.getElementById('maincontent');
    const section = document.createElement('section');
    section.setAttribute('tabindex', '0');
    section.innerHTML = loginTemplate();
    main.appendChild(section);
  },
};

export default LoginPage;

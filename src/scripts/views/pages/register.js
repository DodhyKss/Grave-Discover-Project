import { registerTemplate } from '../templates/template-creator';

const RegisterPage = {
  async render() {
    return `
        <h1 id="main-favorite-restaurant">Register Page</h1>
        `;
  },

  async afterRender() {
    const headerBg = document.querySelector('header');
    headerBg.classList.add('remove-background');
    const main = document.getElementById('maincontent');
    const section = document.createElement('section');
    section.setAttribute('tabindex', '0');
    section.innerHTML = registerTemplate();
    main.appendChild(section);
  },
};

export default RegisterPage;

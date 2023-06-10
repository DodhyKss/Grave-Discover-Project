import { aboutTemplate } from '../templates/template-creator';

const AboutPage = {
  async render() {
    return `
          <h1>About Page</h1>
          `;
  },

  async afterRender() {
    const main = document.getElementById('maincontent');
    const section = document.createElement('section');
    section.setAttribute('tabindex', '0');
    section.innerHTML = aboutTemplate();
    main.appendChild(section);
  },
};

export default AboutPage;

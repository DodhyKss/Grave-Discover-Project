import { landingPageTemplate } from '../templates/template-creator';

const LandingPage = {
  async render() {
    return `
        <h1>Landing Page</h1>
        `;
  },

  async afterRender() {
    const main = document.getElementById('maincontent');
    const section = document.createElement('section');
    section.setAttribute('tabindex', '0');
    section.innerHTML = landingPageTemplate();
    main.appendChild(section);
  },
};

export default LandingPage;

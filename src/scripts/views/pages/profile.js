import { profile } from '../templates/template-creator';

const Profile = {
  async render() {
    return `
        <h1 id="main-favorite-restaurant">Profile Page</h1>
        `;
  },

  async afterRender() {
    const main = document.getElementById('maincontent');
    const section = document.createElement('section');
    section.setAttribute('tabindex', '0');
    section.innerHTML = profile();
    main.appendChild(section);
  },
};

export default Profile;

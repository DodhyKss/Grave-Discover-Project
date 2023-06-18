/* eslint-disable indent */
/* eslint-disable linebreak-style */

const SearchPage = {
    async render() {
      return `
      <sidebar-user></sidebar-user>
      <div class="divparent d-flex justify-content-center">
      <div class="dashboard-container">
      <h1 class="text-center mb-5">Cari Lokasi</h1>
      <p>Cari Lokasi Pemakaman</p>
      <div class="input-group rounded">
      <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
      <span class="input-group-text border-0" id="search-addon">
       <button id="searchButtonElement" type="submit"> <i class="fas fa-search"></i> </button>
      </span>
    </div>
      </div>  
    </div>  
    <list-makam></list-makam>
                `;
    },

    async afterRender() {
      const headerElement = document.querySelector('header');
      headerElement.classList.add('remove-content');
      const hamburger = document.querySelector('.hamburger');
      const wrapper = document.querySelector('.wrapper');
      const backdrop = document.querySelector('.backdrop');

      hamburger.addEventListener('click', () => {
        wrapper.classList.add('active');
      });

      backdrop.addEventListener('click', () => {
        wrapper.classList.remove('active');
      });

      const footerElement = document.querySelector("footer");
      footerElement.classList.add("remove-content");
    },
  };

  export default SearchPage;

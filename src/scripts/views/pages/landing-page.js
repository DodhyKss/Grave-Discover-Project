import { landingPageTemplate } from '../templates/template-creator';

const LandingPage = {
  async render() {
    return `
    <div class="hero p-5 text-center bg-image rounded-3" id="hero" >
    <div class="mask">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="display-4 fw-bold mb-3 hero-title">Grave Discover</h1>
          <p>
            Selamat datang di Grave Discover - Website yang memberikan
            penghormatan dan mengenang orang-orang terkasih yang telah meninggal
            dunia. Pesan jasa untuk merawat makam orang terkasih dan temukan
            makam mereka dengan kenangan indah yang ditinggalkan di sini.
          </p>
          <button class="btn-detail btn btn-primary">Detail</button>
        </div>
      </div>
    </div>
      </div>
        <about-page></about-page>
        <div class="container-why-us">
        <why-us></why-us>
        <faq-page></faq-page>
        <team-section></team-section>
        </div>
        `;
  },

  async afterRender() {
    const main = document.getElementById('maincontent');
    const headerBg = document.querySelector('header');
    headerBg.classList.remove('remove-background');
    headerBg.style.height = "800px";
    
  },
};

export default LandingPage;

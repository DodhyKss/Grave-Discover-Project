class Header extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <header style="background-image: url('./img/JumboTron.png'); height: 800px;">

  <!-- Navbar -->
    <nav class="navbar navbar-expand-lg ">
        <div class="container" style="background-color: transparent;">
              <a class="navbar-brand" href="#/landing-page">
                <img src="./img/navBarPic.png" alt="Logo" height="36" style="min-width: 120px;
                min-height: 100px;">
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ml-2 ">
                <li class="nav-item"><a class="nav-link" href="#/landing-page">Beranda</a></li>
                <li class="nav-item"><a class="nav-link">Tentang</a></li>
                <li class="nav-item"><a class="nav-link">FAQ</a></li>
                <li class="nav-item"><a class="nav-link">Tim Kami</a></li>
              </ul>
          <div class="d-flex">
            <button class="btn-masuk btn"><a href="#/login">Masuk</a></button>
            <button class="btn-daftar btn"><a href="#/register">Daftar</a></button>
          </div>
         </div>
        </div>
    </nav>
    
    <!-- Hero -->
    <div class="hero p-5 text-center bg-image rounded-3" >
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
</header>
        `
    }
}

customElements.define('header-page', Header);
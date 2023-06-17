class About extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section>
        <div class="about text-center">
          <h1>Tentang <span class="orangefont">Grave Discover</span></h1>
          <div class="descripsi-tentang d-flex justify-content-center">
            <p>
              Grave Discover adalah aplikasi berbasis website untuk memudahkan
              pengurus makam dalam mengelola pemakaman. Aplikasi ini juga
              memudahkan pengguna untuk melakukan pemesanan perawatan makam yang
              dapat dilakukan dimana saja dan kapan saja. Apabila ingin mencari
              lokasi makam, pengguna dapat melakukan pencarian pada aplikasi.
            </p>
          </div>
          <div class="row justify-content-center">
            <div class="about_box border border-secondary-subtle shadow rounded">
              <div class="d-flex justify-content-center">
                <div class="icon_background">
                  <img class="about_icons" src="./icons/data-icon.png" />
                </div>
              </div>
              <h4>Manajemen Data Jenazah</h4>
              <p>
                Temukan kemudahan dalam pencatatan identitas, dan lokasi pemakaman
                yang terorganisir. Privasi dan keamanan informasi terjaga dengan
                tingkat keamanan yang terjamin.
              </p>
            </div>
  
            <div class="about_box border border-secondary-subtle shadow rounded">
              <div class="d-flex justify-content-center">
                <div class="icon_background">
                  <img class="about_icons" src="./icons/order-icon.png" />
                </div>
              </div>
              <h4>Pemesanan Perawatan Makam</h4>
              <p>
                Rapikan dan hiasi tempat peristirahatan tercinta Anda dengan
                mudah. Pesan layanan pembersihan makam sekarang dan berikan
                kehormatan yang pantas pada kenangan mereka.
              </p>
            </div>
  
            <div class="about_box border border-secondary-subtle shadow rounded">
              <div class="d-flex justify-content-center">
                <div class="icon_background">
                  <img class="about_icons" src="./icons/find-icon.png" />
                </div>
              </div>
              <h4>Pencarian Lokasi Makam</h4>
              <p>
                Temukan tempat peristirahatan terakhir orang terkasih dengan cepat
                dan akurat. Temukan lokasi yang tepat untuk mengunjungi dan
                menghormati mereka
              </p>
            </div>
          </div>
        </div>
    </section>
        `;
  }
}

customElements.define("about-page", About);

class WhyUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="container-fluid why-us">
        <div class="title-why-us fw-bold">
          <h1>Mengapa Anda harus menggunakan</h1>
          <h2><span class="orangefont">Grave Discover</span>?</h2>
        </div>
        <div class="row ">
          <div class="col-lg-6" data-aos="fade-up" data-aos-once="true">
              <img
                src="./icons/icon-faq.png" class="img-fluid mx-auto d-block "
                alt="img faq"
                width="450px"
                height="450px"
              />
          </div>  
            <!-- card why us -->  
            <div class="col-lg-6">
              <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="wu-box mb-3 ">
                <i class="fa-solid fa-star col  mb-2"></i>
                <h5 class="orangefont  ">Mudah Digunakan</h5>
                <p class="why-us-text">Tampilan desain website dengan memperhatikan kemudahan anda dalam menggunakan aplikasi Grave Discover.</p>
                </div>  
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="wu-box">
                  <i class="fa-regular fa-clock"></i>
                <h5 class="orangefont ">Efisien</h5>
                <p class="why-us-text">Grave Discover menyediakan fitur yang efisien untuk mencatat dan mengelola data jenazah dengan cepat dan terorganisir.</p>
                </div>  
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-lg-6 col-md-6">
                <div class="wu-box mb-3">
                <img class="why_icons col mb-2" src="./icons/Globe2.png" />
                <h5 class="orangefont ">Akses Dimana Saja, Kapan Saja</h5>
                <p class="why-us-text">Akses aplikasi secara online, memungkinkan Anda memesan perawatan makam dan menemukan lokasi makam kapan pun dan di mana pun Anda berada.</p>
                 </div> 
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="wu-box ">
                <img class="why_icons col mb-2" src="./icons/Vector (1).png" />
                <h5 class="orangefont ">Temukan Dengan Mudah</h5>
                <p class="why-us-text">Grave Discover memudahkan pengguna menemukan lokasi makam orang terkasih dengan cepat dan akurat tanpa mencari secara manual.</p>
                </div>    
              </div>
            </div>  
            </div> 
          </div>
      </section> 
        `;
  }
}

customElements.define("why-us", WhyUs);

class FAQ extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="FAQ-container">
        <div>
        <h1 class=" text-white text-center">Yang Sering <span class="orangefont">Ditanyakan</span></h1>
       </div>
       <div class="FAQ">
        <div class="accordion dropdown-master" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h4 class="text-white">Apa itu Grave Discover?</h4>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>Grave Discover</strong> merupakan aplikasi berbasis website untuk memudahkan pengurus makam dalam mengelola pemakaman. Aplikasi ini juga memudahkan pengguna untuk melakukan pemesanan perawatan makam dan mencari lokasi makam yang akan dikunjungi. 
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h4 class="text-white">Bagaimana cara menambah data makam pada aplikasi?</h4>
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Masuk ke halaman beranda terlebih dahulu.</li>
                  <li>Pilih fitur “Data Makam”.</li>
                  <li>Silakan klik tombol “Tambah Data” </li>
                  <li>Isi dengan lengkap formulir data jenazah, lalu klik “Simpan”.</li>
                  <li>Selesai, data makam telah ditambahkan.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <h4 class="text-white">Bagaimana cara memesan perawatan makan?</h4>
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Masuk ke halaman beranda terlebih dahulu.</li>
                  <li>Pilih fitur “Pesan Perawatan Makam”.</li>
                  <li>Silakan klik tombol “Pesan </li>
                  <li>Isi dengan lengkap formulir pemesanan, lalu klik “Pesan”.</li>
                  <li>Selesai, pesanan Anda akan segera di lakukan.</li>
                  <li>Cek secara berkala agar Anda mengetahui bahwa pesanan telah dikerjakan selesai.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <h4 class="text-white">Bagaimana cara mencari lokasi makam?</h4>
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Masuk ke halaman beranda terlebih dahulu.</li>
                  <li>Pilih fitur “Cari Lokasi”.</li>
                  <li>Masukkan nama lengkap jenazah dengan benar. </li>
                  <li>Klik pada tombol “cari” maka lokasi makam akan ditampilkan.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
       </div> 
      </section>
        `
    }
}

customElements.define('faq-page', FAQ);
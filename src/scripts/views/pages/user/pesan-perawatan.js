/* eslint-disable indent */
/* eslint-disable linebreak-style */
const OrderPage = {
    async render() {
      return `
    <sidebar-user></sidebar-user>
    <div class="dashboard-container">
      <h1 class="text-center">Pesan Perawatan Makam</h1>

      <h5>Nama Pemesan</h5>
      <input type="text" id="email" class="form-control fs-8" placeholder="Joko" required/>
      <h5>Nama Pada Makam</h5>
      <input type="text" id="email" class="form-control fs-8" placeholder="Mawar" required/>
      <h5>Nomor Makam</h5>
      <input type="text" id="email" class="form-control fs-8" placeholder="A-01" required/>
      <h5>Keterangan</h5>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      <div class="btn-submit">
      <button type="submit" class="btn" style="background: #f97b22; color: white;" id="simpanButton">Simpan</button>
    </div>
    </div>
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
    },
  };

  export default OrderPage;

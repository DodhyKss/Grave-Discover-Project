/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
const PesananPerawatan = {
  async render() {
    return ``;
  },

  async afterRender() {
    const headerBg = document.querySelector("header");
    headerBg.classList.add("remove-background");
    headerBg.style.height = "120px";
    headerBg.style.backgroundColor = "#1d2939";

    const footerElement = document.querySelector("footer");
    footerElement.classList.add("remove-content");

    const formElement = document.querySelector('.formpesanan');
    formElement.classList.remove('remove-content');
  },
};

export default PesananPerawatan;

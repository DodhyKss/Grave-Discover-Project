class AlertWarning extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="alert alert-warning d-flex align-items-center" role="alert">
          <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
          <div>
            Anda yakin untuk menghapus data ini?
          </div>
        </div>
      `;
  }
}

customElements.define("alert-warning", AlertWarning);

function showAlert() {
  const alertContainer = document.querySelector(".alert-container");
  if (alertContainer) {
    alertContainer.innerHTML = "";

    const alertWarning = document.createElement("alert-warning");
    alertContainer.appendChild(alertWarning);
  } else {
    console.error("Elemen dengan kelas 'alert-container' tidak ditemukan.");
  }
}

/* eslint-disable operator-linebreak */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-alert */
/* eslint-disable valid-typeof */
/* eslint-disable prefer-arrow-callback */
import { registerTemplate } from "../templates/template-creator";

const RegisterPage = {
  render() {
    return `
    <section class="input_section">
      <h2>Masukkan Pesanan Perawatan Baru</h2>
        <form id="submit-pesanan">
          <div class="mb-3">
            <label for="tanggalPemesanan" class="form-label">Tanggal Pemesanan</label>
            <input type="date" class="form-control" id="tanggalPemesanan" placeholder="Masukkan Tanggal Pemesanan">
          </div>
          <div class="mb-3">
          <label for="nomorMakam" class="form-label">Nomor Makam</label>
          <input type="text" class="form-control" id="nomorMakam" placeholder="Masukkan Nomor Makam">
        </div>
          <div class="mb-3">
            <label for="namaPadaMakam" class="form-label">Nama Pada Makam</label>
            <input type="text" class="form-control" id="namaPadaMakam" placeholder="Masukkan Nama Pada Makam">
          </div>
          <div class="mb-3">
            <label for="keterangan" class="form-label">Keterangan</label>
            <input type="text" class="form-control" id="keterangan" placeholder="Tambahkan Keterangan">
          </div>
      <div class="input_inline">
        <label for="inputPesananIsComplete">Selesai Dilakukan Perawatan</label>
        <input id="inputPesananIsComplete" type="checkbox" />
      </div>
      <button type="submit" value="Submit Pesanan">
        Masukkan Pesanan ke Daftar
      </button>
    </form>
  </section>

  <section class="pesanan-perawatan">
    <h2>Belum Selesai Dilakukan Perawatan</h2>

    <div id="incompletePerawatanList" class="pesanan-list">
    </div>
  </section>

  <section class="pesanan-perawatan">
    <h2>Selesai Dilakukan Perawatan</h2>

    <div id="completePerawatanList" class="pesanan-list">
    </div>
  </section>
    `;
  },

  afterRender() {
    const headerBg = document.querySelector("header");
    headerBg.classList.add("remove-background");
    headerBg.style.height = "120px";
    headerBg.style.backgroundColor = "#1d2939";

    const heroText = document.getElementById("hero");
    heroText.remove();

    const main = document.getElementById("maincontent");
    const section = document.createElement("section");
    section.setAttribute("tabindex", "0");
    section.innerHTML = registerTemplate();
    main.appendChild(section);

    // eslint-disable-next-line prefer-const
    let perawatan = [];
    const RENDER_EVENT = "render-pesanan";
    const STORAGE_KEY = "pesananPerawatan";

    function isStorageExist() {
      if (typeof Storage === "undefined") {
        alert("Browser Anda Tidak Mendukung Local Storage");
        return false;
      }
      return true;
    }

    const saveData = () => {
      if (isStorageExist()) {
        const dataParsed = JSON.stringify(perawatan);
        localStorage.setItem(STORAGE_KEY, dataParsed);
      }
    };

    function loadDataFromStorage() {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (data !== null) {
        for (const pesanan of data) {
          perawatan.push(pesanan);
        }
      }
      document.dispatchEvent(new Event(RENDER_EVENT));
    }

    function generateRandomId() {
      return +new Date();
    }

    function generatePesananObject(
      id,
      tanggalPemesanan,
      nomorMakam,
      namaPadaMakam,
      keterangan,
      isComplete
    ) {
      return {
        id,
        tanggalPemesanan,
        nomorMakam,
        namaPadaMakam,
        keterangan,
        isComplete,
      };
    }

    function findPesanan(pesananId) {
      for (const pesananItem of perawatan) {
        if (pesananItem.id === pesananId) {
          return pesananItem;
        }
      }
      return null;
    }

    function findPesananIndex(pesananId) {
      for (const index in perawatan) {
        if (perawatan[index].id === pesananId) {
          return index;
        }
      }
      return -1;
    }

    function addPesanan() {
      const tanggalPemesanan =
        document.getElementById("tanggalPemesanan").value;
      const nomorMakam = document.getElementById("nomorMakam").value;
      const namaPadaMakam = document.getElementById("namaPadaMakam").value;
      const keterangan = document.getElementById("keterangan").value;
      const isComplete = document.getElementById(
        "inputPesananIsComplete"
      ).checked;
      const id = generateRandomId();

      const pesanan = generatePesananObject(
        id,
        tanggalPemesanan,
        nomorMakam,
        namaPadaMakam,
        keterangan,
        isComplete
      );
      perawatan.push(pesanan);
      saveData();

      document.getElementById("tanggalPemesanan").value = null;
      document.getElementById("nomorMakam").value = null;
      document.getElementById("namaPadaMakam").value = null;
      document.getElementById("keterangan").value = null;
      document.getElementById("inputPesananIsComplete").checked = false;

      document.dispatchEvent(new Event(RENDER_EVENT));
    }

    function makePesanan(pesanan) {
      const tanggalPemesanan = document.createElement("h3");
      tanggalPemesanan.innerText = pesanan.tanggalPemesanan;

      const namaPadaMakam = document.createElement("p");
      namaPadaMakam.innerText = pesanan.namaPadaMakam;

      const nomorMakam = document.createElement("p");
      nomorMakam.innerText = pesanan.nomorMakam;

      const keterangan = document.createElement("p");
      keterangan.innerText = pesanan.keterangan;

      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("action");

      const pesananContainer = document.createElement("article");
      pesananContainer.setAttribute("id", pesanan.id);
      pesananContainer.classList.add("pesanan_item");
      if (pesanan.isComplete) {
        buttonContainer.append(
          createCheckButton(pesanan.id),
          createTrashButton(pesanan.id)
        );
      } else {
        buttonContainer.append(
          createUndoButton(pesanan.id),
          createTrashButton(pesanan.id)
        );
      }
      pesananContainer.append(
        tanggalPemesanan,
        namaPadaMakam,
        nomorMakam,
        keterangan,
        buttonContainer
      );

      return pesananContainer;
    }

    function createUndoButton(id) {
      const undoButton = document.createElement("button");
      undoButton.classList.add("undo-button");
      undoButton.innerHTML = "Selesai";
      undoButton.addEventListener("click", function () {
        const pesananTarget = findPesanan(id);
        if (pesananTarget == null) return;
        pesananTarget.isComplete = true;
        saveData();
        document.dispatchEvent(new Event(RENDER_EVENT));
      });
      return undoButton;
    }

    function createCheckButton(id) {
      const checkButton = document.createElement("button");
      checkButton.classList.add("check-button");
      checkButton.innerHTML = "Belum selesai";
      checkButton.addEventListener("click", function () {
        const pesananTarget = findPesanan(id);
        if (pesananTarget == null) return;
        pesananTarget.isComplete = false;
        saveData();
        document.dispatchEvent(new Event(RENDER_EVENT));
      });
      return checkButton;
    }

    function createTrashButton(id) {
      const trashButton = document.createElement("button");
      trashButton.classList.add("trash-button");
      trashButton.innerHTML = "Hapus";
      trashButton.addEventListener("click", function () {
        const pesananTargetIndex = findPesananIndex(id);
        if (pesananTargetIndex === -1) return;
        perawatan.splice(pesananTargetIndex, 1);
        saveData();
        document.dispatchEvent(new Event(RENDER_EVENT));
      });
      return trashButton;
    }

    // function searchPesanan() {
    //   const search_value = document.getElementById("searchNamaMakam").value;
    //   const all_data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    //   const find = [];
    //   for (const pesananItem of all_data) {
    //     if (
    //       String(pesananItem.namaPadaMakam)
    //         .toLowerCase()
    //         .includes(String(search_value).toLowerCase())
    //     ) {
    //       find.push(pesananItem);
    //     }
    //   }
    //   perawatan = find;
    //   document.dispatchEvent(new Event(RENDER_EVENT));
    // }

    // document.addEventListener("DOMContentLoaded", function () {
    //   loadDataFromStorage();

    //   document
    //     .getElementById("submit-pesanan")
    //     .addEventListener("submit", function (event) {
    //       event.preventDefault();
    //       addPesanan();
    //     });
    //   document
    //     .getElementById("searchNamaMakam")
    //     .addEventListener("keyup", function (event) {
    //       event.preventDefault();
    //       searchPesanan();
    //     });
    // });

    document.addEventListener(RENDER_EVENT, function () {
      const belumSelesai = document.getElementById("incompletePerawatanList");
      const finishRead = document.getElementById("completePerawatanList");
      belumSelesai.innerHTML = "";
      finishRead.innerHTML = "";

      for (const pesananItem of perawatan) {
        const pesananElement = makePesanan(pesananItem);
        if (pesananItem.isComplete) {
          finishRead.append(pesananElement);
        } else {
          belumSelesai.append(pesananElement);
        }
      }
    });
  },
};

export default RegisterPage;

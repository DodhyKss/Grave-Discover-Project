/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
import "regenerator-runtime"; /* for async await transpile */
import "./components/header";
import "./components/about";
import "./components/why-us";
import "./components/FAQ";
import "./components/team-section";
import "../styles/main.css";
import "../styles/responsive.css";
import "../styles/admin.css";
import "../styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./views/app";

const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const contentElement = document.querySelector("#maincontent");

// event button drawer
const app = new App({
  button: hamburgerButtonElement,
  drawer: drawerElement,
  content: contentElement,
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});

AOS.init();

const makams = [];
const RENDER_EVENT = 'render-makam';

document.addEventListener('DOMContentLoaded', () => {
  const submitForm = document.getElementById('submit-pesanan');
  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addMakam();
  });

  if (isStorageExist()) {
    loadMakamFromStorage();
  }
});

function addMakam() {
  const tglPemesanan = document.getElementById('tanggalPemesanan').value;
  const nomorMakam = document.getElementById('nomorMakam').value;
  const namaMakam = document.getElementById('namaPadaMakam').value;
  const keterangan = document.getElementById('keterangan').value;
  const statusPesanan = document.getElementById('inputPesananIsComplete').checked;

  const generatedID = generateId();
  const makamObject = generateMakamObject(generatedID, tglPemesanan, nomorMakam, namaMakam, keterangan, statusPesanan);
  makams.push(makamObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function generateId() {
  return +new Date();
}

function generateMakamObject(id, tgl, nomor, nama, keterangan, pesanan) {
  return {
    id,
    tgl,
    nomor,
    nama,
    keterangan,
    pesanan
  };
}

document.addEventListener(RENDER_EVENT, () => {
  const incompletedPesanan = document.getElementById('incompletePesananList');
  incompletedPesanan.innerHTML = '';

  const completedPesananList = document.getElementById('completePesananList');
  completedPesananList.innerHTML = '';

  for (const listMakam of makams) {
    const makamElement = makeMakam(listMakam);
    if (!listMakam.isCompleted) { incompletedPesanan.append(makamElement); } else { completedPesananList.append(makamElement); }
  }
});

const tableElement = document.querySelector('#makamTable');

function makeMakam(makamObject) {
  const container = document.createElement('article');
  container.classList.add('makam-item');
  container.setAttribute('id', `makam-${makamObject.id}`);

  const table = document.createElement('table');
  table.classList.add('table', 'table-bordebutton-container', 'table-striped');
  table.style.tableLayout = 'fixed'; // Menambahkan gaya CSS untuk mengatur lebar kolom secara rata

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const namaHeader = document.createElement('th');
  namaHeader.scope = 'col';
  namaHeader.innerText = 'Nama';
  const tglPemesananHeader = document.createElement('th');
  tglPemesananHeader.scope = 'col';
  tglPemesananHeader.innerText = 'Tanggal Pesan';
  const nomorHeader = document.createElement('th');
  nomorHeader.scope = 'col';
  nomorHeader.innerText = 'Nomor Makam';
  const keteranganHeader = document.createElement('th');
  keteranganHeader.scope = 'col';
  keteranganHeader.innerText = 'Keterangan';

  const tbody = document.createElement('tbody');
  const dataRow = document.createElement('tr');
  const namaCell = document.createElement('td');
  namaCell.innerText = makamObject.nama;
  const tglPemesananCell = document.createElement('td');
  tglPemesananCell.innerText = makamObject.tgl;
  const nomorCell = document.createElement('td');
  nomorCell.innerText = makamObject.nomor;
  const keteranganCell = document.createElement('td');
  keteranganCell.innerText = makamObject.keterangan;

  const buttonCell = document.createElement('td');

  if (makamObject.isCompleted) {
    const undoButton = document.createElement('button');
    undoButton.classList.add('button-container');
    const undoIcon = document.createElement('i');
    undoIcon.classList.add('fa-solid', 'fa-rotate-left');
    undoButton.appendChild(undoIcon);

    undoButton.addEventListener('click', () => {
      undoMakamFromCompleted(makamObject.id);
    });

    const trashButton = document.createElement('button');
    trashButton.classList.add('button-container');
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid', 'fa-trash');
    trashButton.appendChild(trashIcon);

    trashButton.addEventListener('click', () => {
      removeMakam(makamObject.id);
      alert(`Buku ${makamObject.id} dihapus`);
    });

    buttonCell.appendChild(undoButton);
    buttonCell.appendChild(trashButton);
  } else {
    const doneButton = document.createElement('button');
    doneButton.classList.add('button-container');
    const doneIcon = document.createElement('i');
    doneIcon.classList.add('fa-solid', 'fa-check');
    doneButton.appendChild(doneIcon);

    doneButton.addEventListener('click', () => {
      addMakamToCompleted(makamObject.id);
    });

    const trashButton = document.createElement('button');
    trashButton.classList.add('button-container');
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid', 'fa-trash');
    trashButton.appendChild(trashIcon);

    trashButton.addEventListener('click', () => {
      removeMakam(makamObject.id);
    });

    buttonCell.appendChild(doneButton);
    buttonCell.appendChild(trashButton);
  }

  headerRow.appendChild(namaHeader);
  headerRow.appendChild(tglPemesananHeader);
  headerRow.appendChild(nomorHeader);
  headerRow.appendChild(keteranganHeader);

  dataRow.appendChild(namaCell);
  dataRow.appendChild(tglPemesananCell);
  dataRow.appendChild(nomorCell);
  dataRow.appendChild(keteranganCell);
  dataRow.appendChild(buttonCell);

  thead.appendChild(headerRow);
  tbody.appendChild(dataRow);
  table.appendChild(thead);
  table.appendChild(tbody);
  container.appendChild(table);

  return container;
}

function cariMakam(makamId) {
  for (const makamItem of makams) {
    if (makamItem.id === makamId) {
      return makamItem;
    }
  }
}

function cariMakamIndex(makamId) {
  for (const index in makams) {
    if (makams[index].id == makamId) {
      return index;
    }
  }
}

function checkSaved(makamId) {
  const makamTarget = cariMakam(makamId);
  if (checkSaved.clicked == true) {
    makamTarget.isCompleted = true;
  }
}

function removeMakam(makamId) {
  const makamTarget = cariMakamIndex(makamId);

  if (makamTarget === -1) return;

  makams.splice(makamTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function addMakamToCompleted(makamId) {
  const makamTarget = cariMakam(makamId);
  if (makamTarget == null) return;

  makamTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function undoMakamFromCompleted(makamId) {
  const makamTarget = cariMakam(makamId);

  if (makamTarget == null) return;

  makamTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(makams);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

const SAVED_EVENT = 'saved-makam';
const STORAGE_KEY = 'MAKAM_APPS';

function isStorageExist() {
  if (typeof Storage === "undefined") {
    alert('Browser tidak mendukung local storage');
    return false;
  }
  return true;
}

document.addEventListener(SAVED_EVENT, () => {
  console.log(localStorage.getItem(STORAGE_KEY));
});

function loadMakamFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  const data = JSON.parse(serializedData);

  if (data !== null) {
    for (const makam of data) {
      makams.push(makam);
    }
  }
  document.dispatchEvent(new Event(RENDER_EVENT));
}

// document.getElementById('searchMakam').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const searchMakams = document.getElementById('searchMakamName').value.toLowerCase();
//   const makamListName = document.querySelectorAll('h3');
//   for (const makam of makamListName) {
//     if (makam.innerText.toLowerCase().includes(searchMakams)) {
//       makam.parentElement.style.display = 'block';
//     } else {
//       makam.parentElement.style.display = 'none';
//     }
//   }
// });

import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const contentElement = document.querySelector('#maincontent');

// event button drawer
const app = new App({
  button: hamburgerButtonElement,
  drawer: drawerElement,
  content: contentElement,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

/* eslint-disable quotes */
import "regenerator-runtime"; /* for async await transpile */
import "./components/header";
import "./components/about";
import "./components/why-us";
import "./components/FAQ";
import "./components/team-section";
import "./components/sidebar-admin";
import "./components/alert-success";
import "./components/alert-warning";
import "../styles/main.css";
import "../styles/responsive.css";
import "../styles/admin.css";
import "../styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
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

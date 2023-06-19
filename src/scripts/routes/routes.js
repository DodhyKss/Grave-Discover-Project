/* eslint-disable quotes */
import LandingPage from "../views/pages/landing-page";
import LoginPage from "../views/pages/login";
import RegisterPage from "../views/pages/register";
import Dashboard from "../views/pages/admin/dashboard";
import DataJenazah from "../views/pages/admin/data-jenazah";
import FormTambahData from "../views/pages/admin/form-tambah-data";
import Pesanan from "../views/pages/admin/pesanan";

const routes = {
  "/": LandingPage,
  "/landing-page": LandingPage,
  "/login": LoginPage,
  "/register": RegisterPage,
  // admin
  "/dashboard": Dashboard,
  "/data-jenazah": DataJenazah,
  "/form-tambah-data": FormTambahData,
  "/pesanan": Pesanan,
};

export default routes;

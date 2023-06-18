/* eslint-disable quotes */
import LandingPage from "../views/pages/landing-page";
import LoginPage from "../views/pages/login";
import RegisterPage from "../views/pages/register";
import AboutPage from "../views/pages/about";
import Dashboard from "../views/pages/admin/dashboard";
import DataJenazah from "../views/pages/admin/data-jenazah";
import PesananPerawatan from "../views/pages/admin/pesanan-perawatan";
import Pesanan from "../views/pages/admin/pesanan";
import OrderPage from "../views/pages/user/pesan-perawatan";
import SearchPage from "../views/pages/user/search-page";

const routes = {
  "/": LandingPage,
  "/landing-page": LandingPage,
  "/login": LoginPage,
  "/register": RegisterPage,
  "/about": AboutPage,
  // admin
  "/dashboard": Dashboard,
  "/data-jenazah": DataJenazah,
  "/pesanan-perawatan": PesananPerawatan,
  "/pesanan": Pesanan,
  "/orderpage": OrderPage,
  "/searchpage": SearchPage,
};

export default routes;

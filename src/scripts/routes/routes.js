/* eslint-disable quotes */
import Profile from "../views/pages/profile";
import LandingPage from "../views/pages/landing-page";
import LoginPage from "../views/pages/login";
import RegisterPage from "../views/pages/register";
import AboutPage from "../views/pages/about";
import Dashboard from "../views/pages/admin/dashboard";
import DataJenazah from "../views/pages/admin/data-jenazah";
import FormTambahData from "../views/pages/admin/form-tambah-data";
import Pesanan from "../views/pages/admin/pesanan";
import UserDashboard from "../views/pages/user/user-dashboard";
import OrderPage from "../views/pages/user/pesan-perawatan";
import SearchPage from "../views/pages/user/search-page";

const routes = {
  "/": LandingPage,
  "/landing-page": LandingPage,
  "/login": LoginPage,
  "/register": RegisterPage,
  "/about": AboutPage,
  "/profile": Profile,
  "/dashboard": Dashboard,
  "/data-jenazah": DataJenazah,
  "/form-tambah-data": FormTambahData,
  "/pesanan": Pesanan,
  "/userdashboard": UserDashboard,
  "/orderpage": OrderPage,
  "/searchpage": SearchPage,
};

export default routes;

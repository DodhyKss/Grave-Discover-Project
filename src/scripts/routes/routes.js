/* eslint-disable quotes */
import LandingPage from "../views/pages/landing-page";
import PesananPerawatan from "../views/pages/admin/pesanan-perawatan";
import DataMakam from "../views/pages/admin/data-makam";

const routes = {
  "/": LandingPage,
  "/landing-page": LandingPage,
  "/data-makam": DataMakam,
  "/pesanan-perawatan": PesananPerawatan,
};

export default routes;

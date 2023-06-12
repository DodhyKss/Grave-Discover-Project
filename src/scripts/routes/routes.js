/* eslint-disable quotes */
// eslint-disable-next-line quotes
import Profile from "../views/pages/profile";
import LandingPage from "../views/pages/landing-page";
import LoginPage from "../views/pages/login";
import RegisterPage from "../views/pages/register";
import AboutPage from "../views/pages/about";
import SidebarAdmin from "../views/pages/admin/sidebar-admin";

const routes = {
  "/": LandingPage,
  "/landing-page": LandingPage,
  "/login": LoginPage,
  "/register": RegisterPage,
  "/about": AboutPage,
  "/profile": Profile,
  "/sidebar-admin": SidebarAdmin,
};

export default routes;

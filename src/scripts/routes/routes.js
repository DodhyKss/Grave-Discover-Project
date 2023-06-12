import Profile from '../views/pages/profile';
import LandingPage from '../views/pages/landing-page';
import LoginPage from '../views/pages/login';
import RegisterPage from '../views/pages/register';
import AboutPage from '../views/pages/about';
import User from '../views/pages/user';

const routes = {
  '/': LandingPage,
  '/landing-page': LandingPage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/about': AboutPage,
  '/profile': Profile,
  '/user' : User,
};

export default routes;

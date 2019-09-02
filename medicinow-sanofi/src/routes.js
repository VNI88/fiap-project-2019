import landingPage from './components/landingPage.vue';
import homepage  from './components/homepage.vue';
import register from './components/register.vue'
import login from './components/login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: landingPage
  // },
  {
    path: '/homepage',
    name: 'homepage',
    component: homepage
  },
  {
    path: '/register',
    name: 'register',
    component: register
  }
];

export default routes;

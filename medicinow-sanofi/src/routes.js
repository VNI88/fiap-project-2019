import landingPage from './components/landingPage.vue';
import pacientRegister  from './components/pacientRegister.vue';
import register from './components/register.vue'
import login from './components/login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: landingPage
  },
  {
    path: '/pacient_register',
    name: 'pacient_register',
    component: pacientRegister
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  }
];

export default routes;

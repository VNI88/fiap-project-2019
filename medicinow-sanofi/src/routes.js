import landingPage from './components/landingPage.vue';
import pacientRegister  from './components/pacientRegister.vue';
import loginpage from './components/LoginPage.vue'
import doctorRegister from './components/doctorRegister.vue'

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
    path: '/doctor_register',
    name: 'doctor_register',
    component: doctorRegister
  },
  {
    path: '/login',
    name: 'login',
    component: loginpage
  }
];

export default routes;

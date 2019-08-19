import landingPage from './components/landingPage.vue';
import pacientRegister  from './components/pacientRegister.vue';
import register from './components/register.vue'
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
    path: '/register',
    name: 'register',
    component: register
  }
];

export default routes;

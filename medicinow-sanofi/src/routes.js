import landingPage from './components/landingPage.vue';
import newAppointments  from './components/newAppointments.vue';
import  doctorsAppointmentsList from './components/doctorsAppointmentsList.vue';
import  pacientsAppointmentsList from './components/pacientsAppointmentsList.vue';
import register from './components/register.vue'
import login from './components/login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/new_appointment',
    name: 'new_appointment',
    component: newAppointments
  },
  {
    path: '/doctor_appointments',
    name: 'doctor_appointments',
    component: doctorsAppointmentsList
  },
  {
    path: '/pacients_appointments',
    name: 'pacients_appointments',
    component: pacientsAppointmentsList
  }
];

export default routes;

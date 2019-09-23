import newAppointments  from './components/newAppointments.vue';
import  doctorsAppointmentsList from './components/doctorsAppointmentsList.vue';
import  doctorFutureAppointmentsList from './components/doctorsFutureAppointmentsList.vue';
import  doctorPastAppointmentsList from './components/doctorsPastAppointmentsList.vue';
import  doctorCanceledAppointmentsList from './components/doctorsCanceledAppointmentsList.vue';
import  pacientsAppointmentsList from './components/pacientsAppointmentsList.vue';
import  pacientsFutureAppointmentsList from './components/pacientsFutureAppointmentsList.vue';
import  pacientsPastAppointmentsList from './components/pacientsPastAppointmentsList.vue';
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
    path: '/doctor_next_appointments',
    name: 'doctor_next_appointments',
    component: doctorFutureAppointmentsList
  },
  {
    path: '/doctor_historic',
    name: 'doctor_historic',
    component: doctorPastAppointmentsList
  },
  {
    path: '/doctor_canceled_appointments',
    name: 'doctor_canceled_appointments',
    component: doctorCanceledAppointmentsList
  },
  {
    path: '/pacients_appointments',
    name: 'pacients_appointments',
    component: pacientsAppointmentsList
  },
  {
    path: '/pacients_next_appointments',
    name: 'pacients_next_appointments',
    component: pacientsFutureAppointmentsList
  },
  {
    path: '/pacients_historic',
    name: 'pacients_historic',
    component: pacientsPastAppointmentsList
  }
];

export default routes;

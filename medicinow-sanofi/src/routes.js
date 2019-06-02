import landingPage1 from './components/landingPage1.vue';
import landingPage2  from './components/landingPage2.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: landingPage1
  },
  {
    path: '/register',
    name: 'register',
    component: landingPage2
  }
];

export default routes;

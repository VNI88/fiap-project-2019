import landingPage1 from './components/landingPage1.vue';
import landingPage2  from './components/landingPage2.vue';
const routes = [
  {
    path: '/',
    name: 'landingPage1',
    component: landingPage1
  },
  {
    path: '/sobre_nos',
    name: 'landingPage2',
    component: landingPage2
  }
];

export default routes;

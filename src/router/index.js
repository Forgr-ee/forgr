import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Privacy from '@/components/Privacy';
import NDA from '@/components/NDA';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      name: 'NDA',
      component: NDA,
    },
  ],
});

import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Privacy from '@/components/Privacy';
import NDA from '@/components/NDA';
import Meta from 'vue-meta';

Vue.use(Meta);
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/privacy',
      query: { lang: '' },
      name: 'Privacy',
      component: Privacy,
    },
    {
      path: '/',
      query: { lang: '' },
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      query: { lang: '' },
      name: 'NDA',
      component: NDA,
    },
  ],
});

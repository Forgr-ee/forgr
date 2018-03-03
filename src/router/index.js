import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Card from '@/components/Card';
import Privacy from '@/components/Privacy';
import NDA from '@/components/NDA';
import FAQ from '@/components/Faq';
import Terms from '@/components/Terms';
import Meta from 'vue-meta';

Vue.use(Meta);
Vue.use(Router);

export default new Router({
  // mode: 'history',
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
      path: '/card/:id',
      name: 'Card',
      component: Card,
    },
    {
      path: '/nda',
      name: 'NDA',
      component: NDA,
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ,
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms,
    },
  ],
});

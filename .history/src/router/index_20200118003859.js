import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import AddMovie from '@/components/AddMovie';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/movie/add',
      name: 'AddMovie',
      component: AddMovie,
    },
  ],
});

import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import AddMovie from '@/components/AddMovie';
import Contact from '@/components/Contact';
import Movie from '@/components/Movie';
import Register from '@/components/Register';



Vue.use(Router);

export default new Router({
  mode: 'history',
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
      path: '/movies/add',
      name: 'AddMovie',
      component: AddMovie,
    },
    {
      path: '/movies/:id',
      name: 'Movie',
      component: Movie,
    },
    {
      path: '/register',
      name: '',
      component: Movie,
    },
  ],
});

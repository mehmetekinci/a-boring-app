import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/advice',
    name: 'Advice',
    component: () => import('../views/Advice.vue'),
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',

    component: () => import('../views/Bookmarks.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

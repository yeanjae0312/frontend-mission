import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';
import ItemInfoPage from '@/views/ItemInfo.vue';
import ItemWishListPage from '@/views/ItemWishList.vue';
import ItemCartListPage from '@/views/ItemCartList.vue';
import MyInfoPage from '@/views/MyInfoPage.vue';
import ItemCartOrder from '@/views/ItemCartOrder.vue';
import ItemCartOrderComplete from '@/views/ItemCartOrderComplete.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemListPage,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/item/:id',
    name: 'ItemInfo',
    component: ItemInfoPage,
    props: true,
  },
  {
    path: '/wish',
    name: 'ItemWish',
    component: ItemWishListPage,
    props: true,
  },
  {
    path: '/cart',
    name: 'ItemCart',
    component: ItemCartListPage,
    props: true,
  },
  {
    path: '/info',
    name: 'MyInfo',
    component: MyInfoPage,
    props: true,
  },
  {
    path: '/order',
    name: 'ItemCartOrder',
    component: ItemCartOrder,
  },
  {
    path: '/order/complete',
    name: 'ItemCartOrderComplete',
    component: ItemCartOrderComplete,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

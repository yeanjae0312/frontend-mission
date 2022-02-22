import { mount, flushPromises } from '@vue/test-utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import App from '@/App.vue';
import ItemListPage from '@/views/ItemList.vue';
import ItemCartList from '@/views/ItemCartList.vue';
import ItemCartOrder from '@/views/ItemCartOrder.vue';

library.add(fas, far);

describe('CartList', () => {
  const routes = [
    {
      path: '/',
      component: ItemListPage,
    },
    {
      path: '/order',
      name: 'ItemCartOrder',
      component: ItemCartOrder,
    },
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

  const store = createStore({
    state: {
      cart_items: [
        {
          product_no: '1',
          image: 'img',
          price: 39000,
          original_price: 55000,
          name: '핏이 좋은 수트',
          description: 'desc',
        },
      ],
    },
    getters: {
      getCartItemList(state) {
        return state.cart_items;
      },
      getTotalCartItem(state) {
        return state.cart_items.length;
      },
      getTotalOrderPrice(state) {
        return state.cart_items.reduce((acc, cur) => acc + cur.price, 0);
      },
    },
  });

  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemCartList, {
      global: {
        plugins: [router, store],
        stubs: { FontAwesomeIcon },
      },
    });
  });

  it('주문페이지 routing test', async () => {
    router.push('/');

    await router.isReady();

    const wrapperApp = mount(App, {
      global: {
        plugins: [router, store],
        stubs: { FontAwesomeIcon },
      },
    });

    await wrapper.find('[data-test="router-link-order"]').trigger('click');
    await flushPromises();

    expect(wrapperApp.findComponent(ItemCartOrder).exists()).toBe(true);
  });
});

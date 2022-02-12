import { mount, flushPromises } from '@vue/test-utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import App from '@/App.vue';
import ItemListPage from '@/views/ItemList.vue';
import ItemCartOrder from '@/views/ItemCartOrder.vue';
import ItemCartOrderComplete from '@/views/ItemCartOrderComplete.vue';

library.add(fas, far);

describe('NavBar', () => {
  const routes = [
    {
      path: '/',
      component: ItemListPage,
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

  const store = createStore({
    state: {
      products: [
        {
          product_no: '1',
          /* eslint-disable global-require */
          image: 'img',
          price: 30000,
          original_price: 55000,
          name: 'name1',
          description: 'desc',
        },
        {
          product_no: '2',
          /* eslint-disable global-require */
          image: 'img',
          price: 50000,
          original_price: 55000,
          name: 'name1',
          description: 'desc',
        },
      ],
    },
    getters: {
      getCartItemList(state) {
        return state.products;
      },
      getTotalCartItem(state) {
        return state.products.length;
      },
      getTotalOrderPrice(state) {
        let sum = 0;

        for (let i = 0; i < state.products.length; i += 1) {
          sum += state.products[i].price;
        }

        return sum;
      },
    },
  });

  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemCartOrder, {
      global: {
        plugins: [router, store],
        stubs: { FontAwesomeIcon },
      },
    });
  });

  it('routing test', async () => {
    router.push('/');

    await router.isReady();

    const wrapperApp = mount(App, {
      global: {
        plugins: [router, store],
        stubs: { FontAwesomeIcon },
      },
    });

    await wrapper.find('[data-test="router-link-complete"]').trigger('click');
    await flushPromises();

    expect(wrapperApp.findComponent(ItemCartOrderComplete).exists()).toBe(true);
  });

  it('주문 품목의 이름이 렌더링 되는가', async () => {
    expect(wrapper.find('[data-test="cart-order-item"]').text()).toContain('name1');
  });

  it('주문 품목의 전체 수가 정확히 렌더링 되는가', async () => {
    expect(wrapper.find('[data-test="cart-order-count"]').text()).toContain(2);
  });

  it('주문 총액이 정확히 렌더링 되는가', async () => {
    expect(wrapper.find('[data-test="cart-order-price"]').text()).toContain('80,000');
  });
});

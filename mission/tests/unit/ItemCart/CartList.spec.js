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
      products: [
        {
          product_no: '1',
          /* eslint-disable global-require */
          image: 'img',
          price: 39000,
          original_price: 55000,
          name: '핏이 좋은 수트',
          description: 'desc',
        },
      ],
    },
    getters: {
      storedCartItems(state) {
        return state.products;
      },
      getTotalItem(state) {
        return state.products.length;
      },
      getTotalPrice(state) {
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
    wrapper = mount(ItemCartList, {
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

    await wrapper.find('[data-test="router-link-order"]').trigger('click');
    await flushPromises();

    expect(wrapperApp.findComponent(ItemCartOrder).exists()).toBe(true);
  });

  it('장바구니 품목의 내용들을 잘 가져오는가', async () => {
    expect(wrapper.text()).toContain('핏이 좋은 수트');
    expect(wrapper.text()).toContain('39,000');
    expect(wrapper.text()).toContain('desc');
  });
});

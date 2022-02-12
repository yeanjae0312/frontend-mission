import { mount, flushPromises } from '@vue/test-utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import App from '@/App.vue';
import ItemListPage from '@/views/ItemList.vue';
import ItemCartOrderComplete from '@/views/ItemCartOrderComplete.vue';

library.add(fas, far);

describe('NavBar', () => {
  const routes = [
    {
      path: '/',
      component: ItemListPage,
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
          image: 'img',
          price: 39000,
          original_price: 55000,
          name: '핏이 좋은 수트',
          description: 'desc',
        },
      ],
    },
    getters: {
      getItemList(state) {
        return state.products;
      },
    },
  });

  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemCartOrderComplete, {
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

    await wrapper.find('[data-test="router-link-home"]').trigger('click');
    await flushPromises();

    expect(wrapperApp.findComponent(ItemListPage).exists()).toBe(true);
  });
});

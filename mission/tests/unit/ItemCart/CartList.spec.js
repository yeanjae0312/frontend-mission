import { mount, flushPromises } from '@vue/test-utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import ItemListPage from '@/views/ItemList.vue';
import ItemCartList from '@/views/ItemCartList.vue';
import ItemCartOrder from '@/views/ItemCartOrder.vue';

library.add(fas, far);

describe('NavBar', () => {
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

  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemCartList, {
      global: {
        plugins: [router],
        stubs: { FontAwesomeIcon },
      },
    });
  });

  it('routing test', async () => {
    router.push('/');

    await router.isReady();

    const wrapperApp = mount(App, {
      global: {
        plugins: [router],
        stubs: { FontAwesomeIcon },
      },
    });

    await wrapper.find('[data-test="router-link-order"]').trigger('click');
    await flushPromises();

    expect(wrapperApp.findComponent(ItemCartOrder).exists()).toBe(true);
  });
});

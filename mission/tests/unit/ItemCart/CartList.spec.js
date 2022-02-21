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
import itemApi from '@/repositories/ItemCartRepository';

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

  const dataItemList = [
    {
      product_no: '1', image: 'img', price: 10000, original_price: 55000, name: 'name', description: 'desc',
    },
    {
      product_no: '2', image: 'img', price: 10000, original_price: 55000, name: 'name', description: 'desc',
    },
  ];

  const res = {
    data: { items: dataItemList },
  };

  itemApi.get = jest.fn().mockResolvedValue(res);

  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemCartList, {
      global: {
        plugins: [router],
        stubs: { FontAwesomeIcon },
      },
    });
  });

  it('item Cart List API가 호출되는가', async () => {
    await flushPromises(); // created 안의 (가상의) API 호출이 되고 DOM Update가 되기까지를 기다림

    expect(itemApi.get).toHaveBeenCalled();
  });

  // TODO: TC 디벨롭 필요
  /* it('api를 통해 받은 item만큼 렌더링 되는가', async () => {
    await itemApi.get();
    await flushPromises();

    expect(wrapper.findAll('[data-test="cart-item"]').length).toEqual(dataItemList.length);
  }); */

  /* it('주문페이지 routing test', async () => {
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
  });  */
});

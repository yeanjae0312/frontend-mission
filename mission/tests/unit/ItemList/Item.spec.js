import { mount, flushPromises } from '@vue/test-utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import ItemListPage from '@/views/ItemList.vue';
import ItemPage from '@/components/ItemList/Item.vue';
import ItemInfoPage from '@/views/ItemInfo.vue';

library.add(fas, far);

describe('ItemListItem', () => {
  let wrapper;

  const routes = [
    {
      path: '/',
      component: ItemListPage,
    },
    {
      path: '/item',
      component: ItemInfoPage,
      props: true,
    },
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

  beforeEach(() => {
    wrapper = mount(ItemPage, {
      global: {
        plugins: [router],
        stubs: { FontAwesomeIcon },
      },
    });
  });

  it('ItemInfo routing test', async () => {
    router.push('/'); // 첫 마운트 됐을 때 로딩될 위치 설정

    await router.isReady();

    const wrapperApp = mount(App, {
      global: {
        plugins: [router],
        stubs: { FontAwesomeIcon },
      },
    });

    await wrapper.find('[data-test="router-link-itemInfo"]').trigger('click');

    await flushPromises(); // created 안의 (가상의) API 호출이 되고 DOM Update가 되기까지를 기다림

    expect(wrapperApp.findComponent(ItemInfoPage).exists()).toBe(true);
  });

  it('redners ItemListItem', async () => {
    expect(wrapper.find('.item-list-item').exists()).toBe(true);
  });

  it('상품 이미지 영역이 있는가', () => {
    expect(wrapper.find('[data-test="product-img"]').exists()).toBe(true);
  });

  it('상품 이미지에 데이터가 잘 들어가는가', async () => {
    const productImgUrl = '@/assets/img/product-img.jpg';

    await wrapper.setProps({
      img: productImgUrl,
    });

    expect(wrapper.find('[data-test="product-img"]').find('img').attributes('src')).toContain(productImgUrl);
  });

  it('상품 할인가 영역이 있는가', () => {
    expect(wrapper.find('[data-test="product-price"]').exists()).toBe(true);
  });

  it('상품의 할인가 데이터가 잘 들어가는가', async () => {
    const productPrice = 50000;

    await wrapper.setProps({
      price: productPrice,
    });

    expect(wrapper.find('[data-test="product-price"]').text()).toContain('50,000');
  });

  it('상품의 원가 데이터가 잘 들어가는가', async () => {
    const productOriginalPrice = 30000;

    await wrapper.setProps({
      original_price: productOriginalPrice,
    });

    expect(wrapper.find('[data-test="product-original-price"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="product-original-price"]').text()).toContain('30,000');
  });

  it('상품의 할인가와 원가를 받아서 할인율을 잘 도출해 내는가', async () => {
    const productPrice = 50000;
    const productOriginalPrice = 100000;

    await wrapper.setProps({
      price: productPrice,
      original_price: productOriginalPrice,
    });

    expect(wrapper.find('[data-test="product-rate"]').text()).toContain('50');
  });

  it('상품명의 데이터가 잘 들어가는가', async () => {
    const productName = '사자귀마개';

    await wrapper.setProps({
      name: productName,
    });

    expect(wrapper.find('[data-test="product-name"]').text()).toContain(productName);
  });

  it('상품 설명에 데이터가 잘 들어가는가', async () => {
    const productDesc = '사자는 동물의 왕입니다.';

    await wrapper.setProps({
      description: productDesc,
    });

    expect(wrapper.find('[data-test="product-desc"]').text()).toContain(productDesc);
  });
});

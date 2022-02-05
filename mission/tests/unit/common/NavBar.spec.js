import { mount, flushPromises } from '@vue/test-utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import NavBarPage from '@/components/common/NavBar.vue';
import ItemListPage from '@/views/ItemList.vue';
import ItemWishListPage from '@/views/ItemWishList.vue';
import ItemCartListPage from '@/views/ItemCartList.vue';
import MyInfoPage from '@/views/MyInfoPage.vue';

library.add(fas, far);

describe('NavBar', () => {
  const routes = [
    {
      path: '/',
      component: ItemListPage,
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
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

  it('home routing test', async () => {
    router.push('/');

    await router.isReady();

    const wrapperApp = mount(App, {
      global: {
        plugins: [router],
        stubs: { FontAwesomeIcon },
      },
    });

    await wrapperApp.find('[data-test="router-link-home"]').trigger('click');
    await flushPromises();

    expect(wrapperApp.findComponent(ItemListPage).exists()).toBe(true);
  });

  it('wish routing test', async () => {
    router.push('/');

    await router.isReady();

    const wrapperApp = mount(App, {
      global: {
        plugins: [router],
        stubs: { FontAwesomeIcon },
      },
    });

    await wrapperApp.find('[data-test="router-link-wish"]').trigger('click');
    await flushPromises();

    expect(wrapperApp.findComponent(ItemWishListPage).exists()).toBe(true);
  });

  it('cart routing test', async () => {
    router.push('/');

    await router.isReady();

    const wrapperApp = mount(App, {
      global: {
        plugins: [router],
        stubs: { FontAwesomeIcon },
      },
    });

    await wrapperApp.find('[data-test="router-link-cart"]').trigger('click');
    await flushPromises();

    expect(wrapperApp.findComponent(ItemCartListPage).exists()).toBe(true);
  });

  it('my page routing test', async () => {
    router.push('/');

    await router.isReady();

    const wrapperApp = mount(App, {
      global: {
        plugins: [router],
        stubs: { FontAwesomeIcon },
      },
    });

    await wrapperApp.find('[data-test="router-link-my"]').trigger('click');
    await flushPromises();

    expect(wrapperApp.findComponent(MyInfoPage).exists()).toBe(true);
  });

  let wrapper;

  beforeEach(() => {
    wrapper = mount(NavBarPage, {
      global: {
        plugins: [router],
        stubs: { FontAwesomeIcon },
      },
    });
  });

  it('redners NavBar', () => {
    expect(wrapper.find('.nav').exists()).toBe(true);
  });

  it('nav의 홈 아이콘 영역이 존재하는가', () => {
    expect(wrapper.get('[data-test="nav-icon-home"]').exists()).toBe(true);
  });

  it('nav의 홈 텍스트 영역이 존재하는가', () => {
    expect(wrapper.get('[data-test="nav-text-home"]').exists()).toBe(true);
  });

  it('nav의 찜 아이콘 영역이 존재하는가', () => {
    expect(wrapper.get('[data-test="nav-icon-heart"]').exists()).toBe(true);
  });

  it('nav의 찜 텍스트 영역이 존재하는가', () => {
    expect(wrapper.get('[data-test="nav-text-heart"]').exists()).toBe(true);
  });

  it('nav의 장바구니 아이콘 영역이 존재하는가', () => {
    expect(wrapper.get('[data-test="nav-icon-cart"]').exists()).toBe(true);
  });

  it('nav의 장바구니 텍스트 영역이 존재하는가', () => {
    expect(wrapper.get('[data-test="nav-text-cart"]').exists()).toBe(true);
  });

  it('nav의 마이페이지 아이콘 영역이 존재하는가', () => {
    expect(wrapper.get('[data-test="nav-icon-my"]').exists()).toBe(true);
  });

  it('nav의 마이페이지 텍스트 영역이 존재하는가', () => {
    expect(wrapper.get('[data-test="nav-text-my"]').exists()).toBe(true);
  });
});

import { shallowMount } from '@vue/test-utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createStore } from 'vuex';
import ItemInfoPage from '@/views/ItemList.vue';
import HeaderPage from '@/components/common/Header.vue';
import ItemPage from '@/components/ItemList/Item.vue';
import NavBarPage from '@/components/common/NavBar.vue';

library.add(fas, far);

describe('ItemListPage', () => {
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
    wrapper = shallowMount(ItemInfoPage, {
      global: {
        plugins: [store],
        stubs: { FontAwesomeIcon },
      },
    });
  });

  it('redners ItemListPage', () => {
    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });

  it('헤더 컴포넌트가 있는가', () => {
    expect(wrapper.findComponent(HeaderPage).exists()).toBe(true);
  });

  it('아이템 컴포넌트가 있는가', async () => {
    expect(wrapper.findComponent(ItemPage).exists()).toBe(true);
  });

  it('하단 내비게이션 컴포넌트가 있는가', () => {
    expect(wrapper.findComponent(NavBarPage).exists()).toBe(true);
  });

  it('아이템 컴포넌트가 존재하는 만큼 렌더링 되는가', async () => {
    const itemWrapper = wrapper.findAllComponents(ItemPage);

    expect(itemWrapper).toHaveLength(1);
  });
});

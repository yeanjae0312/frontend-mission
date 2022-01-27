import { shallowMount } from '@vue/test-utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ItemInfoPage from '@/views/ItemList.vue';
import HeaderPage from '@/components/common/Header.vue';
import ItemPage from '@/components/ItemList/Item.vue';
import NavBarPage from '@/components/common/NavBar.vue';

library.add(fas, far);

describe('ItemListPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ItemInfoPage, {
      global: {
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

  it('아이템 컴포넌트가 있는가', () => {
    expect(wrapper.findComponent(ItemPage).exists()).toBe(true);
  });

  it('하단 내비게이션 컴포넌트가 있는가', () => {
    expect(wrapper.findComponent(NavBarPage).exists()).toBe(true);
  });

  it('아이템 컴포넌트가 존재하는 만큼 렌더링 되는가', async () => {
    const dataItemList = [
      {
        id: 1, img: 'img', price: 10000, original_price: 55000, name: 'name', description: 'desc',
      },
      {
        id: 2, img: 'img', price: 10000, original_price: 55000, name: 'name', description: 'desc',
      },
    ];

    await wrapper.setData({
      products: dataItemList,
    });

    const itemWrapper = wrapper.findAllComponents(ItemPage);

    expect(itemWrapper).toHaveLength(dataItemList.length);
  });
});

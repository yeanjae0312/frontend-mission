import { shallowMount, flushPromises } from '@vue/test-utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ItemInfoPage from '@/views/ItemList.vue';
import HeaderPage from '@/components/common/Header.vue';
import ItemPage from '@/components/ItemList/Item.vue';
import NavBarPage from '@/components/common/NavBar.vue';
import itemApi from '@/repositories/ItemRepository';

library.add(fas, far);

describe('ItemListPage', () => {
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
    wrapper = shallowMount(ItemInfoPage, {
      global: {
        stubs: { FontAwesomeIcon },
      },
    });
  });

  it('redners ItemListPage', () => {
    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });

  it('item API가 호출되는가', async () => {
    await flushPromises();

    expect(itemApi.get).toHaveBeenCalled();
  });

  it('api를 통해 받은 item만큼 렌더링 되는가', async () => {
    await itemApi.get();
    await flushPromises();

    expect(wrapper.findAll('[data-test="item"]').length).toEqual(dataItemList.length);
  });

  it('헤더 컴포넌트가 있는가', () => {
    expect(wrapper.findComponent(HeaderPage).exists()).toBe(true);
  });

  it('아이템 컴포넌트가 있는가', async () => {
    await wrapper.setData({
      items: dataItemList,
    });

    expect(wrapper.findComponent(ItemPage).exists()).toBe(true);
  });

  it('하단 내비게이션 컴포넌트가 있는가', () => {
    expect(wrapper.findComponent(NavBarPage).exists()).toBe(true);
  });

  it('아이템 컴포넌트가 존재하는 만큼 렌더링 되는가', async () => {
    await wrapper.setData({
      items: dataItemList,
    });

    const itemWrapper = wrapper.findAllComponents(ItemPage);

    expect(itemWrapper).toHaveLength(dataItemList.length);
  });
});

import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemList.vue';

describe('ItemListPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemInfoPage);
  });

  it('redners ItemListPage', () => {
    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });

  it('헤더 컴포넌트가 있는가', () => {
    expect(wrapper.get('[data-test="header"]').exists()).toBe(true);
  });

  it('아이템 컴포넌트가 있는가', () => {
    expect(wrapper.get('[data-test="item"]').exists()).toBe(true);
  });

  it('하단 내비게이션 컴포넌트가 있는가', () => {
    expect(wrapper.get('[data-test="navBar"]').exists()).toBe(true);
  });
});

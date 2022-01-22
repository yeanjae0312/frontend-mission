import { mount } from '@vue/test-utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ItemInfoPage from '@/views/ItemList.vue';

library.add(fas, far);

describe('ItemListPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemInfoPage, {
      global: {
        stubs: { FontAwesomeIcon },
      },
    });
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

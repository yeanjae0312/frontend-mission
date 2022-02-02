import { mount } from '@vue/test-utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import NavBarPage from '@/components/common/NavBar.vue';

library.add(fas, far);

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(NavBarPage, {
      global: {
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

import { mount } from '@vue/test-utils';
import HeaderPage from '@/components/common/Header.vue';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(HeaderPage);
  });

  it('redners HeaderPage', () => {
    expect(wrapper.find('.header').exists()).toBe(true);
  });
});

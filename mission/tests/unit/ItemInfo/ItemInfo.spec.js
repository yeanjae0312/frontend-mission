import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  it('redners ItemInfoPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });

  it('상품 이미지 영역이 있는가', async() => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.get('[data-test="product-img"]').exists()).toBe(true);
  })
});

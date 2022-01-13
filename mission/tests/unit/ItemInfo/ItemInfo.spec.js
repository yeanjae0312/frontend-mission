import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  it('redners ItemInfoPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });

  it('상품 이미지 영역이 있는가', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.get('[data-test="product-img"]').exists()).toBe(true);
  });

  it('판매자 정보에 프로필 영역이 있는가', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.get('[data-test="company-profile"]').exists()).toBe(true);
  });

  it('판매자 정보에 상호명과 태그 영역이 있는가', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.get('[data-test="company-info"]').exists()).toBe(true);
  });

  it('판매자 정보에 즐겨찾기 영역이 있는가', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.get('[data-test="company-star"]').exists()).toBe(true);
  });

  it('상호명에 데이터 값이 잘 들어갔는가', async () => {
    const wrapper = mount(ItemInfoPage);

    await wrapper.setData({
      company: {
        name: '에이블리',
      },
    });

    expect(wrapper.get('[data-test="company-info-name"]').text()).toBe('에이블리');
  });

  it('태그 리스트에 데이터 값이 잘 들어갔는가', async () => {
    const wrapper = mount(ItemInfoPage);

    await wrapper.setData({
      company: {
        tag: ['심플'],
      },
    });

    expect(wrapper.get('[data-test="company-info-tag"]').text()).toContain('심플');
  });

  it('즐겨찾기 버튼 한번 클릭시 즐겨찾기가 등록이 되는가', async () => {
    const wrapper = mount(ItemInfoPage);

    await wrapper.setData({
      company: {
        star: true,
      },
    });

    expect(wrapper.get('[data-test="company-star"]').find('i.fas').isVisible()).toBe(true);
  });

  it('선택되어 있는 즐겨찾기 버튼 클릭시 즐겨찾기 해제가 되는가', async () => {
    const wrapper = mount(ItemInfoPage);

    await wrapper.setData({
      company: {
        star: false,
      },
    });

    expect(wrapper.get('[data-test="company-star"]').find('i.far').isVisible()).toBe(true);
  });

  it('상품의 기본정보 영역이 있는가', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.get('[data-test="product-info"]').exists()).toBe(true);
  });

  it('할인율와 정가를 입력하면 할인가가 계산되어 나오는가', async () => {
    const wrapper = mount(ItemInfoPage);

    await wrapper.setData({
      product: {
        discountRate: '50',
        price: 100000,
      },
    });

    expect(wrapper.get('[data-test="discount-num"]').text()).toContain('50000');
  });

  it('상품 상세 설명 영역이 있는가', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.get('[data-test="product-detail"]').exists()).toBe(true);
  });
});

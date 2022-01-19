import { mount } from '@vue/test-utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ItemInfoPage from '@/views/ItemInfo.vue';

library.add(fas, far);

describe('ItemInfoPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemInfoPage, {
      global: {
        stubs: { FontAwesomeIcon },
      },
    });
  });

  it('redners ItemInfoPage', () => {
    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });

  it('상품 이미지 영역이 있는가', () => {
    expect(wrapper.get('[data-test="product-img"]').exists()).toBe(true);
  });

  it('판매자 정보에 프로필 영역이 있는가', () => {
    expect(wrapper.get('[data-test="company-profile"]').exists()).toBe(true);
  });

  it('판매자 정보에 상호명과 태그 영역이 있는가', () => {
    expect(wrapper.get('[data-test="company-info"]').exists()).toBe(true);
  });

  it('판매자 정보에 즐겨찾기 영역이 있는가', () => {
    expect(wrapper.get('[data-test="company-star"]').exists()).toBe(true);
  });

  it('상호명에 데이터 값이 잘 들어갔는가', async () => {
    await wrapper.setData({
      company: {
        name: '에이블리',
      },
    });

    expect(wrapper.get('[data-test="company-info-name"]').text()).toBe('에이블리');
  });

  it('태그 리스트에 데이터 값이 잘 들어갔는가', async () => {
    await wrapper.setData({
      company: {
        tag: ['심플'],
      },
    });

    expect(wrapper.get('[data-test="company-info-tag"]').text()).toContain('심플');
  });

  it('즐겨찾기 클릭시 토글기능이 동작 하는가', async () => {
    const starBtn = wrapper.get('[data-test="company-star-solid"]');

    await starBtn.trigger('click');

    expect(wrapper.get('[data-test="company-star-fill"]').isVisible()).toBe(true);

    await wrapper.get('[data-test="company-star-fill"]').trigger('click');

    expect(wrapper.get('[data-test="company-star-solid"]').isVisible()).toBe(true);
  });

  it('상품의 기본정보 영역이 있는가', () => {
    expect(wrapper.get('[data-test="product-info"]').exists()).toBe(true);
  });

  it('할인율와 정가를 입력하면 할인가가 계산되어 나오는가', async () => {
    const resultDiscountedPrice = 50000;

    await wrapper.setData({
      product: {
        discountRate: '50',
        price: 100000,
      },
    });

    expect(wrapper.get('[data-test="discount-num"]').text()).toContain(resultDiscountedPrice);
  });

  it('상품 상세 설명 영역이 있는가', () => {
    expect(wrapper.get('[data-test="product-detail"]').exists()).toBe(true);
  });

  it('리뷰 영역이 있는가', () => {
    expect(wrapper.get('[data-test="review"]').exists()).toBe(true);
  });

  it('리뷰어 이름이 잘 가져와 지는가', async () => {
    await wrapper.setData({
      reviewer: [
        {
          name: 'hello',
        },
      ],
    });

    expect(wrapper.get('[data-test="reviewer-name"]').text()).toContain('hello');
  });

  it('리뷰 날짜가 잘 가져와 지는가', async () => {
    await wrapper.setData({
      reviewer: [
        {
          date: '2021. 04. 29',
        },
      ],
    });

    expect(wrapper.get('[data-test="reviewer-date"]').text()).toContain('2021. 04. 29');
  });

  it('리뷰 제목이 잘 가져와 지는가', async () => {
    await wrapper.setData({
      reviewer: [
        {
          title: '리뷰 타이틀',
        },
      ],
    });

    expect(wrapper.get('[data-test="reviewer-title"]').text()).toContain('리뷰 타이틀');
  });

  it('리뷰 본문이 잘 가져와 지는가', async () => {
    await wrapper.setData({
      reviewer: [
        {
          contentString: '리뷰 본문',
        },
      ],
    });

    expect(wrapper.get('[data-test="reviewer-cont"]').text()).toContain('리뷰 본문');
  });

  it('구매 버튼 영역이 있는가', () => {
    expect(wrapper.get('[data-test="btn-purchase"]').exists()).toBe(true);
  });

  it('구매 버튼 안에 가격의 데이터가 잘 가져와 지는가', async () => {
    await wrapper.setData({
      product: {
        discountRate: '50',
        price: 100000,
      },
    });

    expect(wrapper.get('[data-test="btn-purchase"]').text()).toContain('50000');
  });

  it('찜하기 클릭시 토글기능이 동작 하는가', async () => {
    const heartBtn = wrapper.get('[data-test="heart-solid"]');

    await heartBtn.trigger('click');

    expect(wrapper.get('[data-test="heart-fill"]').isVisible()).toBe(true);

    await wrapper.get('[data-test="heart-fill"]').trigger('click');

    expect(wrapper.get('[data-test="heart-solid"]').isVisible()).toBe(true);
  });
});

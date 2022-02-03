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
    expect(wrapper.find('.item-info-page').exists()).toBe(true);
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
      item: {
        seller: {
          name: '에이블리',
        },
      },
    });

    expect(wrapper.get('[data-test="company-info-name"]').text()).toBe('에이블리');
  });

  it('태그 리스트에 데이터 값이 잘 들어갔는가', async () => {
    await wrapper.setData({
      item: {
        seller: {
          hash_tags: ['심플'],
        },
      },
    });

    expect(wrapper.get('[data-test="company-info-tag"]').text()).toContain('심플');
  });

  it('상품의 기본정보 영역이 있는가', () => {
    expect(wrapper.get('[data-test="product-info"]').exists()).toBe(true);
  });

  it('판매가와 원가를 입력시 할인율이 잘 도출되는가', async () => {
    await wrapper.setData({
      item: {
        price: 50000,
        original_price: 100000,
      },
    });

    expect(wrapper.get('[data-test="discount-num"]').text()).toContain('50');
  });

  it('상품 상세 설명 영역이 있는가', () => {
    expect(wrapper.get('[data-test="product-detail"]').exists()).toBe(true);
  });

  it('리뷰 영역이 있는가', () => {
    expect(wrapper.get('[data-test="review"]').exists()).toBe(true);
  });

  it('리뷰어 이름이 잘 가져와 지는가', async () => {
    await wrapper.setData({
      item: {
        reviews: [
          {
            writer: 'hello',
          },
        ],
      },
    });

    expect(wrapper.get('[data-test="reviewer-name"]').text()).toContain('hello');
  });

  it('리뷰 날짜가 잘 가져와 지는가', async () => {
    await wrapper.setData({
      item: {
        reviews: [
          {
            created: '2021. 04. 29',
          },
        ],
      },
    });

    expect(wrapper.get('[data-test="reviewer-date"]').text()).toContain('2021. 04. 29');
  });

  it('리뷰 제목이 잘 가져와 지는가', async () => {
    await wrapper.setData({
      item: {
        reviews: [
          {
            title: '리뷰 타이틀',
          },
        ],
      },
    });

    expect(wrapper.get('[data-test="reviewer-title"]').text()).toContain('리뷰 타이틀');
  });

  it('리뷰 본문이 잘 가져와 지는가', async () => {
    await wrapper.setData({
      item: {
        reviews: [
          {
            content: '리뷰 본문',
          },
        ],
      },
    });

    expect(wrapper.get('[data-test="reviewer-cont"]').text()).toContain('리뷰 본문');
  });

  it('구매 버튼 영역이 있는가', () => {
    expect(wrapper.get('[data-test="btn-purchase"]').exists()).toBe(true);
  });

  it('구매 버튼 안에 가격의 데이터가 잘 가져와 지는가', async () => {
    await wrapper.setData({
      item: {
        price: 100000,
        original_price: 140000,
      },
    });

    expect(wrapper.get('[data-test="btn-purchase"]').text()).toContain('100,000');
  });
});

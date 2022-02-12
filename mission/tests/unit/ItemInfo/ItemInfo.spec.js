import { mount } from '@vue/test-utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createStore } from 'vuex';
import ItemInfoPage from '@/views/ItemInfo.vue';

library.add(fas, far);

describe('ItemInfoPage', () => {
  const store = createStore({
    state: {
      products: [
        {
          product_no: '1',
          image: 'product-img',
          price: 39000,
          original_price: 55000,
          name: 'product-name',
          description: 'product-desc',
          detail_description: 'product-detail-desc',
          seller: {
            name: 'seller-name',
            profile_image: 'seller-profile-img',
            hash_tags: ['tag1', 'tag2'],
          },
          reviews: [
            {
              writer: 'writer',
              created: '2021. 02. 12',
              title: 'title',
              likes_count: 7,
              content: 'content',
              img: 'reviews-img',
            },
          ],
        },
      ],
      cart: [],
    },
    getters: {
      getItemList(state) {
        return state.products;
      },
    },
  });

  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemInfoPage, {
      global: {
        plugins: [store],
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
    expect(wrapper.get('[data-test="company-info-name"]').text()).toContain('seller-name');
  });

  it('태그 리스트에 데이터 값이 잘 들어갔는가', async () => {
    expect(wrapper.get('[data-test="company-info-tag"]').text()).toContain('tags1');
  });

  it('상품의 기본정보 영역이 있는가', () => {
    expect(wrapper.get('[data-test="product-info"]').exists()).toBe(true);
  });

  it('판매가와 원가를 입력시 할인율이 잘 도출되는가', async () => {
    expect(wrapper.get('[data-test="discount-num"]').text()).toContain('50');
  });

  it('상품 상세 설명 영역이 있는가', () => {
    expect(wrapper.get('[data-test="product-detail"]').exists()).toBe(true);
  });

  it('리뷰 영역이 있는가', () => {
    expect(wrapper.get('[data-test="review"]').exists()).toBe(true);
  });

  it('리뷰어 이름이 잘 가져와 지는가', async () => {
    expect(wrapper.get('[data-test="reviewer-name"]').text()).toContain('writer');
  });

  it('리뷰 날짜가 잘 가져와 지는가', async () => {
    expect(wrapper.get('[data-test="reviewer-date"]').text()).toContain('2021. 12. 04');
  });

  it('리뷰 제목이 잘 가져와 지는가', async () => {
    expect(wrapper.get('[data-test="reviewer-title"]').text()).toContain('title');
  });

  it('리뷰 본문이 잘 가져와 지는가', async () => {
    expect(wrapper.get('[data-test="reviewer-cont"]').text()).toContain('content');
  });

  it('구매 버튼 영역이 있는가', () => {
    expect(wrapper.get('[data-test="btn-purchase"]').exists()).toBe(true);
  });

  it('구매 버튼 안에 가격의 데이터가 잘 가져와 지는가', async () => {
    expect(wrapper.get('[data-test="btn-purchase"]').text()).toContain('39,000');
  });
});

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

  it('상품 이미지 영역이 있는가', () => {
    expect(wrapper.find('[data-test="product-img"]').exists()).toBe(true);
  });

  it('상품 이미지에 데이터가 잘 들어가는가', async () => {
    const productImgUrl = '@/assets/img/product-img.jpg';

    await wrapper.setData({
      products: [
        {
          img: productImgUrl,
        },
      ],
    });

    expect(wrapper.find('[data-test="product-img"]').find('img').attributes('src')).toContain(productImgUrl);
  });

  it('상품 가격 영역이 있는가', () => {
    expect(wrapper.find('[data-test="product-price"]').exists()).toBe(true);
  });

  it('상품 가격의 데이터가 잘 들어가는가', async () => {
    const productPrice = 50000;

    await wrapper.setData({
      products: [
        {
          price: productPrice,
        },
      ],
    });

    expect(wrapper.find('[data-test="product-price"]').text()).toContain('50,000');
  });

  it('상품 할인가와 원가를 비교해서 할인율을 도출해 내는가', async () => {
    const productPrice = 50000;
    const productOriginalPrice = 100000;

    await wrapper.setData({
      products: [
        {
          price: productPrice,
          original_price: productOriginalPrice,
        },
      ],
    });

    expect(wrapper.find('[data-test="product-rate"]').text()).toContain('50');
  });

  it('상품명의 데이터가 잘 들어가는가', async () => {
    const productName = '사자귀마개';

    await wrapper.setData({
      products: [
        {
          name: productName,
        },
      ],
    });

    expect(wrapper.find('[data-test="product-name"]').text()).toContain(productName);
  });

  it('상품 설명에 데이터가 잘 들어가는가', async () => {
    const productDesc = '사자는 동물의 왕입니다.';

    await wrapper.setData({
      products: [
        {
          description: productDesc,
        },
      ],
    });

    expect(wrapper.find('[data-test="product-desc"]').text()).toContain(productDesc);
  });
});

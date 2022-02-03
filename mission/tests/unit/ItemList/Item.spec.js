import { mount } from '@vue/test-utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ItemPage from '@/components/ItemList/Item.vue';

library.add(fas, far);

describe('ItemListItem', () => {
  let wrapper;

  const mockRouter = {
    push: jest.fn(),
  };

  beforeEach(() => {
    wrapper = mount(ItemPage, {
      global: {
        stubs: { FontAwesomeIcon },
        mocks: {
          $router: mockRouter,
        },
      },
    });
  });

  it('routing test', async () => {
    await wrapper.setProps({
      id: '1',
    });

    await wrapper.find('[data-test="router-btn-link"]').trigger('click');

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith('/item/1');
  });

  it('redners ItemListItem', async () => {
    expect(wrapper.find('.item-list-item').exists()).toBe(true);
  });

  it('상품 이미지 영역이 있는가', () => {
    expect(wrapper.find('[data-test="product-img"]').exists()).toBe(true);
  });

  it('상품 이미지에 데이터가 잘 들어가는가', async () => {
    const productImgUrl = '@/assets/img/product-img.jpg';

    await wrapper.setProps({
      img: productImgUrl,
    });

    expect(wrapper.find('[data-test="product-img"]').find('img').attributes('src')).toContain(productImgUrl);
  });

  it('상품 할인가 영역이 있는가', () => {
    expect(wrapper.find('[data-test="product-price"]').exists()).toBe(true);
  });

  it('상품의 할인가 데이터가 잘 들어가는가', async () => {
    const productPrice = 50000;

    await wrapper.setProps({
      price: productPrice,
    });

    expect(wrapper.find('[data-test="product-price"]').text()).toContain('50,000');
  });

  it('상품의 원가 데이터가 잘 들어가는가', async () => {
    const productOriginalPrice = 30000;

    await wrapper.setProps({
      original_price: productOriginalPrice,
    });

    expect(wrapper.find('[data-test="product-original-price"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="product-original-price"]').text()).toContain('30,000');
  });

  it('상품의 할인가와 원가를 받아서 할인율을 잘 도출해 내는가', async () => {
    const productPrice = 50000;
    const productOriginalPrice = 100000;

    await wrapper.setProps({
      price: productPrice,
      original_price: productOriginalPrice,
    });

    expect(wrapper.find('[data-test="product-rate"]').text()).toContain('50');
  });

  it('상품명의 데이터가 잘 들어가는가', async () => {
    const productName = '사자귀마개';

    await wrapper.setProps({
      name: productName,
    });

    expect(wrapper.find('[data-test="product-name"]').text()).toContain(productName);
  });

  it('상품 설명에 데이터가 잘 들어가는가', async () => {
    const productDesc = '사자는 동물의 왕입니다.';

    await wrapper.setProps({
      description: productDesc,
    });

    expect(wrapper.find('[data-test="product-desc"]').text()).toContain(productDesc);
  });
});

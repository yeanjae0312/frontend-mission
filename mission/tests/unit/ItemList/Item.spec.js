import { mount } from '@vue/test-utils';
import ItemPage from '@/components/ItemList/Item.vue';

describe('ItemListItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemPage);
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
      product: {
        img: productImgUrl,
      },
    });

    expect(wrapper.find('[data-test="product-img"]').find('img').attributes('src')).toContain(productImgUrl);
  });

  it('상품 할인가 영역이 있는가', () => {
    expect(wrapper.find('[data-test="product-price"]').exists()).toBe(true);
  });

  it('상품의 할인가 데이터가 잘 들어가는가', async () => {
    const productPrice = 50000;

    await wrapper.setProps({
      product: {
        price: productPrice,
      },
    });

    expect(wrapper.find('[data-test="product-price"]').text()).toContain('50,000');
  });

  it('상품의 원가 데이터가 잘 들어가는가', async () => {
    const productOriginalPrice = 30000;

    await wrapper.setProps({
      product: {
        original_price: productOriginalPrice,
      },
    });

    expect(wrapper.find('[data-test="product-original-price"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="product-original-price"]').text()).toContain('30,000');
  });

  it('상품의 할인가와 원가를 받아서 할인율을 잘 도출해 내는가', async () => {
    const productPrice = 50000;
    const productOriginalPrice = 100000;

    await wrapper.setProps({
      product: {
        price: productPrice,
        original_price: productOriginalPrice,
      },
    });

    expect(wrapper.find('[data-test="product-rate"]').text()).toContain('50');
  });

  it('상품명의 데이터가 잘 들어가는가', async () => {
    const productName = '사자귀마개';

    await wrapper.setProps({
      product: {
        name: productName,
      },
    });

    expect(wrapper.find('[data-test="product-name"]').text()).toContain(productName);
  });

  it('상품 설명에 데이터가 잘 들어가는가', async () => {
    const productDesc = '사자는 동물의 왕입니다.';

    await wrapper.setProps({
      product: {
        description: productDesc,
      },
    });

    expect(wrapper.find('[data-test="product-desc"]').text()).toContain(productDesc);
  });
});

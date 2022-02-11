const state = {
  products: [
    {
      product_no: '1',
      /* eslint-disable global-require */
      image: require('@/assets/img/product-img.jpg'),
      price: 39000,
      original_price: 55000,
      name: '롱 코트1',
      description: '누빔이 있어 따뜻하고 휘뚜루마뚜루 입기 좋은 롱 코트입니다.',
    },
    {
      product_no: '2',
      /* eslint-disable global-require */
      image: require('@/assets/img/company-img.jpg'),
      price: 39000,
      name: '롱 코트2',
      description: '누빔이 있어 따뜻한 롱 코트입니다.',
    },
    {
      product_no: '3',
      /* eslint-disable global-require */
      image: require('@/assets/img/review-img01.png'),
      price: 55000,
      original_price: 110000,
      name: '롱 코트3',
      description: '누빔이 있어 따뜻하고 휘뚜루마뚜루 입기 좋은 롱 코트입니다.',
    },
    {
      product_no: '4',
      /* eslint-disable global-require */
      image: require('@/assets/img/review-img02.jpg'),
      price: 78500,
      name: '롱 코트4',
      description: '누빔이 있어 따뜻한 롱 코트입니다.',
    },
    {
      product_no: '5',
      price: 89000,
      name: '롱 코트5',
      description: '누빔이 있어 따뜻하고 휘뚜루마뚜루 입기 좋은 롱 코트입니다.',
    },
  ],
};

const getters = {
  storedCartItems() {
    return state.products;
  },
  getTotalItem() {
    return state.products.length;
  },
  getTotalPrice() {
    let sum = 0;

    for (let i = 0; i < state.products.length; i += 1) {
      sum += state.products[i].price;
    }

    return sum;
  },
};

const mutations = {

};

const actions = {

};

export default {
  state,
  getters,
  mutations,
  actions,
};

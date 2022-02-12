const state = {
  products: [
    {
      product_no: '1',
      /* eslint-disable global-require */
      image: require('@/assets/img/product-img.jpg'),
      price: 39000,
      original_price: 55000,
      name: '[누빔안감] 핸드메이드 울 롱코트',
      description: '누빔이 있어 따뜻하고 휘뚜루마뚜루 입기 좋은 롱 코트입니다.',
      detail_description: '<div style="width:100%; padding:10px 14px; box-sizing: border-box;"><img src="/img/product-detail01.jpg" style="width:100%;"><span style="font-size:14px; font-weight:600;">누빔이 있어 따뜻하고 그렇다고 무겁지 않은 코트입니다!</span></div>',
      seller: {
        name: '멋쟁이사자처럼',
        /* eslint-disable global-require */
        profile_image: require('@/assets/img/company-img.jpg'),
        hash_tags: ['시크', '심플베이직', '페미닌', '러블리'],
      },
      reviews: [
        {
          writer: 'lion',
          created: '2021. 01. 14',
          title: '만족해요',
          likes_count: 7,
          content: '핏이 이쁘고 따뜻해서 만족해요. 요즘 교복처럼 입고다니는 옷이네요~',
          /* eslint-disable global-require */
          img: require('@/assets/img/review-img01.png'),
        },
        {
          writer: 'cuty lion',
          created: '2021. 01. 10',
          title: '별로에요',
          likes_count: 4,
          content: '생각보다 두껍고 무게가 나가네요. 보풀도 잘 일어날 것 같은 재질이에요.',
          /* eslint-disable global-require */
          img: require('@/assets/img/review-img02.jpg'),
        },
      ],
    },
    {
      product_no: '2',
      /* eslint-disable global-require */
      image: require('@/assets/img/company-img.jpg'),
      price: 39000,
      name: '롱 코트2',
      description: '누빔이 있어 따뜻한 롱 코트입니다.',
      detail_description: '<div style="width:100%; padding:10px 14px; box-sizing: border-box;"><img src="/img/product-detail01.jpg" style="width:100%;"><span style="font-size:14px; font-weight:600;">누빔이 있어 따뜻하고 그렇다고 무겁지 않은 코트입니다!</span></div>',
      seller: {
        name: '멋쟁이사자처럼',
        profile_image: require('@/assets/img/company-img.jpg'),
        hash_tags: ['시크', '심플베이직', '페미닌', '러블리'],
      },
      reviews: [
        {
          writer: 'lion',
          created: '2021. 01. 14',
          title: '만족해요',
          likes_count: 7,
          content: '핏이 이쁘고 따뜻해서 만족해요. 요즘 교복처럼 입고다니는 옷이네요~',
          /* eslint-disable global-require */
          img: require('@/assets/img/review-img01.png'),
        },
        {
          writer: 'cuty lion',
          created: '2021. 01. 10',
          title: '별로에요',
          likes_count: 4,
          content: '생각보다 두껍고 무게가 나가네요. 보풀도 잘 일어날 것 같은 재질이에요.',
          /* eslint-disable global-require */
          img: require('@/assets/img/review-img02.jpg'),
        },
      ],
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
    {
      product_no: '6',
      /* eslint-disable global-require */
      image: require('@/assets/img/review-img02.jpg'),
      price: 78500,
      original_price: 110000,
      name: '롱 코트6',
      description: '누빔이 있어 따뜻한 롱 코트입니다.',
    },
    {
      product_no: '7',
      /* eslint-disable global-require */
      image: require('@/assets/img/review-img02.jpg'),
      price: 78500,
      name: '롱 코트7',
      description: '누빔이 있어 따뜻한 롱 코트입니다.',
    },
    {
      product_no: '8',
      /* eslint-disable global-require */
      image: require('@/assets/img/review-img02.jpg'),
      price: 78500,
      original_price: 110000,
      name: '롱 코트8',
      description: '누빔이 있어 따뜻한 롱 코트입니다.',
    },
    {
      product_no: '9',
      /* eslint-disable global-require */
      image: require('@/assets/img/review-img02.jpg'),
      price: 78500,
      original_price: 110000,
      name: '롱 코트9',
      description: '누빔이 있어 따뜻한 롱 코트입니다.',
    },
    {
      product_no: '10',
      /* eslint-disable global-require */
      image: require('@/assets/img/review-img02.jpg'),
      price: 78500,
      name: '롱 코트10',
      description: '누빔이 있어 따뜻한 롱 코트입니다.',
    },
    {
      product_no: '11',
      /* eslint-disable global-require */
      image: require('@/assets/img/review-img02.jpg'),
      price: 78500,
      original_price: 110000,
      name: '롱 코트11',
      description: '누빔이 있어 따뜻한 롱 코트입니다.',
    },
    {
      product_no: '12',
      /* eslint-disable global-require */
      image: require('@/assets/img/review-img02.jpg'),
      price: 78500,
      name: '롱 코트12',
      description: '누빔이 있어 따뜻한 롱 코트입니다.',
    },
    {
      product_no: '13',
      /* eslint-disable global-require */
      image: require('@/assets/img/review-img02.jpg'),
      price: 78500,
      name: '롱 코트13',
      description: '누빔이 있어 따뜻한 롱 코트입니다.',
    },
    {
      product_no: '14',
      /* eslint-disable global-require */
      image: require('@/assets/img/review-img02.jpg'),
      price: 78500,
      original_price: 110000,
      name: '롱 코트14',
      description: '누빔이 있어 따뜻한 롱 코트입니다.',
    },
    {
      product_no: '15',
      /* eslint-disable global-require */
      image: require('@/assets/img/review-img02.jpg'),
      price: 78500,
      name: '롱 코트15',
      description: '누빔이 있어 따뜻한 롱 코트입니다.',
    },
  ],
  cart: [],
};

const getters = {
  // eslint-disable-next-line no-shadow
  getItemList(state) {
    return state.products;
  },
  // eslint-disable-next-line no-shadow
  getCartItemList(state) {
    return state.cart;
  },
  // eslint-disable-next-line no-shadow
  getTotalCartItem(state) {
    return state.cart.length;
  },
  // eslint-disable-next-line no-shadow
  getTotalOrderPrice(state) {
    let sum = 0;

    for (let i = 0; i < state.cart.length; i += 1) {
      sum += state.cart[i].price;
    }

    return sum;
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  addCartItem(state, id) {
    // eslint-disable-next-line no-alert
    alert('해당 상품을 장바구니에 담았습니다.');
    state.cart.push(state.products[id]);
  },
};

const actions = {
  clickItemInfoCartBtn({ commit }, id) {
    commit('addCartItem', id);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

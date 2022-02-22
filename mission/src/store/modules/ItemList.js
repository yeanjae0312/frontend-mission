const cart = {
  state: {
    cart_items: [
      // 샘플 데이터
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
    ],
  },
  getters: {
    // eslint-disable-next-line no-shadow
    getCartItemList(state) {
      return state.cart_items;
    },
    // eslint-disable-next-line no-shadow
    getTotalCartItem(state) {
      return state.cart_items.length;
    },
    // eslint-disable-next-line no-shadow
    getTotalOrderPrice(state) {
      return state.cart_items.reduce((acc, cur) => acc + cur.price, 0);
    },
  },
  mutations: {
    // eslint-disable-next-line no-shadow
    addCartItem(state, item) {
      state.cart_items.push(item);

      // eslint-disable-next-line no-alert
      alert('해당 상품을 장바구니에 담았습니다.');
    },
    // eslint-disable-next-line no-shadow
    deleteCartAllItem(state) {
      // eslint-disable-next-line no-alert
      alert('모든 장바구니 상품을 삭제합니다.');

      state.cart_items.splice(0);
    },
  },
  actions: {
    clickItemInfoCartBtn({ commit }, item) {
      commit('addCartItem', item);
    },
    clickCartListDeleteBtn({ commit }) {
      commit('deleteCartAllItem');
    },
  },
};

export default cart;

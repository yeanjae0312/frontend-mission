<template>
  <div id="item-list-page">
    <Header data-test="header"></Header>
    <Item data-test="item" :propsdata="products"></Item>
    <NavBar data-test="navBar"></NavBar>
  </div>
</template>

<script>
import Header from '../components/common/Header.vue';
import NavBar from '../components/common/NavBar.vue';
import Item from '../components/ItemList/Item.vue';

export default {
  name: 'ItemListPage',
  data() {
    return {
      products: [
        {
          id: 1,
          /* eslint-disable global-require */
          img: require('@/assets/img/product-img.jpg'),
          price: 39000,
          original_price: 55000,
          name: '롱 코트1',
          description: '누빔이 있어 따뜻하고 휘뚜루마뚜루 입기 좋은 롱 코트입니다.',
        },
        {
          id: 2,
          /* eslint-disable global-require */
          img: require('@/assets/img/product-img.jpg'),
          price: 39000,
          original_price: 55000,
          name: '롱 코트2',
          description: '누빔이 있어 따뜻한 롱 코트입니다.',
        },
        {
          id: 3,
          /* eslint-disable global-require */
          img: require('@/assets/img/product-img.jpg'),
          price: 39000,
          original_price: 55000,
          name: '롱 코트3',
          description: '누빔이 있어 따뜻하고 휘뚜루마뚜루 입기 좋은 롱 코트입니다.',
        },
        {
          id: 4,
          /* eslint-disable global-require */
          img: require('@/assets/img/product-img.jpg'),
          price: 39000,
          original_price: 55000,
          name: '롱 코트4',
          description: '누빔이 있어 따뜻한 롱 코트입니다.',
        },
        {
          id: 5,
          /* eslint-disable global-require */
          img: require('@/assets/img/product-img.jpg'),
          price: 39000,
          original_price: 55000,
          name: '롱 코트5',
          description: '누빔이 있어 따뜻하고 휘뚜루마뚜루 입기 좋은 롱 코트입니다.',
        },
        {
          id: 6,
          /* eslint-disable global-require */
          img: require('@/assets/img/product-img.jpg'),
          price: 39000,
          original_price: 55000,
          name: '롱 코트6',
          description: '누빔이 있어 따뜻한 롱 코트입니다.',
        },
        {
          id: 7,
          /* eslint-disable global-require */
          img: require('@/assets/img/product-img.jpg'),
          price: 39000,
          original_price: 55000,
          name: '롱 코트7',
          description: '누빔이 있어 따뜻한 롱 코트입니다.',
        },
        {
          id: 8,
          /* eslint-disable global-require */
          img: require('@/assets/img/product-img.jpg'),
          price: 39000,
          original_price: 55000,
          name: '롱 코트8',
          description: '누빔이 있어 따뜻한 롱 코트입니다.',
        },
        {
          id: 9,
          /* eslint-disable global-require */
          img: require('@/assets/img/product-img.jpg'),
          price: 39000,
          original_price: 55000,
          name: '롱 코트9',
          description: '누빔이 있어 따뜻하고 휘뚜루마뚜루 입기 좋은 롱 코트입니다.',
        },
        {
          id: 10,
          /* eslint-disable global-require */
          img: require('@/assets/img/product-img.jpg'),
          price: 39000,
          original_price: 55000,
          name: '롱 코트10',
          description: '누빔이 있어 따뜻한 롱 코트입니다.',
        },
        {
          id: 11,
          /* eslint-disable global-require */
          img: require('@/assets/img/product-img.jpg'),
          price: 39000,
          original_price: 55000,
          name: '롱 코트11',
          description: '누빔이 있어 따뜻한 롱 코트입니다.',
        },
        {
          id: 12,
          /* eslint-disable global-require */
          img: require('@/assets/img/product-img.jpg'),
          price: 39000,
          original_price: 55000,
          name: '롱 코트12',
          description: '누빔이 있어 따뜻하고 휘뚜루마뚜루 입기 좋은 롱 코트입니다.',
        },
        {
          id: 13,
          /* eslint-disable global-require */
          img: require('@/assets/img/product-img.jpg'),
          price: 39000,
          original_price: 55000,
          name: '롱 코트13',
          description: '누빔이 있어 따뜻한 롱 코트입니다.',
        },
        {
          id: 14,
          /* eslint-disable global-require */
          img: require('@/assets/img/product-img.jpg'),
          price: 39000,
          original_price: 55000,
          name: '롱 코트14',
          description: '누빔이 있어 따뜻한 롱 코트입니다.',
        },
        {
          id: 15,
          /* eslint-disable global-require */
          img: require('@/assets/img/product-img.jpg'),
          price: 39000,
          original_price: 55000,
          name: '롱 코트15',
          description: '누빔이 있어 따뜻한 롱 코트입니다.',
        },
      ],
    };
  },
  components: {
    Header,
    NavBar,
    Item,
  },
};
</script>

<style>
</style>

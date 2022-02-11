<template>
  <div id="item-list-page">
    <Header></Header>

    <main class="item-list-wrap">
      <div class="item-wrap flex-wrap">
        <Item
         v-for="item in items"
         :id="item.product_no"
         :img="item.image"
         :price="item.price"
         :original_price="item.original_price"
         :name="item.name"
         :description="item.description"
         :key="item.product_no"
        ></Item>
      </div>
    </main>

    <div class="order-btn-wrap">
      <router-link data-test="router-link-order" :to="`/order`"><p class="order-btn">구매하기</p></router-link>
    </div>

    <NavBar></NavBar>
  </div>
</template>

<script>
import RepositoryFactory from '@/repositories/RepositoryFactory';
import Header from '@/components/common/Header.vue';
import NavBar from '@/components/common/NavBar.vue';
import Item from '@/components/ItemList/Item.vue';

const ItemRepository = RepositoryFactory.get('cartItems');

export default {
  name: 'ItemWishListPage',
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      const { data } = await ItemRepository.get();
      this.items = data.cart_item;
    },
  },
  components: {
    Header,
    Item,
    NavBar,
  },
};
</script>

<style scoped>
  .item-list-wrap {
    padding: calc(59px + 10px) var(--paddingSide) calc(57px + 10px);
  }

  .flex-wrap {
    --gapSide: 14px;
    --gapBottom: 14px;
    display: flex;
    justify-content: space-between;
    align-items: top;
    flex-wrap: wrap;
    gap: var(--gapBottom) var(--gapSide);
  }

  .order-btn-wrap {
    padding: 0 var(--paddingSide) calc(57px + 20px);
    text-align: center;
  }

  .order-btn-wrap .order-btn {
    padding: 12px;
    background: #fe3152;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
    color: white;
  }
</style>

<template>
  <div id="item-list-page">
    <Header></Header>

    <main class="item-list-wrap">
      <div class="item-wrap flex-wrap">
        <Item data-test="cart-item"
         v-for="item in getCartItemList"
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

    <div class="delete-btn-wrap">
      <p class="delete-btn" @click="deleteTotalItem()">전체삭제</p>
    </div>

    <div class="order-btn-wrap">
      <router-link data-test="router-link-order" to="/order"><p class="order-btn">구매하기</p></router-link>
    </div>

    <NavBar></NavBar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from '@/components/common/Header.vue';
import NavBar from '@/components/common/NavBar.vue';
import Item from '@/components/ItemList/Item.vue';

export default {
  name: 'ItemCartListPage',
  data() {
    return {
      items: [],
    };
  },
  computed: {
    ...mapGetters(['getCartItemList']),
  },
  methods: {
    ...mapActions(['clickCartListDeleteBtn']),
    deleteTotalItem() {
      this.clickCartListDeleteBtn();
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

  .delete-btn-wrap {
    text-align: center;
    padding: 0 var(--paddingSide) 20px;
  }

  .delete-btn-wrap .delete-btn {
    display: inline-block;
    padding: 6px 10px;
    box-sizing: border-box;
    border-radius: 4px;
    background: rgb(151, 151, 151);
    font-size: 14px;
    color: white;
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

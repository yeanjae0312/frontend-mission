<template>
  <div id="item-list-page">
    <Header></Header>

    <main class="item-list-wrap">
      <div class="item-wrap flex-wrap">
        <Item data-test="item"
         v-for="item in getItemList"
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

    <NavBar></NavBar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '../components/common/Header.vue';
import NavBar from '../components/common/NavBar.vue';
import Item from '../components/ItemList/Item.vue';

export default {
  name: 'ItemListPage',
  computed: {
    ...mapGetters(['getItemList']),
  },
  components: {
    Header,
    Item,
    NavBar,
  },
};
</script>

<style>
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
</style>

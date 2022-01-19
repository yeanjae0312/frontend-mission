<template>
  <div id="item-list-page">
    <Header data-test="header"></Header>
    <Item data-test="item"></Item>
    <NavBar data-test="navBar"></NavBar>
  </div>
</template>

<script>
import Header from '../components/common/Header.vue';
import NavBar from '../components/common/NavBar.vue';
import Item from '../components/ItemList/Item.vue';

export default {
  name: 'ItemListPage',

  components: {
    Header,
    NavBar,
    Item,
  },
};
</script>

<style>
</style>

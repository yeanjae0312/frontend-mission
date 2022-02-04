<template>
  <div id="item-list-page">
    <Header></Header>

    <main class="item-list-wrap">
      <p>id: {{info.id }} </p>
      <p>email: {{ info.email }}</p>
      <p>username: {{ info.username }} </p>
    </main>

    <NavBar></NavBar>
  </div>
</template>

<script>
import RepositoryFactory from '@/repositories/RepositoryFactory';
import Header from '@/components/common/Header.vue';
import NavBar from '@/components/common/NavBar.vue';

const ItemRepository = RepositoryFactory.get('myInfo');

export default {
  name: 'ItemWishListPage',
  data() {
    return {
      info: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      const { data } = await ItemRepository.get();
      this.info = data;
    },
  },
  components: {
    Header,
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

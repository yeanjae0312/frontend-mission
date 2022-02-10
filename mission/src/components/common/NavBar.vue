<template>
  <nav class="nav">
    <div class="nav-inner">
      <div class="nav-item" v-for="item in menu" :key="item">
        <router-link :data-test="`router-link-${item.titleEn}`" :to="item.path">
          <font-awesome-icon :data-test="`nav-icon-${item.titleEn}`" :icon="item.icon" class="item-icon" />
          <p :data-test="`nav-text-${item.titleEn}`" class="item-conts">{{ item.title }}</p>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          title: '홈',
          titleEn: 'home',
          path: '/',
          icon: ['fas', 'home'],
        },
        {
          title: '찜',
          titleEn: 'wish',
          path: '/wish',
          icon: ['fas', 'heart'],
        },
        {
          title: '장바구니',
          titleEn: 'cart',
          path: '/cart',
          icon: ['fas', 'shopping-cart'],
        },
        {
          title: 'My',
          titleEn: 'my',
          path: '/info',
          icon: ['fas', 'user'],
        },
      ],
    };
  },
};
</script>

<style scoped>
  .nav {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    width: 100%;
    max-width: var(--max-size);
    background: white;
    border-top: solid 1px rgb(192, 192, 192);
    box-sizing: border-box;
    box-shadow: 0px -4px 4px -4px rgb(141, 141, 141);

  }

  .nav-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    padding: 10px var(--paddingSide);
    box-sizing: border-box;
  }

  .nav-inner .nav-item {
    width: calc(100% / 4);
    text-align: center;
  }

  .nav-inner .nav-item a {
    padding: 0 4px;
    display: block;
  }

  .nav-inner .nav-item .item-conts {
    margin-top: 2px;
    font-size: 12px;
  }
</style>

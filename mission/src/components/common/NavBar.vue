<template>
  <nav class="nav">
    <div class="nav-inner">
      <div class="nav-item">
        <router-link to="/">
          <font-awesome-icon data-test="nav-icon-home" :icon="['fas','home']" class="item-icon" />
          <p data-test="nav-text-home" class="item-conts">홈</p>
        </router-link>
      </div>

      <div class="nav-item">
        <router-link to="/wish">
          <font-awesome-icon data-test="nav-icon-heart" :icon="['fas','heart']" class="item-icon" />
          <p data-test="nav-text-heart" class="item-conts">찜</p>
        </router-link>
      </div>

      <div class="nav-item">
        <router-link to="/cart">
          <font-awesome-icon data-test="nav-icon-cart" :icon="['fas','shopping-cart']" class="item-icon" />
          <p data-test="nav-text-cart" class="item-conts">장바구니</p>
        </router-link>
      </div>

      <div class="nav-item">
        <router-link to="/info">
          <font-awesome-icon data-test="nav-icon-my" :icon="['fas','user']" class="item-icon" />
          <p data-test="nav-text-my" class="item-conts">My</p>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

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

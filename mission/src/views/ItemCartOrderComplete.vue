<template>
  <div class="item-cart-complete-page">
    <div class="complete-wrap">
      <font-awesome-icon :icon="['fas','check']" />
      <p class="complete-text">주문이 완료되었습니다!</p>
      <router-link data-test="router-link-home" to="/"><p class="back-btn">홈으로 돌아가기</p></router-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  .item-cart-complete-page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 0 var(--paddingSide);
    box-sizing: border-box;
    text-align: center;
  }

  .complete-text {
    font-weight: bold;
    margin-bottom: 16px;
  }

  .back-btn {
    padding: 8px;
    background: #fe3152;
    border-radius: 5px;
    color: white;
    font-size: 14px;
  }
</style>

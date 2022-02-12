<template>
  <div class="item-cart-order-page">
    <p class="cart-title">주문/결제</p>

    <section class="item-info-wrap">
      <p class="cart-common-title">주문상품 총 <span data-test="cart-order-count">{{ getTotalCartItem }}</span>개</p>
      <ul class="item-info-list" v-for="item in getCartItemList" :key="item">
        <li data-test="cart-order-item">{{ item.name }}</li>
      </ul>
    </section>

    <section class="order-info-wrap">
      <div class="order-info-item">
        <p class="cart-common-title">주문자명</p>
        <input type="text">
      </div>

      <div class="order-info-item">
        <p class="cart-common-title">전화번호</p>
        <input type="text">
      </div>

      <div class="order-info-item">
        <p class="cart-common-title">수령주소</p>
        <input type="text">
      </div>

      <div class="order-info-item">
        <p class="cart-common-title">배송지 정보</p>
        <input type="text">
      </div>

      <div class="order-info-item">
        <p class="cart-common-title">주문 총 가격</p>
        <p data-test="cart-order-price" class="cart-common-red-title">{{ priceWithComma(getTotalOrderPrice) }}원</p>
      </div>

      <div class="order-info-item">
        <p class="cart-common-title">결제 방법</p>
        <div class="box-list">
          <p>간편결제</p>
          <p>카드결제</p>
          <p>현금결제</p>
          <p>휴대폰결제</p>
        </div>
      </div>
    </section>

    <section class="order-btn-wrap">
      <router-link data-test="router-link-complete" :to="`/order/complete`"><p class="order-btn">결제하기</p></router-link>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getCartItemList', 'getTotalCartItem', 'getTotalOrderPrice']),
  },
  methods: {
    priceWithComma(value) {
      return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>

<style scoped>
.item-cart-order-page {
  padding: 0 var(--paddingSide);
  box-sizing: border-box;
}

.cart-title {
  position: fixed;
  top:0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 10px;
  background: white;
  font-weight: bold;
  text-align: center;
}

.cart-common-title {
  margin-bottom: 6px;
  font-size: 15px;
  font-weight: bold;
}

.cart-common-red-title {
  color: #fe3152;
  font-weight: bold;
}

.item-info-wrap {
  margin: calc(41px + 10px) 0 30px;
}

.item-info-wrap .item-info-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.item-info-wrap .item-info-list li {
  font-size: 14px;
}

.order-info-wrap {
  margin-bottom: 50px;
}

.order-info-wrap .order-info-item {
  margin-bottom: 14px;
}

.order-info-wrap .order-info-item input {
  padding: 5px;
  border: solid 1px #ccc;
  border-radius: 6px;
}

.order-info-wrap .order-info-item .box-list {
  --gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap);
}

.order-info-wrap .order-info-item .box-list p {
  min-width: calc(25% - calc(calc(var(--gap)*3)/4));
  padding: 10px;
  box-sizing: border-box;
  border: solid 1px #ccc;
  border-radius: 6px;
  font-size: 12px;
  text-align: center;
}

.order-btn-wrap {
    padding: 0 0 30px;
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

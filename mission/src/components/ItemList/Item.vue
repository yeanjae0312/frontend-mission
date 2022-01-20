<template>
  <div class="item-list-item">
    <div class="item-wrap flex-wrap">
      <div class="item" v-for="product in propsdata" :key="product">
        <a href="#none">
          <p data-test="product-img" class="img">
            <img v-if="product.img" :src="product.img" alt="">
            <span v-else>이미지가 없습니다.</span>
          </p>

          <div class="flex-wrap item-price-wrap">
            <p data-test="product-rate" class="item-rate" v-if="product.original_price">{{ showDiscountRate(product.original_price, product.price) }}%</p>
            <p data-test="product-price" class="item-price">{{ priceWidthComma(product.price) }}원</p>
            <p data-test="product-original-price" class="item-original-price" v-if="product.original_price">{{ priceWidthComma(product.original_price) }}원</p>
          </div>

          <p data-test="product-name" class="item-name">{{ product.name }}</p>
          <p data-test="product-desc" class="item-desc">{{ product.description }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: ['propsdata'],
  methods: {
    priceWidthComma(value) {
      return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    showDiscountRate(originalPrice, price) {
      const rate = ((originalPrice - price) / originalPrice) * 100;

      return Number.prototype.toFixed.call(rate, 0);
    },
  },
};
</script>

<style scoped>
  .item-list-item {
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

  .item {
    width: calc(50% - var(--gapSide) / 2);
  }

  .item a {
    display: block;
  }

  .item .img {
    position: relative;
    width: 100%;
    height: 44.73vw;
    min-height:129px;
    max-height:179px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .item .img img {
    position:absolute;
    top:50%;
    left:50%;
    min-width:100%;
    max-height:100%;
    width:auto;
    height:auto;
    transform:translate(-50%,-50%);
    object-fit: cover;
  }

  .item .img span{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: solid 1px #ccc;
    box-sizing: border-box;
    font-size: 12px;
  }

  .item .item-price-wrap {
    --gapSide: 6px;
    --gapBottom: 0px;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 6px;
  }

  .item-price-wrap .item-rate {
    color:rgb(214, 0, 0);
    font-weight: bold;
  }

  .item-price-wrap .item-price {
    font-size: 15px;
  }

  .item-price-wrap .item-original-price {
    font-size: 12px;
    color: rgb(168, 168, 168);
    text-decoration: line-through;
  }

  .item .item-name {
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: bold;
  }

  .item .item-desc {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
  }
</style>

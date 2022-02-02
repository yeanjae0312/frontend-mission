<template>
  <div class="item-list-item">
    <a href="#none">
      <p data-test="product-img" class="img">
        <img v-if="img" :src="img" alt="">
        <span v-else>이미지가 없습니다.</span>
      </p>

      <div class="flex-wrap item-price-wrap">
        <p data-test="product-rate" class="item-rate" v-if="isDiscounted">{{ showDiscountRate }}%</p>
        <p data-test="product-price" class="item-price">{{ priceWidthComma(price) }}원</p>
        <p data-test="product-original-price" class="item-original-price" v-if="isDiscounted">{{ priceWidthComma(original_price) }}원</p>
      </div>

      <p data-test="product-name" class="item-name">{{ name }}</p>
      <p data-test="product-desc" class="item-desc">{{ description }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: {
    id: { type: Number, default: 0 },
    img: { type: String, default: '' },
    price: { type: Number, default: 0 },
    original_price: { type: Number, default: -1 },
    name: { type: String, default: '' },
    description: { type: String, default: '' },
  },
  methods: {
    priceWidthComma(value) {
      return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  computed: {
    isDiscounted() {
      return this.original_price !== -1;
    },
    showDiscountRate() {
      const rate = ((this.original_price - this.price) / this.original_price) * 100;

      return Number.prototype.toFixed.call(rate, 0);
    },
  },
};
</script>

<style scoped>
  .item-list-item {
    width: calc(50% - var(--gapSide) / 2);
  }

  .item-list-item a {
    display: block;
  }

  .item-list-item .img {
    position: relative;
    width: 100%;
    height: 44.73vw;
    min-height:129px;
    max-height:179px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .item-list-item .img img {
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

  .item-list-item .img span{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: solid 1px #ccc;
    box-sizing: border-box;
    font-size: 12px;
  }

  .item-list-item .item-price-wrap {
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

  .item-list-item .item-name {
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: bold;
  }

  .item-list-item .item-desc {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
  }
</style>

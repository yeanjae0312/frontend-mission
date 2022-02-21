<template>
  <div class='item-info-page'>
    <div data-test="product-img" class="product-img">
      <img :src="item.image" alt="">
    </div>

    <div class="company-wrap">
      <div data-test="company-profile" class="img">
        <img :src="item.seller.profile_image" alt="">
      </div>

      <div data-test="company-info" class="info">
        <p data-test="company-info-name" class="info-name">{{ item.seller.name }}</p>
        <p class="info-tag"><span data-test="company-info-tag" v-for="item in item.seller.hash_tags" :key="item">#{{ item }}</span></p>
      </div>

      <div data-test="company-star" class="star">
        <font-awesome-icon data-test="company-star-solid" :icon="['far','star']" class="icon-star" />
      </div>
    </div>

    <div class="product-wrap">
      <div data-test="product-info" class="product-info">
        <p class="info-name">{{ item.name }}</p>
        <div class="info-price">
          <p class="info-price-rate" v-if="this.item.original_price">{{ showDiscountRate }}%</p>
          <p data-test="discount-num" class="info-price-discount">{{ priceWidthComma(item.price) }}원</p>
          <p class="info-price-original line" v-if="this.item.original_price">{{ priceWidthComma(item.original_price) }}원</p>
        </div>
      </div>

      <div data-test="product-detail" class="product-detail">
        <p class="detail-title">상품 상세 설명</p>
        <div class="detail-content" v-html="item.description"></div>
      </div>
    </div>

    <div class="review-wrap">
      <p class="review-title">Review</p>

      <div data-test="review" class="review-list" v-for="list in item.reviews" :key="list">
        <div class="review-list-inner">

          <div class="info-box">
            <div class="info-box-top">
              <p data-test="reviewer-name" class="name">{{ list.writer }}</p>
              <p data-test="reviewer-date" class="date">{{ list.created }}</p>
              <p data-test="reviewer-date" class="date">Like: {{ list.likes_count }}</p>
            </div>
            <p data-test="reviewer-title" class="info-box-title">{{ list.title }}</p>
            <p data-test="reviewer-cont" class="info-box-cont">{{ list.content }}</p>
          </div>

          <div class="img-box">
            <p class="img">
              <img :src="list.img" alt="">
            </p>
          </div>

        </div>
      </div>
    </div>

    <div class="btn-wrap">
      <div>
        <font-awesome-icon data-test="heart-solid" :icon="['far','heart']" class="icon-heart" />
      </div>

      <button data-test="btn-purchase" type="button"><span v-if="this.item.original_price">{{ priceWidthComma(item.price) }}</span><span v-else>{{ priceWidthComma(item.original_price) }}</span>원 구매</button>
    </div>
  </div>
</template>

<script>
import RepositoryFactory from '@/repositories/RepositoryFactory';

const ItemRepository = RepositoryFactory.get('items');

export default {
  name: 'ItemInfoPage',
  props: {
    id: { type: String, default: '' },
  },
  data() {
    return {
      item: {
        seller: {},
        reviews: [{}],
      },
    };
  },
  created() {
    this.getItem();
  },
  methods: {
    async getItem() {
      const { data } = await ItemRepository.getItem(this.id);
      this.item = data.item;
    },
    priceWidthComma(value) {
      return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  computed: {
    showDiscountRate() {
      const rate = ((this.item.original_price - this.item.price) / this.item.original_price) * 100;

      return Number.prototype.toFixed.call(rate, 0);
    },
  },
};
</script>

<style scoped>
  .item-info-page {
    --max-size: 400px;
    --paddingSide: 14px;
    width:100%;
    max-width:var(--max-size);
    margin:0 auto;
    padding-bottom:70px;
  }

  p {
    margin: 0;
  }

  .product-img {
    position:relative;
    width:100%;
    height:100vw;
    max-width:var(--max-size);
    max-height:var(--max-size);
    min-height:300px;

    overflow:hidden;
  }

  .product-img img {
    position:absolute;
    top:50%;
    left:50%;
    min-width:100%;
    min-height:100%;
    width:auto;
    height:auto;
    transform:translate(-50%,-50%);
  }

  .company-wrap {
    --imgSize: 40px;
    --iconSize: 18px;
    --gap: 10px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--gap);

    padding: 10px var(--paddingSide);
    border-bottom: solid 1px #ccc;
  }

  .company-wrap .img {
    width:var(--imgSize);
    height:var(--imgSize);

    border-radius:50%;
    overflow:hidden;
  }

  .company-wrap .img img {
    width:100%;
    height:100%;
  }

  .company-wrap .info {
    width:calc(100% - var(--imgSize) - var(--iconSize) - var(--gap)*2);
  }

  .company-wrap .info .info-name {
    font-size:14px;
    font-weight:bold;
  }

  .company-wrap .info .info-tag {
    margin-top:4px;
    font-size:12px;
    color:rgb(97, 97, 97);
  }

  .company-wrap .info .info-tag span:not(:last-child) {
    margin-right:4px;
  }

  .company-wrap .icon-star {
    width:var(--iconSize);
    cursor:pointer;
    color:rgb(192, 59, 59);
  }

  .product-wrap {
    padding: 16px 0;
  }

  .product-wrap .product-info {
    padding: 0 var(--paddingSide);
  }

  .product-info .info-name {
    font-size:18px;
    font-weight:bold;
  }

  .product-info .info-price {
    display:flex;
    justify-content: flex-start;
    align-items: center;
    gap:10px;

    margin-top:8px;
  }

  .product-info .info-price-rate {
    color:rgb(226, 19, 19);
    font-weight:bold;
  }

  .product-info .info-price-discount {
    color:rgb(59, 59, 59);
    font-weight:600;
  }

  .product-info .info-price-original {
    color:rgb(59, 59, 59);
    font-weight:600;
  }

  .product-info .info-price-original.line {
    color:rgb(122, 122, 122);
    font-size:12px;
    font-weight:normal;
    text-decoration: line-through;
  }

  .product-wrap .product-detail {
    margin-top:20px;
    border-bottom:solid 1px #ccc;
  }

  .product-detail .detail-title {
    padding:10px var(--paddingSide);
    border-bottom: solid 1px rgb(231, 231, 231);
    font-weight:600;
  }

  .product-detail .detail-content {
    padding: 10px var(--paddingSide);
  }

  .review-wrap {
    margin-top:16px;
    padding-bottom:10px;
    background:rgb(233, 233, 233);
  }

  .review-wrap .review-title {
    padding: 0 var(--paddingSide) 8px;
    background:white;
    font-weight:600;
  }

  .review-wrap .review-list {
    margin:8px 0;
  }

  .review-wrap .review-list:last-child {
    margin-bottom:0;
  }

  .review-list .review-list-inner {
    --imgSize: 100px;
    --gap:10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--gap);

    padding:8px var(--paddingSide);
    box-sizing: border-box;
    background:white;
  }

  .review-list-inner .info-box {
    width: calc(100% - var(--imgSize) - var(--gap));
  }

  .review-list-inner .info-box .info-box-top {
    display:flex;
    justify-content: flex-start;
    align-items: center;
    gap:10px;
  }

  .review-list-inner .info-box .info-box-top .name {
    font-size:14px;
  }

  .review-list-inner .info-box .info-box-top .date {
    font-size:11px;
    color:rgb(134, 134, 134);
  }

  .review-list-inner .info-box .info-box-title {
    margin-top:4px;
    font-size:14px;
    font-weight:bold;
  }

  .review-list-inner .info-box .info-box-cont {
    margin-top:4px;
    font-size:12px;
  }

  .review-list-inner .img-box {
    width: var(--imgSize);
    height: 27.77vw;
    min-height: 100px;
    max-height:100px;
  }

  .review-list-inner .img-box .img {
    position:relative;
    width:100%;
    height:100%;
    overflow:hidden;
  }

  .review-list-inner .img-box img {
    position:absolute;
    top:50%;
    left:50%;
    min-width:100%;
    max-height:100%;
    width:auto;
    height:auto;
    transform:translate(-50%,-50%);
  }

  .btn-wrap {
    position:fixed;
    bottom:0;
    left:50%;
    z-index:100;
    transform:translateX(-50%);

    display: flex;
    justify-content: center;
    align-items: center;
    gap:50px;

    width:100%;
    max-width:var(--max-size);
    height:50px;
    padding:8px var(--paddingSide);
    box-sizing: border-box;
    box-shadow: 0 -1px 8px -2px rgb(163, 163, 163);

    background:white;
    border-top:solid 1px #ccc;
  }

  .btn-wrap .icon-heart {
    font-size:22px;
    color:rgb(31, 31, 31);
  }

  .btn-wrap button {
    padding:4px 14px;
    border-radius: 4px;
    background:rgb(150, 3, 3);
    border:none;
    color:white;
    font-size:18px;
  }
</style>

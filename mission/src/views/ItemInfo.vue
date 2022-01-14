<template>
  <div id='item-info-page'>
    <div data-test="product-img" class="product-img">
      <img :src="this.product.img" alt="">
    </div>

    <div class="company-wrap">
      <div data-test="company-profile" class="img">
        <img :src="this.company.profile" alt="">
      </div>
      <div data-test="company-info" class="info">
        <p data-test="company-info-name" class="info-name">{{ this.company.name }}</p>
        <p class="info-tag"><span data-test="company-info-tag" v-for="item in this.company.tag" v-bind:key="item">#{{ item }}</span></p>
      </div>
      <div data-test="company-star" class="star">
        <i v-if="this.company.star" @click="toggleClickedStar()" class="fas fa-star"></i>
        <i v-else @click="toggleClickedStar()" class="far fa-star"></i>
      </div>
    </div>

    <div class="product-wrap">
      <div data-test="product-info" class="product-info">
        <p class="info-name">{{ this.product.name }}</p>
        <div class="info-price">
          <p class="info-price-rate" v-if="this.product.discount">{{ this.product.discountRate }}%</p>
          <p data-test="discount-num" class="info-price-discount" v-if="this.product.discount">{{ showDiscountPrice }}원</p>
          <p class="info-price-original" v-bind:class="{line: this.product.discount}">{{ this.product.price }}원</p>
        </div>
      </div>
      <div data-test="product-detail" class="product-detail">
        <p class="detail-title">상품 상세 설명</p>
        <div v-html="this.product.detail"></div>
      </div>
    </div>

    <div class="review-wrap">
      <p class="review-title">Review</p>
      <div data-test="review" class="review-list" v-for="(list, index) in this.reviewer" v-bind:key="list">
        <div class="review-list-inner">
          <div class="info-box">
            <div class="info-box-top">
              <p data-test="reviewer-name" class="name">{{ this.reviewer[index].name }}</p>
              <p data-test="reviewer-date" class="date">{{ this.reviewer[index].date }}</p>
            </div>
            <p data-test="reviewer-title" class="info-box-title">{{ this.reviewer[index].title }}</p>
            <p data-test="reviewer-cont" class="info-box-cont">{{ this.reviewer[index].contentString }}</p>
          </div>
          <div class="img-box">
            <p class="img">
              <img :src="this.reviewer[index].contentImg" alt="">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemInfoPage',
  data() {
    return {
      company: {
        name: '멋쟁이사자처럼',
        /* eslint-disable global-require */
        profile: require('../assets/img/company-img.jpg'),
        tag: ['시크', '심플베이직', '페미닌', '러블리'],
        star: false,
      },
      product: {
        name: '[누빔안감] 핸드메이드 울 롱코트',
        /* eslint-disable global-require */
        img: require('../assets/img/product-img.jpg'),
        discount: true,
        discountRate: '39',
        price: 98000,
        detail: '<div style="width:100%; padding:10px 14px; box-sizing: border-box;"><img src="/img/product-detail01.jpg" style="width:100%;"><span style="font-size:14px; font-weight:600;">누빔이 있어 따뜻하고 그렇다고 무겁지 않은 코트입니다!</span></div>',
      },
      reviewer: [
        {
          name: 'lion',
          date: '2021. 01. 14',
          title: '만족해요',
          contentString: '핏이 이쁘고 따뜻해서 만족해요. 요즘 교복처럼 입고다니는 옷이네요~',
          /* eslint-disable global-require */
          contentImg: require('../assets/img/review-img01.png'),
        },
        {
          name: 'cuty lion',
          date: '2021. 01. 10',
          title: '별로에요',
          contentString: '생각보다 두껍고 무게가 나가네요. 보풀도 잘 일어날 것 같은 재질이에요.',
          /* eslint-disable global-require */
          contentImg: require('../assets/img/review-img02.jpg'),
        },
      ],
    };
  },
  methods: {
    toggleClickedStar() {
      this.company.star = !this.company.star;
    },
  },
  computed: {
    showDiscountPrice() {
      const num = this.product.price * (1 - this.product.discountRate * 0.01); // 할인가

      return Math.ceil((num / 100)) * 100; // 100원 단위에서 올림처리
    },
  },
};
</script>

<style scoped>
  #item-info-page {
    --max-size: 400px;
    --paddingSide: 14px;
    width:100%;
    max-width:var(--max-size);
    margin:0 auto;
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

  .company-wrap .star {
    width:var(--iconSize);
    cursor:pointer;
  }

  .company-wrap .star i {
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
</style>

<template>
  <div id='item-info-page'>
    <div data-test="product-img" class="product-img">
      <img :src="this.product.img" alt="">
    </div>
    <div class="wrapper">
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
        discountRate: '39',
        price: 98000,
        detail: '<img src="/img/product-detail01.jpg"><span style="color: red">This should be red.</span>',
      },
      reviewer: [
        {
          name: 'lion',
          title: '만족해요',
          contentString: '핏이 이쁘고 따뜻해서 만족해요. 요즘 교복처럼 입고다니는 옷이네요~',
          /* eslint-disable global-require */
          contentImg: require('../assets/img/review-img01.png'),
        },
        {
          name: 'cuty lion',
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

  },
};
</script>

<style scoped>
  #item-info-page {
    --max-size: 400px;
    width:100%;
    max-width:var(--max-size);
    margin:0 auto;
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

  .wrapper {
    padding: 0 14px;
    box-sizing: border-box;
  }

  .company-wrap {
    --imgSize: 40px;
    --iconSize: 18px;
    --gap: 10px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--gap);

    margin-top:10px;
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

  .company-wrap .info p {
    margin: 0;
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
</style>

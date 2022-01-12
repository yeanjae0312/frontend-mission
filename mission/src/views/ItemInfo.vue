<template>
<div id='item-info-page'></div>
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
        tag: ['시크', '심플베이직', '페미닌', '러블리', '섹시글램', '유니크', '캐쥬얼'],
        book: false,
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

  },
  computed: {

  },
};
</script>

<style scoped>

</style>

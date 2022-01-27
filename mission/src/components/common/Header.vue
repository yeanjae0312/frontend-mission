<template>
  <header class="header" :class="{hidden: !isShowed}">
    <div class="header-inner">
      <p class="company-name"><a href="#none">YeonBlion Market</a></p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isShowed: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    // 전체 화면내용이 렌더링된 후(컴포넌트가 DOM에 추가된 후)에 실행
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    // 컴포넌트 인스턴스가 마운트 해제(unmounted) 되기 직전에 호출
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPosition === 0) {
        this.isShowed = true;
      } else {
        this.isShowed = false;
      }

      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style scroped>
  .header {
    position: fixed;
    top: 0;
    left: 50%;

    width:100%;
    max-width: var(--max-size);
    background: white;
    border-bottom: solid 1px rgb(192, 192, 192);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px -4px rgb(141, 141, 141);

    transform: translate3d(-50%, 0, 0);
    transition: 0.3s ease-out;
  }

  .header.hidden {
    box-shadow: none;
    transform: translate3d(-50%, -100%, 0);
  }

  .header .header-inner {
    width: 100%;
    padding: 20px var(--paddingSide);
    box-sizing: border-box;
  }

  .header-inner .logo {
    width: 50px;
  }

  .header-inner .logo img {
    width: 100%;
  }

  .header-inner .company-name {
    font-weight: bold;
    text-align: center;
  }
</style>

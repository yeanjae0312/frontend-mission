<template>
  <div class="wrap-text-rotate">
    <div class="box-form">
      <!-- v-model속성 사용 -->
      <!-- <input type="text" v-model="inputText" placeholder="텍스트를 입력해보세요."> -->
      <!-- input 속성 사용 -->
      <input type="text" v-on:input="typingInput" v-bind:value="inputText"
       placeholder="텍스트를 입력해보세요.">
      <button>제출</button>
      <button>알림</button>
    </div>
    <p class="show-input-text">{{ inputText }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
    };
  },
  methods: {
    typingInput(e) {
      this.inputText = e.target.value;
    },
  },
};
</script>

<style scoped>
  .wrap-text-rotate .box-form {
    display:flex;
    justify-content: center;
    align-items: center;
    gap:10px;
  }
</style>

<template>
  <div>
    <div class="box-form">
      <!-- v-model속성 사용 -->
      <!-- <input type="text" v-model="inputText" placeholder="텍스트를 입력해보세요."> -->
      <!-- input 속성 사용 -->
      <input type="text" @input="typingInput" v-bind:value="inputText" placeholder="텍스트를 입력해보세요.">
      <button @click="rotateText">회전</button>
      <button @click="countClick" data-test="alert">알림</button>
    </div>
    <p>{{ inputText }}</p>

    <TextRotateModal v-if="showModal" @close="showModal = false" id="modal" v-bind:propsdata="{inputText, countNum}"></TextRotateModal>
  </div>
</template>

<script>
import TextRotateModal from './TextRotateModal.vue';

export default {
  data() {
    return {
      inputText: '',
      showModal: false,
      countNum: 0,
    };
  },
  methods: {
    typingInput(e) {
      this.inputText = e.target.value;
    },
    rotateText() {
      // 두번재 요소부터 텍스트를 남겨놓고 0번째부터 1번째 요소까지(0을 인덱스로 하는 요소)의 텍스트를 뒤에 붙여준다.
      this.inputText = this.inputText.slice(1) + this.inputText.slice(0, 1);
    },
    countClick() {
      this.countNum += 1;
      this.showModal = true;
    },
  },
  components: {
    TextRotateModal,
  },
};
</script>

<style>
  .box-form {
    display:flex;
    justify-content: center;
    align-items: center;
    gap:10px;
  }

  .box-form input {
    padding:5px;
    border-radius:5px;
    border: solid 1px #000000;
  }

  button {
    background:#41b883;
    color:#fff;
    padding:3px 5px 4px;
    border: solid 1px #73cea5;
    border-radius:5px;
    font-weight:bold;
  }
</style>

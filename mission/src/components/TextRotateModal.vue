<template>
  <div>
    <Modal>
      <template v-slot:header>
        <h3>입력값과 클릭 수 확인</h3>
      </template>
      <template v-slot:body>
        <div data-test="modal-body-message">{{ inputText }} : {{ countNum }}</div>
      </template>
      <template v-slot:footer>
        <button @click="$emit('close')" data-test="modal-btn-close">Close</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  props: ['propsdata'],
  data() {
    return {
      inputText: this.propsdata.inputText,
      countNum: this.propsdata.countNum,
    };
  },
  components: {
    Modal,
  },
};
</script>

<style>

</style>

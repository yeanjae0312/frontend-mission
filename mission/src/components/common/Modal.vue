<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <!-- 모달 헤더 -->
        <div class="modal-header">
          <slot name="header">
            default header
          </slot>
        </div>

        <!-- 모달 바디 -->
        <div class="modal-body">
          <slot name="body">
            default body
          </slot>
        </div>

        <!-- 모달 푸터 -->
        <div class="modal-footer">
          <slot name="footer">
            default footer
            <button @click="$emit('close')">
              Close
            </button>
          </slot>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

</style>

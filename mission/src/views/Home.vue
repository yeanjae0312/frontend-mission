<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TextRotate></TextRotate>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import TextRotate from '../components/TextRotate.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    TextRotate,
  },
};
</script>

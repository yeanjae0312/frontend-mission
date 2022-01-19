<template>
  <div>
    <router-view/>
  </div>
</template>

<style>
html, body {
  margin: 0 auto;
  --max-size: 400px;
  --paddingSide: 14px;
  width:100%;
  max-width:var(--max-size);
}

p {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

#app {
  min-width:300px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

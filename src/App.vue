<template>
  <div id="app">
    <nav><router-link to="/">Home</router-link></nav>

    <router-view />
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

body {
  background: #f4f5f5;
  font-family: "Montserrat", sans-serif;
}

body,
html {
  margin: 0;
  height: 100%;
}

ol,
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

nav {
  margin-top: 10px;
  margin-bottom: 50px;
}

#app {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

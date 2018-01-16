<template>
  <div id="app">
      <h2 class="test">小程序内嵌内容运营系统</h2>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 10rem;
  min-width: 320px;
  margin-left: auto;
  margin-right: auto;
  background: #efedec;
  .test{
    padding: 40px;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>

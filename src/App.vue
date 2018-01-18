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
    padding: 30px;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }
}

.flex{
  display: flex;
}

.flex-x {
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.flex-y {
  display: flex;
  align-items: center;
}

.flex-xy {
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.flex-column {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
}

.flex-grow {
  flex-grow: 1;
}

.flex-between {
  justify-content: space-between;
}

.flex-y-center{
  display: flex;
  align-content: space-around;
}
</style>

<template>
  <div id="app">
    <img src="./assets/v-tell.jpg" alt="">
    <h3>SMSC Provisiong Tool</h3>
    <top-nav />
    <router-view/>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'

export default {
  name: 'app',
  components: {
    TopNav: TopNav
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

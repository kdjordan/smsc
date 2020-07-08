<template>
    <div id="nav">
       <router-link to="/">Add Acccount</router-link> |
       <router-link to="/manage">Manage Accounts</router-link> |
       <router-link to="/reports">Get Reports</router-link> 
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
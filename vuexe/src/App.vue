<template>
  <div id="app">
    <router-view class="view two" name="header"></router-view>
    <router-view class="view three" name="footer"></router-view>
  </div>
</template>

<script>

 let js1 =   "./assets/js/main.js";
export default {
  name: 'App',
  data(){
    return {
      js1 : ''
    }
  },
  beforeCreate() {
  },
  mounted(){
    this.js1 = js1;
  }

  
}
import "./assets/js/main.js"

</script>

<style lang="scss">

</style>

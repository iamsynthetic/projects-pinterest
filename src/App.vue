<template>
  <div id="app">
    <mainmenu class="main-menu"></mainmenu>
    <div class="loaded-page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import mainmenu from "./components/MainMenu.vue"

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
   mainmenu
  },
  created(){
    document.title = "Pinterest Clone"
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 8px;
}

.main-menu{
  z-index:2;
  position:relative;
}
.loaded-page{
  z-index:1;
}
</style>



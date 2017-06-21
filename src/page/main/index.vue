<template>
  <div class="_page-view">
    <div class="_page-header">
      <nav-bar></nav-bar>
    </div>
    <div class="_page-body">
      <aside class="_page-sidebar">
        <side-bar></side-bar>
      </aside>
      <div class="_page-content">
        <!-- router view -->
        <div class="_page-router">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="_page-footer">
      <footer-bar></footer-bar>
    </div>
  </div>
</template>
<script>
  import navBar from "@/components/nav-bar"
  import sideBar from "@/components/side-bar"
  import footerBar from "@/components/footer-bar"

  export default {
    name: "main",
    components: {
      footerBar,
      navBar,
      sideBar
    },
    computed: {

    },
    data() {
      return {
        visible:false
      }
    }
  }
</script>
<style lang="scss" scoped>
  ._page-view {
    width: 100%;
  }
  ._page-sidebar {

  }
 ._page-header {
   height: 60px;
 }
 ._page-body {
   clear: both;
   width: 100%;
   display: flex;
   margin-top: 20px;
 }
  ._page-content {
    width: 87%;
    margin-left: 10px;
  }
  ._page-footer {
    display: block;
  }
</style>

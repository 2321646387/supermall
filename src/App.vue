<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/MainTabBar";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    MainTabBar,
  },
};
</script>

<style scoped lang="less">
@import "assets/css/base.css";
</style>

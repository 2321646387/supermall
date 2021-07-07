<template>
  <div id="home">
    <nav-bar class="home-nav">
      <!-- <div slot="center">购物街</div> -->
      <template v-slot:center>购物街</template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
    ></tab-control>
    <ul>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
      <li><a href="">1111111</a></li>
    </ul>
  </div>
</template>

<script>
/* 完全独立的组件 */
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
/* 业务组件 */
import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/TabControl";
/* 方法 */
import { getHomeBanner } from "../../network/home.js";

export default {
  data() {
    return {
      // result: null,
      banners: [],
      recommends: [],
    };
  },
  name: "Home",
  components: {
    // 注册

    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
  },
  created() {
    // console.log("11111");
    // 1.请求多个数据
    getHomeBanner().then((res) => {
      // console.log(res);
      // this.result = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped lang="less">
#home {
  // height: 100vh;
  margin-top: 44px;
  // overflow: hidden;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>

<template>
  <div id="home">
    <nav-bar class="home-nav">
      <!-- <div slot="center">购物街</div> -->
      <template v-slot:center>购物街</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
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
    NavBar,
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
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>

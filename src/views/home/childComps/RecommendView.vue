<template>
  <div class="home-recommend">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommend-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.home-recommend {
  display: flex;
  padding: 20px 0;
  text-align: center;
  border-bottom: 10px solid #eeeeee;
  font-size: 15px;

  .recommend-item {
    flex: 1;
    img {
      width: 60px;
    }
    span {
      display: block;
    }
  }
}
</style>

<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      // 记录当前的index
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
.tab-control {
  display: flex;
  height: 40px;
  background-color: #fff;
  position: sticky;
  top: 44px;
}
.tab-control-item {
  // justify-content: ;
  flex: 1;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
}
</style>

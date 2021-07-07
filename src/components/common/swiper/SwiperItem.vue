<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slide",
};
</script>

<style scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100% !important;
  max-width: 100%;
  /* width: 414px !important; */
  /* z-index: 100; */
}
</style>


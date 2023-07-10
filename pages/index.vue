<template>
  <main class="index-page">
    <ImageSection />
    <InfoSection />
    <CountDownSection />
    <AreYouComming />
    <ToyGallery />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.index-page {
  overflow: hidden;
}

/* @TODO: 鼠标点击任何区域，冒出爱心 */
</style>

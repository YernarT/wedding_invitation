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
import heartSVG from "~/assets/image/heart.svg?inline";

const globalClickHanlder = (e: MouseEvent) => {
  const { clientX, clientY } = e;

  const heartDOM = new Image(18, 18);
  heartDOM.src = heartSVG;
  heartDOM.classList.add("itisit-heart");
  heartDOM.style.cssText = `
    --x: ${clientX}px;
    --y: ${clientY}px;
  `;

  document.body.appendChild(heartDOM);
  setTimeout(() => {
    heartDOM.remove();
  }, 666 + 88);
};

onMounted(() => {
  document.addEventListener("click", globalClickHanlder);
});
onBeforeUnmount(() =>
  document.removeEventListener("click", globalClickHanlder)
);
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.index-page {
  overflow: hidden;
}

/* @TODO: 鼠标点击任何区域，冒出爱心 */
</style>

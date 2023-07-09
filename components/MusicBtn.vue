<template>
  <div class="music-btn" @click="handleClick">
    <img
      v-show="!isPlayed"
      class="btn-image"
      src="~/assets/image/play.png"
      alt="Play Btn"
    />
    <img
      v-show="isPlayed"
      class="btn-image"
      src="~/assets/image/pause.png"
      alt="Pause Btn"
    />
    <img
      class="btn-help-text"
      src="~/assets/image/help-text.png"
      alt="Help text"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isPlayed = ref(false);

const handleClick = () => {
  isPlayed.value = !isPlayed.value;
};
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.music-btn {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;

  .btn-image {
    width: 65%;
    @include positionCenter();
  }

  .btn-help-text {
    width: 100%;
    animation: rotate 10s linear infinite;
    @include positioned();
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>

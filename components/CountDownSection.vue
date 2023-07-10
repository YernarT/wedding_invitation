<template>
  <section class="count-down">
    <span v-once>Тойдың басталуына:</span>

    <div class="list">
      <div class="block">
        <div class="circle">
          <span class="value">{{ getCountDown().days }}</span>
        </div>
        <span v-once class="label">күн</span>
      </div>

      <div class="block">
        <div class="circle">
          <span class="value">{{ getCountDown().hours }}</span>
        </div>
        <span v-once class="label">сағат</span>
      </div>

      <div class="block">
        <div class="circle">
          <span class="value">{{ getCountDown().minutes }}</span>
        </div>
        <span v-once class="label">минут</span>
      </div>

      <div class="block">
        <div class="circle">
          <span class="value">{{ getCountDown().seconds }}</span>
        </div>
        <span v-once class="label">секунд</span>
      </div>
    </div>

    <input type="hidden" :key="forceUpdateHelper.toString()" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated } from "vue";

const forceUpdateHelper = ref({});

const getCountDown = () => {
  const deadline = new Date("2023-08-30 18:00:00");
  const now = new Date();

  if (now > deadline) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  // This code from `ChatGPT-3.5`
  const timeDiff = deadline.getTime() - now.getTime();
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let remainingMilliseconds = timeDiff % (1000 * 60 * 60 * 24);
  const hours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));
  remainingMilliseconds %= 1000 * 60 * 60;
  const minutes = Math.floor(remainingMilliseconds / (1000 * 60));
  remainingMilliseconds %= 1000 * 60;
  const seconds = Math.floor(remainingMilliseconds / 1000);

  return { days, hours, minutes, seconds };
};

onMounted(() => {
  setInterval(() => {
    forceUpdateHelper.value = {};
  }, 1000);
});
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.count-down {
  width: 100%;
  margin-bottom: 80px;
  @include responsiveFont();

  .list {
    width: calc(calc(56px + 20px) * 4 + 8px * 3);
    margin: 24px auto 0 auto;

    @include flex(
      $justifyContent: space-evenly,
      $alignItems: center,
      $gap: 8px
    );

    .block {
      @include flexCenter($direction: column, $gap: 8px);
    }

    .circle {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 2px solid var(--c-primary);
      color: var(--c-primary);
      @include flexCenter;
      @include responsiveFont($sizeLg: 24px, $sizeMd: 18px, $sizeSm: 14px);
    }

    .label {
      @include responsiveFont($sizeLg: 16px, $sizeMd: 16px, $sizeSm: 14px);
    }
  }
}
</style>

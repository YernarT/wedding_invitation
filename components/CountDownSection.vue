<template>
  <section class="count-down">
    <span>Тойдың басталуына:</span>

    <div class="list">
      <div class="block">
        <div class="circle">
          <span class="value">0</span>
        </div>
        <span class="label">күн</span>
      </div>

      <div class="block">
        <div class="circle">
          <span class="value">0</span>
        </div>
        <span class="label">сағат</span>
      </div>

      <div class="block">
        <div class="circle">
          <span class="value">0</span>
        </div>
        <span class="label">минут</span>
      </div>

      <div class="block">
        <div class="circle">
          <span class="value">0</span>
        </div>
        <span class="label">секунд</span>
      </div>
    </div>
  </section>
</template>

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

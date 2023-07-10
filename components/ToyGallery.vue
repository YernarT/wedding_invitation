<template>
  <section class="toy-gallery">
    <button class="itisit-btn open-btn">
      <span>Тойдың фотолары</span>
      <img src="~/assets/image/camera.png" alt="Camera" />
    </button>
  </section>
</template>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.toy-gallery {
  width: 100%;
  padding: 0 16px;
  margin-bottom: 220px;
  @include flex($direction: column, $alignItems: center);

  @media screen and (max-width: 800px) {
    margin-bottom: 150px;
  }
  @media screen and (max-width: 576px) {
    margin-bottom: 108px;
  }

  .open-btn {
    width: max-content;
    max-width: 100%;
    padding: 24px 56px;
    outline: none;
    border: none;
    border-radius: 40px;
    background-image: linear-gradient(
      85deg,
      rgba(94, 94, 94, 1) 0%,
      rgba(59, 59, 59, 1) 100%
    );
    cursor: pointer;
    position: relative;

    @include responsiveFont;
    color: #fff;

    img {
      width: 166px;
      transform: translate(-55%, 55%);
      @include positioned($bottom: 0, $left: 0);

      @media screen and (max-width: 576px) {
        width: 108px;
        transform: translate(-40%, 50%);
      }
      @media screen and (max-width: 375px) {
        width: 88px;
        transform: translate(-15%, 45%);
      }
    }

    span {
      white-space: nowrap;
    }
  }
}
</style>

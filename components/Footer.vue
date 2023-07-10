<template>
  <footer class="footer" @click="handleFooterClick">
    <h5>
      <a href="https://www.instagram.com/__yernar/">
        Сайтқа заказ беру үшін басыңыз
      </a>
    </h5>

    <a href="https://itisit.netlify.app/" class="logo">
      <span>Powered by</span>
      <strong>IT IS IT</strong>
    </a>
  </footer>
</template>

<script setup lang="ts">
const handleFooterClick = () => {
  window.location.href = "https://www.instagram.com/__yernar/";
};
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.footer {
  width: 100%;
  padding: 32px 16px;
  background: #000;
  cursor: pointer;

  @include flex($direction: column, $alignItems: center, $gap: 16px);

  @include responsiveFont;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
  }

  .logo {
    user-select: none;
    @include flex($direction: column);

    span {
      @include responsiveFont($sizeLg: 16px, $sizeMd: 16px, $sizeSm: 14px);
      line-height: 1;
    }

    strong {
      @include responsiveFont($sizeLg: 16px, $sizeMd: 16px, $sizeSm: 14px);
      font-weight: bolder;
      line-height: 1;
    }
  }
}
</style>

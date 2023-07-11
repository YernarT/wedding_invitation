<template>
  <Html lang="kk">
    <Head>
      <Meta charset="UTF-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Meta name="theme-color" content="#f7f7f7" />
      <Meta name="color-scheme" content="light" />

      <Meta httpEquiv="x-ua-compatible" content="IE=edge" />
      <Meta httpEquiv="x-ua-compatible" content="IE=7" />

      <Meta name="google" content="notranslate" />
      <Meta name="description" content="Самғар мен Айшат үйлену тойы" />
      <Meta name="keywords" content="Той Бағақ" />
      <Meta name="author" content="https://github.com/YernarT" />

      <Meta property="og:url" content="https://toy-bagak.kz/" />
      <Meta property="og:title" content="Самғар & Айшат" />
      <Meta property="og:description" content="Самғар мен Айшат үйлену тойы" />
      <Meta property="og:image" content="https://img95.699pic.com/element/40207/0056.png_860.png" />
      <Meta property="og:site_name" content="Самғар & Айшат" />
      <Meta property="og:type" content="website" />
      <Meta property="og:locale" content="kk_KZ" />

      <Link rel="icon" href="/favicon.ico" />

      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
      <Link
        href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap"
        rel="stylesheet"
      />

      <Title>Самғар & Айшат</Title>
    </Head>

    <Body>
      <NuxtPage />
      <NuxtSnackbar />
    </Body>
  </Html>
</template>

<script setup />

<style lang="scss">
@import "~/assets/style/mixins.scss";

body {
  @include useScroll;

  @media screen and (max-width: 576px) {
    @include useScroll($type: none);
  }
}
</style>

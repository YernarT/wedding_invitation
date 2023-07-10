<template>
  <section class="are-you-comming">
    <p class="title">Тойға келесіз бе?</p>

    <input
      required
      type="text"
      placeholder="Аты-жөніңізді жазыңыз"
      maxlength="60"
    />

    <ul class="options">
      <li class="option">
        <input type="checkbox" />
        <span>Келемін, бұйырса</span>
      </li>
      <li class="option">
        <input type="checkbox" />
        <span>Өкінішке орай, келе алмаймын</span>
      </li>
      <li class="option">
        <input type="checkbox" />
        <span>Жұбайыммен келемін</span>
      </li>
    </ul>

    <button class="submit">Жауапты жіберу</button>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.are-you-comming {
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  margin-bottom: 220px;
  @include responsiveFont;

  @media screen and (max-width: 800px) {
    margin-bottom: 150px;
  }
  @media screen and (max-width: 576px) {
    margin-bottom: 108px;
  }

  .title {
    margin-bottom: 16px;
  }

  input {
    width: 100%;
    padding: 4px 0;
    margin-bottom: 16px;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--c-secondary);
    background: transparent;

    @include responsiveFont;
    text-align: left;
  }

  .options {
    margin-bottom: 32px;
    @include flex($direction: column, $gap: 8px);

    .option {
      list-style: none;
      cursor: pointer;
      @include flex($alignItems: center, $gap: 8px);

      input {
        margin: 0;
        flex: 0 0 24px;
        width: 24px;
        height: 24px;
        border-radius: 4px;
      }

      span {
        text-align: left;
      }
    }
  }

  .submit {
    width: 100%;
    padding: 24px 0;
    outline: none;
    border: none;
    border-radius: 4px;
    background: var(--c-primary);
    cursor: pointer;
    @include responsiveFont;
    color: #fff;
  }
}
</style>

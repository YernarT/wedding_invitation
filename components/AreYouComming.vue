<template>
  <section class="are-you-comming">
    <p class="title">Тойға келесіз бе?</p>

    <input
      required
      type="text"
      placeholder="Аты-жөніңізді жазыңыз"
      maxlength="60"
      ref="name"
    />

    <ul class="options">
      <li
        v-for="(option, index) in options"
        :key="index"
        class="option"
        @click="handleSelect(index)"
      >
        <input type="checkbox" :checked="option.isSelected" />
        <span>{{ option.text }}</span>
      </li>
    </ul>

    <button class="itisit-btn submit" @click="handleSubmit">
      Жауапты жіберу
    </button>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const snackbar = useSnackbar();

const name = ref<HTMLInputElement>();
const options = ref([
  {
    text: "Келемін, бұйырса",
    isSelected: false,
  },
  {
    text: "Өкінішке орай, келе алмаймын",
    isSelected: false,
  },
  {
    text: "Жұбайыммен келемін",
    isSelected: false,
  },
]);

const decide = computed(() => {
  return options.value.find((option) => option.isSelected);
});

const handleSelect = (index: number) => {
  options.value = options.value.map((option, _index) => ({
    ...option,
    isSelected: _index === index ? !option.isSelected : false,
  }));
};

const handleSubmit = () => {
  if (name.value!.value === "") {
    snackbar.add({
      type: "warning",
      text: "Аты-жөніңізді ұмытпаңыз",
    });
    return;
  }

  if (decide.value?.isSelected === undefined) {
    snackbar.add({
      type: "warning",
      text: "Келесізбе?",
    });
    return;
  }

  console.log("name: ", name.value!.value);
  console.log("decide: ", decide.value!.text);

  // snackbar.add({
  //   type: "success",
  //   text: "Сәтті жіберілді!",
  // });
  snackbar.add({
    type: "info",
    text: "Функция дайын емес, әрекетті кейінірек қайталаңыз",
  });
};
</script>

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
      width: 100%;
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

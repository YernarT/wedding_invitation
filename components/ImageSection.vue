<template>
  <section class="image-section">
    <div class="images">
      <img
        class="banner"
        src="~/assets/image/samgar_aishat_1.jpg"
        alt="Самғар & Айшат"
      />
      <img
        class="bottom-angle"
        src="~/assets/image/angle.png"
        alt="bottom angle"
      />

      <MusicBtn class="music-btn" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.image-section {
  width: 100%;

  .images {
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    position: relative;
    @include flexCenter($direction: column);

    @media screen and (max-width: 800px) {
      .banner {
        aspect-ratio: 24 / 22;
        height: 80dvh;
        animation-name: slideDownMobile;
      }
    }

    @media screen and (max-width: 576px) {
      .banner {
        aspect-ratio: unset;
        object-fit: cover;
      }

      .bottom-angle {
        height: 70px;
      }

      .music-btn {
        right: 16px;
        bottom: -4px;
        animation-name: fadeInMobile;
      }
    }
  }

  .banner {
    width: 100%;
    height: 100dvh;
    object-fit: contain;
    animation: slideDown 1350ms;
  }

  @keyframes slideDown {
    from {
      height: 0;
      animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    }
    to {
      height: 100dvh;
      animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    }
  }

  @keyframes slideDownMobile {
    from {
      height: 0;
      animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    }
    to {
      height: 80dvh;
      animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      right: 50%;
      animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    }
    to {
      opacity: 1;
      right: 16%;
      animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    }
  }

  @keyframes fadeInMobile {
    from {
      opacity: 0;
      right: 50%;
      animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    }
    to {
      opacity: 1;
      right: 16px;
      animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    }
  }

  .bottom-angle {
    width: 100%;
    height: 120px;
    transform: translateY(-100.5%);
    @include positioned($top: 100.5%);
  }

  .music-btn {
    animation: fadeIn 1350ms;
    @include positioned($bottom: calc(120px / 5.5), $right: 16%);
  }
}
</style>

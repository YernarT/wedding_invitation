<template>
  <div class="gallery">
    <swiper grabCursor centeredSlides :modules="modules" :effect="'coverflow'" :slidesPerView="'auto'" :coverflowEffect="{
      rotate: 35,
      stretch: 0,
      depth: 100,
      modifier: 0.85,
      slideShadows: true,
    }">
      <swiper-slide v-for="photoSrc in galleryPhotos" :key="photoSrc">
        <img :src="photoSrc" class="gallery-photo" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import A_1 from "~/assets/image/alim-1.jpeg";
import A_2 from "~/assets/image/alim-2.jpeg";
import A_3 from "~/assets/image/alim-3.jpeg";
import A_4 from "~/assets/image/alim-4.jpeg";
import A_5 from "~/assets/image/alim-5.jpeg";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [EffectCoverflow],
      galleryPhotos: [A_1, A_2, A_3, A_4, A_5],
    };
  },
};
</script>

<style scoped lang="scss">
.gallery {
  width: 100%;
  padding: 0 16px;
  overflow: hidden;
}

.swiper {
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;

    img {
      display: block;
      width: 100%;
      border-radius: 4px;
      object-fit: cover;
    }
  }
}
</style>

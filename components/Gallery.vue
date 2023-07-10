<template>
  <div class="gallery">
    <swiper
      grabCursor
      centeredSlides
      :modules="modules"
      :effect="'coverflow'"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 35,
        stretch: 0,
        depth: 100,
        modifier: 0.85,
        slideShadows: true,
      }"
    >
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

import SA_2 from "~/assets/image/samgar_aishat_2.jpg";
import SA_3 from "~/assets/image/samgar_aishat_3.jpg";
import SA_4 from "~/assets/image/samgar_aishat_4.jpg";
import SA_5 from "~/assets/image/samgar_aishat_5.jpg";
import SA_6 from "~/assets/image/samgar_aishat_6.jpg";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [EffectCoverflow],
      galleryPhotos: [SA_2, SA_3, SA_4, SA_5, SA_6],
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

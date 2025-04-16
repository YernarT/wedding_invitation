<template>
  <section class="info-section">
    <h3 class="welcome">
      Құрметті ағайын-туыс, <br />
      құда-жекжат, ауылдастар, <br />
      көрші-қолаң, дос-жарандар!
    </h3>

    <p class="text">Сіздерді немереміз</p>

    <h1 class="newlyweds">Әлімнің</h1>

    <div class="invite">
      1 жас тұсау кесер тойына <br />
      арналған дастарханымыздың <br />
      қадірлі қонағы болуға шақырамыз!
    </div>

    <div class="mini-block-1">
      <span>Тойдың салтанаты:</span>
      <strong>01.05.2025 жыл</strong>
      <span>Сағат 13:00 де</span>
    </div>

    <img class="flower-1" src="~/assets/image/flower.png" alt="Flower" />

    <div class="mini-block-2">
      <span>Мекенжайы:</span>
      <strong>Сұлтан Сарай мейрамханасы</strong>
      <span>Алматы қаласы</span>
      <a href="https://2gis.kz/almaty/geo/70000001023455019/76.817431,43.205486"
        target="_blank" class="address">
        <img src="~/assets/image/2gis.png" alt="2GIS" />
      </a>
    </div>

    <div class="mini-block-3">
      <span>Той иелері:</span>
      <strong>Тұрабай & Ляйля</strong>
    </div>

    <Gallery />
    <img class="flower-2" src="~/assets/image/flower.png" alt="Flower" />
  </section>
</template>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.info-section {
  width: 100%;
  margin-top: 40px;
  margin-bottom: 140px;
  position: relative;

  .welcome {
    padding: 0 16px;
    margin-bottom: 60px;
    text-transform: uppercase;
    @include responsiveFont($sizeLg: 52px, $sizeMd: 32px, $sizeSm: 24px);

    @media screen and (max-width: 576px) {
      margin-bottom: 32px;
    }
  }

  .text {
    padding: 0 16px;
    margin-bottom: 32px;
    @include responsiveFont();
  }

  .newlyweds {
    padding: 0 16px;
    margin-bottom: 56px;
    font-weight: 400;
    font-size: 96px;
    line-height: 1.31;
    color: var(--c-primary);
    text-align: center;

    @media screen and (max-width: 800px) {
      font-size: 52px;
    }

    @media screen and (max-width: 576px) {
      font-size: 32px;
      margin-bottom: 32px;
    }
  }

  .invite {
    padding: 0 16px;
    margin-bottom: 80px;
    @include responsiveFont();
    line-height: 1.5;

    @media screen and (max-width: 800px) {
      margin-bottom: 56px;
    }

    @media screen and (max-width: 576px) {
      margin-bottom: 32px;
    }
  }

  [class^="mini-block"] {
    padding: 0 16px;
    margin-bottom: 64px;
    @include responsiveFont();
    @include flexCenter($direction: column);

    strong {
      color: var(--c-primary);
      @include responsiveFont($sizeLg: 48px, $sizeMd: 32px, $sizeSm: 24px);
    }

    .address {
      margin-top: 16px;

      img {
        width: 60px;
        height: 60px;
      }
    }

    @media screen and (max-width: 800px) {
      margin-bottom: 56px;
    }

    @media screen and (max-width: 576px) {
      margin-bottom: 32px;
    }
  }

  [class^="flower"] {
    width: 460px;
    height: 460px;
    transform: translate(-140px, 0) rotate(45deg);
    @include positioned($left: 0);

    @media screen and (max-width: 1080px) {
      width: 330px;
      height: 330px;
      transform: translate(-140px, 15%) rotate(45deg);
    }

    @media screen and (max-width: 992px) {
      width: 265px;
      height: 265px;
      transform: translate(-120px, 35%) rotate(45deg);
    }

    @media screen and (max-width: 576px) {
      width: 160px;
      height: 160px;
      transform: translate(-60px, 35%) rotate(45deg);
    }
  }

  .flower-2 {
    left: 100%;
    transform: translate(calc(-100% + 140px), 15%) rotate(-40deg);

    @media screen and (max-width: 992px) {
      transform: translate(calc(-100% + 100px), 15%) rotate(-40deg);
    }

    @media screen and (max-width: 576px) {
      transform: translate(calc(-100% + 56px), 8%) rotate(-40deg);
    }
  }
}
</style>

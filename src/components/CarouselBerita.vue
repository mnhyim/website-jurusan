<template>
  <section>
    <b-carousel
      :indicator="carouselSetting.indicator"
      :indicator-background="carouselSetting.indicatorBackground"
      :indicator-inside="carouselSetting.indicatorInside"
      :indicator-mode="carouselSetting.indicatorMode"
      :indicator-position="carouselSetting.indicatorPosition"
      :indicator-style="carouselSetting.indicatorStyle"
      :pause-info="carouselSetting.pauseInfo">
      <b-carousel-item v-for="item in 9" :key="item.id" class="carousel-item">
        <div class="columns has-background-primary">
          <div class="column is-8">
            <img v-bind:src="require(`@/assets/berita/${berita[item].images}`)"/>
          </div>
          <div class="column is-4">
            <h1 class="title has-text-white is-size-4">{{berita[item].title}}</h1>
            <b-button type="is-primary" icon-left="book" inverted>
              <a v-bind:href="berita[item].link" target="_blank">Baca selengkapnya</a>
            </b-button>
          </div>
        </div>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  props: ["berita"],
  data: function() {
    return {
      carouselSetting: {
        indicator: true,
        indicatorBackground: true,
        indicatorInside: true,
        indicatorMode: "hover",
        indicatorPosition: "is-bottom",
        indicatorStyle: "is-lines",
        pauseInfo: false
      }
    };
  }
};
</script>

<style lang="scss" scoped >
  .columns{
    height: 75vh;
    .column{
      margin: auto;
    }    
    .column:first-of-type{
      padding: 0;
      background-color: #141a25;
      border-right: 16px solid #1d2d47;
    }
  }
  @media screen and (max-device-width: 1024px) {
    .columns{
      height: unset;
      .column.is-4{
        padding: 22px 52px 52px 52px;
      }
    }
  }
</style>
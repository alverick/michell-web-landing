<template>
  <HeroVideo
    class="company flex-grow"
    src="/assets/landing/images/general/DSC_4784.jpg"
    :video="video"
  >
    <img
      v-if="$i18n.locale === 'en'"
      src="/assets/landing/images/general/logo-grupo-michell-en.svg"
      alt=""
      class="logo"
    />
    <img
      v-if="$i18n.locale === 'es'"
      src="/assets/landing/images/general/logo-grupo-michell-es.svg"
      alt=""
      class="logo"
    />
  </HeroVideo>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroVideo from '~/components/HeroVideo.vue'

export default Vue.extend({
  name: 'ContentHome',
  components: { HeroVideo },
  computed: {
    video() {
      return this.$i18n.locale === 'en'
        ? 'https://michell.com.pe/assets/video/2017HD720H264-VIDEO-GRUPO-MICHELL-2017-INGLES_1.mp4'
        : 'https://michell.com.pe/assets/video/2017HD720H264-VIDEO-GRUPO-MICHELL-2017-Espanol.mp4'
    },
  },
})
</script>

<style lang="scss" scoped>
.company {
  background-image: url(~assets/images/DSC_4784.jpg);
  height: 100%;
  .logo {
    filter: brightness(0) invert(1);
    height: 52px;
    margin-bottom: 15px;
  }
}
</style>

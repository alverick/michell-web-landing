<template>
  <div class="logo">
    <img
      v-if="$i18n.locale === 'en'"
      src="/assets/landing/images/general/logo-grupo-michell-en.svg"
      alt=""
    />
    <img
      v-if="$i18n.locale === 'es'"
      src="/assets/landing/images/general/logo-grupo-michell-es.svg"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MichellLogo',
})
</script>

<style lang="scss" scoped>
.logo {
  @apply text-center cursor-pointer flex items-center;
  img {
    @apply w-48;
  }
}
.name {
  font-family: 'Square721 Ex BT';
  color: #878383;
  line-height: 19px;
}
.slogan {
  font-family: 'Swis721 WGL4 BT';
  color: #878383;
  font-size: 13px;
  line-height: 17px;
}
</style>

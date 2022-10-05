<template>
  <footer>
    <div class="social-links">
      <a
        href="https://www.instagram.com/accounts/login/?next=/michell_alpaca/"
        class="instagram"
        target="_blank"
        ><img src="~assets/images/logo-instagram.svg" alt="instagram" />
      </a>
      <a
        href="https://www.facebook.com/MichellAlpaca/"
        class="facebook"
        target="_blank"
        ><img src="~assets/images/social-facebook.svg" alt="facebook" />
      </a>
      <a
        href="https://www.youtube.com/user/grupomichell"
        class="youtube"
        target="_blank"
        ><img src="~assets/images/social-youtube.svg" alt="youtube" />
      </a>
      <a
        href="https://pe.linkedin.com/company/michell-alpaca"
        class="linkedin"
        target="_blank"
        ><img src="~assets/images/social-linkedin.svg" alt="linkedin" />
      </a>
    </div>
    <div class="copyright">Michell y Cia. 2022 All rights reserved.</div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LandingFooter',
})
</script>

<style lang="scss" scoped>
footer {
  @apply px-5 text-right flex flex-row-reverse items-center lg:items-end justify-between lg:justify-center lg:flex-col gap-1 2xl:gap-2;
  height: var(--footer-height);
}
.social-links {
  @apply inline-flex gap-2 lg:gap-4;
}
.copyright {
  @apply text-xs;
}
</style>

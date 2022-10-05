<template>
  <div class="language flex">
    <div
      class="menu-language flex gap-1 relative cursor-pointer"
      :class="menuCssProps"
      aria-expanded="true"
      @focusout="hideMenuLanguage()"
      tabindex="0"
      @click="showMenuLanguage()"
    >
      <span class="icon icon-language block w-5">
        <svg
          id="icon-language"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.725 14.5583L10.6084 12.4667L10.6334 12.4417C12.0834 10.825 13.1167 8.96667 13.725 7.00001H16.1667V5.33334H10.3334V3.66667H8.66671V5.33334H2.83337V6.99167H12.1417C11.5834 8.60001 10.7 10.125 9.50004 11.4583C8.72504 10.6 8.08337 9.65834 7.57504 8.66667H5.90837C6.51671 10.025 7.35004 11.3083 8.39171 12.4667L4.15004 16.65L5.33337 17.8333L9.50004 13.6667L12.0917 16.2583L12.725 14.5583ZM17.4167 10.3333H15.75L12 20.3333H13.6667L14.6 17.8333H18.5584L19.5 20.3333H21.1667L17.4167 10.3333ZM15.2334 16.1667L16.5834 12.5583L17.9334 16.1667H15.2334Z"
          ></path>
        </svg>
      </span>
      <span class="uppercase text">{{ $i18n.localeProperties.code }}</span>
      <span class="overlay">
        <nuxt-link
          v-for="locale in $i18n.locales"
          :key="locale.code"
          class="menu-lang link"
          :to="switchLocalePath(locale.code)"
          >{{ locale.name }}
        </nuxt-link></span
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LanguageMenu',
  data() {
    return {
      showLanguage: false,
    }
  },
  computed: {
    menuCssProps(): any {
      return [{ active: this.showLanguage }]
    },
  },
  methods: {
    showMenuLanguage() {
      this.showLanguage = !this.showLanguage
    },
    hideMenuLanguage() {
      setTimeout(() => {
        this.showLanguage = false
      }, 500)
    },
  },
})
</script>

<style lang="scss" scoped>
.menu-language {
  &.active {
    .overlay {
      display: flex;
    }
  }
}

.language {
  top: rem(22px);
  left: rem(30px);
}

.text {
  font-size: rem(14px);
  @include media('>=lg') {
    font-size: rem(12px);
  }
  @include media('>=2xl') {
    font-size: rem(15px);
  }
}

.overlay {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2  translate-y-3 bg-white border-solid border box-border block pointer-events-auto absolute text-center select-auto w-32 hidden flex-col py-2;
  border-color: #7d7d7d;
  z-index: 10;
  font-size: 13px;

  &:after {
    left: 50%;
    content: '';
    display: block;
    position: absolute;
    top: -9px;
    width: 16px;
    height: 16px;
    background: white;
    border-left: 1px solid #7d7d7d;
    border-top: 1px solid #7d7d7d;
    pointer-events: none;
    transform: rotate(45deg) translate(-25%, 25%);
    transform-origin: 50% 50%;
  }
}
</style>

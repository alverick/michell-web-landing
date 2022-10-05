<template>
  <header>
    <MichellLogo class="flex-none logo" @click.native="goHome()" />
    <div class="welcome-message flex-grow hidden lg:block">
      <strong class="top">{{ $t('home.top') }}</strong>
      <br /><div class="mb-3">{{ $t('home.bottom') }} </div>
      <span>{{ $t('home.center') }}</span>
    </div>
    <LanguageMenu class="parent absolute lg:static language lg:pt-4" />
    <div
      class="logo-90 lg:mx-7 lg:w-14 2xl:w-auto text-right absolute lg:relative"
    >
      <img src="~assets/images/Capa_x0020_2.svg" alt="" />
    </div>
    <div class="nav-button lg:hidden">
      <input
        class="checkbox"
        v-model="showMenuInternal"
        type="checkbox"
        name=""
        id=""
      />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  name: 'LandingHeader',
  model: {
    prop: 'showMenu',
    event: 'showMenu',
  },
  props: {
    showMenu: {
      type: Boolean,
      default: false,
    } as PropOptions<boolean>,
  },
  data() {
    return {
      showLanguage: false,
      showMenuInternal: false,
    }
  },
  methods: {
    goHome() {
      this.$emit('goHome')
    },
    showMenuLanguage() {
      console.log(this.$i18n.localeProperties)
      this.showLanguage = !this.showLanguage
    },
  },
  computed: {
    menuCssProps(): any {
      return [{ active: this.showLanguage }]
    },
  },
  watch: {
    showMenu(newValue) {
      this.showMenuInternal = newValue
    },
    showMenuInternal(newValue) {
      this.$emit('showMenu', newValue)
    },
  },
})
</script>

<style lang="scss" scoped>
header {
  @apply flex pt-16 lg:py-5 2xl:py-12 justify-center;
  height: var(--header-height);
}

.logo {
  @apply w-44 lg:px-4 2xl:px-6 lg:w-60 2xl:w-72 flex-col flex lg:mr-16 xl:mr-20 2xl:mr-24;
}

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

.overlay {
  @apply absolute top-full left-1/2 transform -translate-x-1/2  translate-y-3 bg-white border-solid border box-border block pointer-events-auto absolute text-center select-auto w-32 hidden flex-col py-2;
  border-color: #7d7d7d;
  z-index: 10;

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

.welcome-message {
  font-size: 13px;
  strong {
    @apply font-semibold;
    font-size: 13px;
    @include media('>=2xl') {
      font-size: 16px;
    }

    &.top {
      font-size: 15px;
      @include media('>=2xl') {
        font-size: 16px;
      }
    }
  }
}

.logo-90 {
  right: rem(17px);
  top: rem(22px);
  width: rem(55px);
  @include media('>=sm') {
    width: rem(70px);
  }
  @include media('>=lg') {
    right: auto;
    top: auto;
    //width: auto;
  }
  @include media('>=2xl') {
    width: auto;
  }
}

.navbar .menu-items {
  padding-top: 120px;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
  height: 100vh;
  width: 100%;
  transform: translate(-150%);
  display: flex;
  flex-direction: column;
  margin-left: -40px;
  padding-left: 50px;
  transition: transform 0.5s ease-in-out;
  text-align: center;

  li {
    margin-bottom: 1.2rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
}

.nav-button {
  position: absolute;
  top: rem(67px);
  left: rem(34px);

  .checkbox {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .hamburger-lines {
    height: 24px;
    width: 30px;
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .line {
      display: block;
      height: 4px;
      width: 100%;
      border-radius: 10px;
      background: #878383;
    }

    .line1 {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
    }

    .line2 {
      transition: transform 0.2s ease-in-out;
    }

    .line3 {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
    }
  }

  input[type='checkbox']:checked ~ {
    .menu-items {
      transform: translateX(0);
    }

    .hamburger-lines {
      .line1 {
        transform: rotate(45deg);
      }

      .line2 {
        transform: scaleY(0);
      }

      .line3 {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>

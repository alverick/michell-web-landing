<template>
  <div class="item" :class="[name]" :style="cssVars">
    <a :href="fullUrl" class="link" target="_blank">
      <slot></slot>
      <div class="info">
        <div class="url">
          <span v-html="url"></span
          ><img
            alt="arrow"
            src="/assets/landing/images/general/arrow-undo-circle.svg"
          />
        </div>
      </div>
      <div class="image-container">
        <div class="image-bg"></div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  name: 'ContentItemCertifications',
  props: {
    name: {
      type: String,
      default: '',
    } as PropOptions<string>,
    logo: {
      type: String,
      default: '',
    } as PropOptions<string>,
    category: {
      type: String,
      default: '',
    } as PropOptions<string>,
    textLogo: {
      type: String,
      default: '',
    } as PropOptions<string>,
    text: {
      type: String,
      default: '',
    } as PropOptions<string>,
    url: {
      type: String,
      default: '',
    } as PropOptions<string>,
    image: {
      type: String,
      required: true,
      default: '',
    } as PropOptions<string>,
  },
  computed: {
    fullUrl(): string {
      const urlWithoutHtml = this.url.replace(/(&nbsp;|<([^>]+)>)/gi, '')
      return `https://${urlWithoutHtml}`
    },
    imagePath(): string {
      const srcImage = `/assets/landing/images/general/${this.image}`
      return `url(${srcImage})`
    },
    cssVars(): any {
      return {
        '--image-path': this.imagePath,
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.item {
  @apply h-52 lg:h-full text-center lg:flex-grow;
  background-color: #f3f3f3;

  &.mirasol {
    .info {
      .logo {
        .image {
          @apply w-20 2xl:w-28;
        }
      }
    }
  }

  &.origins {
    .info {
      .logo {
        .image {
          @apply w-20 2xl:w-28;
        }
      }
    }
  }

  .link {
    @apply h-full;
    &:hover {
      .image-bg {
        @apply transition-all filter brightness-50 transform scale-110;
      }
    }
  }

  .info {
    @apply lg:flex lg:flex-col items-center p-6 lg:p-0 lg:pb-6 2xl:p-8 grid grid-cols-2 grid-rows-3 gap-4 lg:gap-0;
    color: #878383;
    font-size: rem(14px);
    @include media('>=lg') {
      //height: 52%;
      font-size: rem(13px);
    }
    @include media('>=2xl') {
      //height: 50%;
      font-size: rem(14px);
    }

    .url {
      @apply col-span-2 flex gap-2 font-medium justify-center;
      strong {
        @apply font-bold;
      }
    }

    .text {
      @apply lg:w-72;
    }

    .logo {
      @apply row-span-2 relative flex items-end;
      @include media('>=lg') {
        height: 85px;
      }
      @include media('>=2xl') {
        height: 105px;
      }

      .image {
        @apply w-24 2xl:w-32;
      }

      span {
        @apply font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
      }
    }
  }

  .image-container {
    @apply overflow-hidden hidden lg:block;
    height: 50%;
    @include media('>=lg') {
      height: 48%;
    }
    @include media('>=2xl') {
      height: 50%;
    }
  }

  .image-bg {
    @apply h-full bg-cover bg-center origin-center;
    background-image: var(--image-path);
  }
}
</style>

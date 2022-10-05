<template>
  <div class="item" :class="[name, { full }]" :style="cssVars">
    <a :href="fullUrl" class="link" target="_blank">
      <div class="info">
        <div class="logo">
          <img
            v-if="logo"
            :src="`/assets/landing/images/general/${logo}`"
            :alt="name"
            class="image"
          />
          <span>{{ textLogo }}</span>
        </div>
        <div
          v-if="category !== ''"
          class="category font-bold lg:pt-2 xl:pt-3 2xl:pt-8"
        >
          {{ category }}
        </div>
        <div
          v-if="text !== ''"
          class="text font-medium pt-2 xl:pt-4 2xl:pt-5 flex-grow"
        >
          {{ text }}
        </div>
        <div v-if="url !== ''" class="url lg:mt-3 2xl:mb-1 2xl:mt-1">
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
  name: 'ContentItem',
  props: {
    name: {
      type: String,
      default: '',
    } as PropOptions<string>,
    logo: {
      type: String,
      default: '',
    } as PropOptions<string>,
    full: {
      type: Boolean,
      default: false,
    } as PropOptions<boolean>,
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
    link: {
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
      if (this.link !== '') {
        return this.link
      }
      const urlWithoutHtml = this.url.replace(/(&nbsp;|<([^>]+)>)/gi, '')
      return `https://${urlWithoutHtml}`
    },
    imagePath(): string {
      const srcImage = this.image.includes('http')
        ? this.image
        : `/assets/landing/images/general/${this.image}`
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
  @apply h-60 lg:h-full text-center lg:flex-grow;
  background-color: #f3f3f3;
  flex-basis: 100%;

  &.michell {
    .info {
      .logo {
        .image {
          @apply lg:w-16 2xl:w-28;
        }
      }
    }
  }

  &.blog {
    .info {
      .logo {
        align-items: center;

        .image {
          @apply lg:w-16 2xl:w-28;
        }
      }
    }
  }

  &.mirasol {
    .info {
      .logo {
        .image {
          @apply lg:w-14 2xl:w-28;
        }
      }
    }
  }

  &.origins {
    .info {
      .text {
        @apply lg:w-80;
      }

      .logo {
        .image {
          @apply lg:w-16 2xl:w-28;
        }
      }
    }
  }

  &.full {
    position: relative;

    .info {
      padding: 0;
      height: 0;
      position: absolute;
      z-index: 1;
      left: 50%;
      transform: translateX(-50%);
      top: 20px;
    }

    .image-container {
      height: 100%;
      min-height: 300px;
      display: block;
      @include media('>=lg') {
        min-height: 0;
      }

      .image-bg {
        min-height: 300px;
      }
    }
  }

  &.blog {
    //width: 50%;
  }

  .link {
    @apply h-full;
    &:hover {
      .image-bg {
        @apply transform scale-110;
      }
    }
  }

  .info {
    @apply lg:flex lg:flex-col items-center p-4 2xl:px-6 grid grid-cols-2 grid-rows-3 gap-4 lg:gap-0;
    color: #878383;
    height: 100%;
    font-size: rem(12px);
    @include media('>=lg') {
      height: 52%;
      font-size: rem(13px);
    }
    @include media('>=xl') {
    }
    @include media('>=2xl') {
      height: 50%;
      font-size: rem(14px);
    }

    .url {
      @apply col-span-2 flex gap-2 font-medium;
      strong {
        @apply font-bold;
      }
    }

    .text {
      @apply lg:w-56 xl:w-64 2xl:w-72;
      @include media('>=lg') {
        font-size: rem(11px);
        min-height: 59px;
      }
      @include media('>=xl') {
        font-size: rem(12px);
        min-height: 70px;
      }
      @include media('>=2xl') {
        font-size: rem(13px);
      }
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
        @apply w-24 lg:w-20 2xl:w-32;
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
    @apply h-full bg-cover bg-center origin-center transition-all duration-500 ease-in-out;
    background-image: var(--image-path);
  }
}
</style>

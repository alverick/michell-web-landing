<template>
  <a
    href="javascript:void(0)"
    class="w-full lg:w-60 2xl:w-72 h-16 lg:h-12 2xl:h-20 flex items-center pl-12 2xl:pl-20 lg:mb-3 2xl:mb-4 transition-all duration-500"
    :class="{ active: active }"
    ><span class="text"
      >{{ position + 1 }}. {{ $t('menu.' + name.toLowerCase()) }}</span
    >
    <span class="arrow-right transition-all duration-500"></span
  ></a>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  name: 'SidebarItem',
  props: {
    name: {
      type: String,
      required: true,
    } as PropOptions<string>,
    position: {
      type: Number,
      required: true,
    } as PropOptions<number>,
    active: {
      type: Boolean,
      default: false,
    } as PropOptions<boolean>,
  },
})
</script>

<style lang="scss" scoped>
a {
  @apply font-semibold relative;
  font-size: rem(13px);
  background-image: url(/assets/landing/images/general/arrow-right.svg);
  background-repeat: no-repeat;
  background-position: center right;

  @include media('>=lg') {
    background-image: none;
  }
  @include media('>=2xl') {
    font-size: rem(16px);
  }

  span.text {
    @apply transition-all relative transform;
  }

  &:hover {
    span.text {
      @apply translate-x-3;
    }
  }

  &.active {
    @include media('>=sm') {
      background-color: #ebebeb;
    }

    span.text {
      @apply translate-x-0;
    }

    .arrow-right {
      @include media('>=sm') {
        border-left-color: #ebebeb;
        transform: translateX(100%);
      }
    }
  }

  .arrow-right {
    width: 0;
    height: 0;
    border-top: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    border-left: 1rem solid transparent;
    position: absolute;
    right: 0;
    @apply translate-x-0;
    @include media('>=2xl') {
      border-top: 1rem solid transparent;
      border-bottom: 1rem solid transparent;
      border-left: 1.75rem solid transparent;
    }
  }
}
</style>

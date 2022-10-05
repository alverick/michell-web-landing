<template>
  <nav class="px-14 lg:px-0">
    <div class="welcome-message flex flex-col justify-center flex-grow text-xs lg:hidden mb-3">
      <strong class="top">{{ $t('home.top') }}</strong>
      <br />{{ $t('home.bottom') }} <br /><br />
      <strong>{{ $t('home.center') }}</strong>
    </div>
    <SidebarItem
      v-for="(item, idx) in items"
      :name="item.name"
      :position="idx"
      :active="item.active"
      :key="idx"
      @click.native="selectItem(idx)"
    />
    <div class="line"></div>
    <transition name="main">
      <div class="position" v-if="position !== 0">{{ position }}</div>
    </transition>
  </nav>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import SidebarItem from '~/components/landing/SidebarItem.vue'

export default Vue.extend({
  name: 'LandingSidebar',
  components: { SidebarItem },
  model: {
    prop: 'position',
    event: 'selected',
  },
  props: {
    position: {
      type: Number,
      default: 0,
    } as PropOptions<number>,
  },
  data() {
    return {
      items: [
        { name: 'Products', active: false },
        { name: 'Brands', active: false },
        { name: 'Experiences', active: false },
        { name: 'Our Community', active: false },
        { name: 'Sustainability', active: false },
        { name: 'Certifications', active: false },
        { name: 'News', active: false },
      ],
    }
  },
  methods: {
    selectItem(pos: any) {
      console.log('-> pos', pos)
      this.$emit('selectedName', this.items[pos].name)
      this.$emit('selected', pos + 1)
      this.items.forEach((item, index) => (item.active = index === pos))
    },
  },
  watch: {
    position(newValue) {
      if (newValue === 0) {
        this.items.forEach((item) => (item.active = false))
      }
    },
  },
})
</script>

<style lang="scss" scoped>
nav {
  @apply w-full lg:w-60 2xl:w-72 flex-col flex lg:mr-16 xl:mr-20 2xl:mr-24 absolute lg:relative transition-all;
  height: calc(100vh - var(--header-height) - var(--footer-height));
  transform: translateX(-100%);
  background-color: #fff;
  @include media('>=sm') {
    transform: translateX(0);
  }
  &.show {
    transform: translateX(0);
  }

  .line {
    @apply absolute top-0 right-0 bottom-0 hidden lg:block;
    border-right: 2px solid rgba(135, 131, 131, 0.3);
  }

  a {
    border-top: 1px solid #bababa;
    &:nth-child(2) {
      border-top: none;
    }
    @include media('>=lg') {
      border-top: none;
    }
  }
}

.position {
  opacity: 0.25;
  color: #7a7a7a;
  @apply font-medium lg:absolute transform -translate-x-1/2;
  @include media('>=lg') {
    right: -3.5rem;
    font-size: 2.8rem;
    top: -14px;
  }
  @include media('>=xl') {
    right: -5rem;
    top: 0;
    font-size: 3rem;
  }
}
.main-enter-active,
.main-leave-active {
  transition: opacity 0.5s;
}

.main-enter,
.main-leave-active {
  opacity: 0;
}
</style>

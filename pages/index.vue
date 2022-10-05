<template>
  <div class="wrapper">
    <LandingHeader v-model="isVisibleMenu" @goHome="goHome" />
    <div class="content flex flex-row-reverse">
      <main>
        <transition name="main">
          <component
            :is="main"
            v-bind:companyProps="componentProps.companyProps"
            v-bind:banner="componentProps.banner"
          />
        </transition>
      </main>
      <landing-sidebar
        v-model="position"
        @selectedName="selectContent"
        :class="[{ show: isVisibleMenu }]"
      />
    </div>
    <LandingFooter />
    <modal
      name="news"
      classes="news-modal"
      class="modal"
      :width="435"
      :height="474"
    >
      <span class="close" @click="close()"></span>
      <div class="container-modal">
        <a :href="banner.link" target="_blank"
          ><img
            :src="'https://dev.michell.com.pe/storage/' + modalPhoto"
            alt=""
          />
        </a>
      </div>
    </modal>
    <a class="modal-button" @click="openModal">Last News</a>
  </div>
</template>

<script lang="ts">
import { isEmpty, pathOr } from 'ramda'
import Vue from 'vue'

interface bannerType {
  updated_at: string
  name: string
  link: string
  logo: null
  photo: string
  created_at: string
  id: number
  deleted_at: null
  status: number
}

export default Vue.extend({
  name: 'IndexPage',
  async asyncData({ $axios }) {
    const banner: bannerType = await $axios.$get(
      'https://dev.michell.com.pe/api/landing'
    )
    return { banner }
  },
  data() {
    return {
      banner: {} as any,
      selected: 'ContentHome',
      position: 0,
      componentProps: {} as any,
      isVisibleMenu: false,
      main: () => import(`@/components/landing/ContentHome.vue`),
    }
  },
  computed: {
    groups() {
      const modelGroups = {
        Products: {
          component: 'ContentGeneric',
          companies: ['michell', 'mhf', 'michellRugs'],
        },
        Brands: {
          component: 'ContentGeneric',
          companies: ['solAlpaca', 'patapampa', 'michellOutlet'],
        },
        Experiences: {
          component: 'ContentGeneric',
          companies: ['mundoAlpaca', 'amano'],
        },
        'Our Community': {
          component: 'ContentGeneric',
          companies: ['mirasol', 'arteMichell', 'michellApu'],
        },
        Sustainability: {
          component: 'ContentGeneric',
          companies: ['origins'],
        },
        Certifications: {
          component: 'ContentCertifications',
        },
        News: {
          component: 'ContentGeneric',
          companies: ['blog'],
        },
      }
      if (!isEmpty(this.banner)) {
        modelGroups.News.companies.unshift('banner')
      }
      return modelGroups
    },
    modalPhoto(): string {
      if (isEmpty(this.banner)) {
        return ''
      }
      return isEmpty(this.banner.photo_modal)
        ? this.banner.photo
        : this.banner.photo_modal
    },
  },
  watch: {
    '$viewport.breakpoint'(newValue) {
      console.log('-> newValue', newValue, this.$viewport.isGreaterThan('md'))
    },
    showMenu(newValue) {
      this.isVisibleMenu = newValue
    },
  },
  mounted() {
    this.openModal()
  },
  methods: {
    openModal() {
      this.$modal.show('news')
    },
    close() {
      this.$modal.hide('news')
    },
    selectContent(name: string) {
      console.log('-> name', name)
      this.isVisibleMenu = false
      if (name !== this.selected) {
        this.selected = name
        const componentName = pathOr('', ['groups', name, 'component'], this)
        this.componentProps = {
          companyProps: pathOr({}, ['groups', name, 'companies'], this),
        }
        if (!isEmpty(this.banner)) {
          this.componentProps.banner = this.banner
        }
        this.main = () => import(`@/components/landing/${componentName}.vue`)
      }
    },
    goHome() {
      this.isVisibleMenu = false
      if (this.selected !== 'ContentHome') {
        this.selected = 'ContentHome'
        this.position = 0
        this.main = () => import(`@/components/landing/ContentHome.vue`)
      }
    },
    showMenu(show: boolean) {
      this.isVisibleMenu = show
      console.log('-> show', show, this.$viewport.breakpoint)
    },
  },
})
</script>
<style lang="scss" scoped>
main {
  @apply flex-grow;
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
  @include media('>=sm') {
    position: relative;
    height: calc(100vh - var(--header-height) - var(--footer-height));
    overflow: hidden;
  }
}

.main-enter-active,
.main-leave-active {
  transition: opacity 0.4s;
}

.main-enter,
.main-leave-active {
  opacity: 0;
}

.modal-button {
  bottom: 60px;
  left: 0px;
  position: fixed;
  width: 154px;
  height: 48px;
  background-color: #70a33f;
  opacity: 1;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.close {
  background-image: url(/assets/landing/images/general/x-circle.svg);
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 12px;
  top: 9px;
}

.container-modal {
  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 30px;
    width: 88px;
  }
}
</style>

<template>
  <div class="items">
    <ContentItem
      v-for="(company, index) in companyProps"
      :key="index"
      :name="company"
      :full="companiesData[company].full"
      :logo="companiesData[company].logo"
      :text-logo="companiesData[company].textLogo"
      :category="
        $te('companies.' + company + '.category')
          ? $t('companies.' + company + '.category')
          : ''
      "
      :text="
        $te('companies.' + company + '.text')
          ? $t('companies.' + company + '.text')
          : ''
      "
      :url="companiesData[company].url"
      :link="companiesData[company].link"
      :image="companiesData[company].image"
      class="h-full"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { isEmpty } from 'ramda'
import { companies } from '~/app/data/companies'
import ContentItem from '~/components/landing/ContentItem.vue'

export default Vue.extend({
  name: 'ContentGeneric',
  components: { ContentItem },
  props: {
    companyProps: {
      type: Array,
      default: () => [],
    } as PropOptions<string[]>,
    banner: {
      type: Object,
      default: () => {},
    } as PropOptions<any>,
  },
  computed: {
    companiesData() {
      if (!isEmpty(this.banner)) {
        companies.banner = {
          full: true,
          link: this.banner.link,
          image: 'https://dev.michell.com.pe/storage/' + this.banner.photo,
        }
      }
      return companies
    },
  },
})
</script>

<style lang="scss" scoped>
.items {
  @apply relative lg:h-full flex gap-5 flex-col lg:flex-row;
  .item {
    background-color: #f3f3f3;
  }
}
</style>

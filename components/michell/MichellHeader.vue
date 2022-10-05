<template>
  <div>
    <h1>header {{ time }}</h1>
    <ul class="list-disc list-inside">
      <li>
        <NuxtLink :to="localePath('/michell')">Home page</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/michell/collections')"
          >Collections</NuxtLink
        >
        <ul class="ml-3 list-disc list-inside">
          <li>
            <NuxtLink :to="localePath('/michell/collections/top-collections')"
              >Top collections
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/michell/collections/machine-knitting')"
              >Machine Knitting
            </NuxtLink>
            <ul class="ml-3 list-disc list-inside">
              <li>
                <NuxtLink
                  :to="
                    localePath(
                      '/michell/collections/machine-knitting/prestige-line'
                    )
                  "
                  >PrestigeLinePage</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :to="
                    localePath(
                      '/michell/collections/machine-knitting/terra-line'
                    )
                  "
                  >TerraLinePage
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="
                    localePath(
                      '/michell/collections/machine-knitting/cloud-line'
                    )
                  "
                  >CloudLinePage
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="
                    localePath(
                      '/michell/collections/machine-knitting/organic-eco-&-ras-line'
                    )
                  "
                  >OrganicEcoRasLinePage</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :to="
                    localePath(
                      '/michell/collections/machine-knitting/colour-trend-&-natural-tones'
                    )
                  "
                  >ColourTrendNaturalTonesPage</NuxtLink
                >
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const time = new Date().getTime()

export default Vue.extend({
  name: 'MichellHeader',
  data() {
    return {
      title: 'Terra Line',
      description: 'Terra Line is a collection of machine knitting patterns.',
      image:
        'https://cdn.shopify.com/s/files/1/0067/9775/4433/files/terra-line-collection-hero.jpg?v=1533003633',
      imageAlt: 'Terra Line',
      time,
      imageCredit: 'Photo by Michael K. on Unsplash',
    }
  },
})
</script>

<style lang="scss" scoped>
li {
}
</style>

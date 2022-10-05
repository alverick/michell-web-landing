<template>
  <div class="items flex gap-5">
    <ContentItemCertifications :url="$t('link')" image="DSC_8346@2x.jpg">
      <div class="licences-certifications">
        <div class="licenses line">
          <div class="title">{{ $t('certifications.licenses') }}</div>
          <div class="items">
            <div class="item">
              <div class="logo">
                <img src="/assets/landing/images/certifications/Capa_x0020_1-2.svg" alt="" />
              </div>
            </div>
            <div class="item">
              <div class="logo">
                <img src="/assets/landing/images/certifications/Fondo.svg" alt="" />
              </div>
              <div class="text">Alpaca Origin Mark</div>
              <div class="sub">100% Alpaca</div>
            </div>
            <div class="item">
              <span class="logo"
                ><img src="/assets/landing/images/certifications/Fondo-1.svg" alt=""
              /></span>
              <div class="text">Alpaca Blend Mark</div>
              <div class="sub">Blends</div>
            </div>
          </div>
        </div>
        <div class="certifications">
          <div class="title">{{ $t('certifications.certifications') }}</div>
          <div class="items">
            <div class="item">
              <span class="logo"
                ><img src="/assets/landing/images/certifications/Layer_x0020_1-3.svg" alt=""
              /></span>
              <div class="text">Certified by Control Union, CU 847906</div>
            </div>
            <div class="item">
              <div class="logo">
                <img src="/assets/landing/images/certifications/Layer_x0020_1-5.svg" alt="" />
              </div>
              <div class="text">Certified by Control Union, CU 847906</div>
            </div>
            <div class="item">
              <div class="logo">
                <img src="/assets/landing/images/certifications/GOTS-WEB.png" alt="" />
              </div>
              <div class="text">Certified by Control Union, CU 847906</div>
            </div>
            <div class="item">
              <span class="logo"
                ><img src="/assets/landing/images/certifications/Layer_x0020_1-2.svg" alt=""
              /></span>
              <div class="text">Certified by Control Union, CU 847906</div>
            </div>
            <div class="item">
              <span class="logo"
                ><img src="/assets/landing/images/certifications/Layer_x0020_1-1.svg" alt=""
              /></span>
              <div class="text">Certified by Control Union, CU 847906</div>
            </div>
            <div class="item">
              <div class="logo">
                <img
                  src="/assets/landing/images/certifications/usda-organic-logo-vector.svg"
                  alt=""
                />
              </div>
              <div class="text">Certified by Control Union, CU 847906</div>
            </div>
          </div>
          <div class="items">
            <div class="item">
              <div class="logo">
                <img src="/assets/landing/images/certifications/Layer_x0020_1.svg" alt="" />
              </div>
              <div class="text">Spun by Michell</div>
            </div>
            <div class="item horizontal-1">
              <div class="logo">
                <img src="/assets/landing/images/certifications/Layer_x0020_1-4.svg" alt="" />
              </div>
            </div>
            <div class="item">
              <div class="logo">
                <img src="/assets/landing/images/certifications/Capa_x0020_1.svg" alt="" />
              </div>
            </div>
            <div class="item horizontal-2">
              <div class="logo">
                <img src="/assets/landing/images/certifications/Capa_x0020_1-1.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentItemCertifications>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContentItemCertifications from '~/components/landing/ContentItemCertifications.vue'

export default Vue.extend({
  name: 'ContentCertifications',
  components: { ContentItemCertifications },
  i18n: {
    // `i18n` option, setup locale info for component
    messages: {
      es: {
        link: '<strong>michell</strong>.com.pe/michell/es/certificaciones',
        certifications: {
          name: 'Certificaciones',
          subName: '& Licencias',
          licenses: 'Licencias',
          certifications: 'Certificaciones',
        },
      },
      en: {
        link: '<strong>michell</strong>.com.pe/michell/en/certifications',
        certifications: {
          name: 'Certifications',
          subName: '& Licenses',
          licenses: 'Licenses',
          certifications: 'Certifications',
        },
      },
    },
  },
})
</script>

<style lang="scss" scoped>
@import '../../assets/scss/certifications';
.items {
  position: relative;
  height: 100%;
  .item {
    height: 100%;
    //background-color: #f3f3f3;
  }
}
</style>

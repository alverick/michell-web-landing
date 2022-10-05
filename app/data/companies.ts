export interface CompanyItem {
  image: string
  logo?: string
  url?: string
  link?: string
  full?: boolean
  textLogo?: string
  linkTranslate?: boolean
}
export interface Companies {
  [key: string]: CompanyItem
}

export const companies: Companies = {
  michell: {
    logo: 'Capa_x0020_1.svg',
    url: '<strong>michell</strong>.com.pe/michell',
    image: 'DSC_2895@2x.jpg',
  },
  mhf: {
    logo: 'Layer_x0020_1.svg',
    url: '<strong>mfhknits</strong>.com.pe',
    image: 'IMG_3003@2x.jpg',
  },
  michellRugs: {
    logo: 'Layer_x0020_1-1.svg',
    url: '<strong>mfhknits</strong>.com.pe',
    image: '2012-R&C@2x.jpg',
  },
  solAlpaca: {
    logo: 'Layer-brands_x0020_1.svg',
    url: '<strong>solalpaca</strong>.pe',
    image: 'tributo6648@2x.jpg',
  },
  patapampa: {
    logo: 'logo.svg',
    url: '<strong>patapampa</strong>.com',
    image: '_S4A4326@2x.jpg',
  },
  michellOutlet: {
    logo: 'Layer-brands_x0020_1-1.svg',
    url: '<strong>mfhknits</strong>.com.pe',
    image: 'IMG_2438_BN_RGB@2x.jpg',
  },
  mundoAlpaca: {
    logo: 'Capa-exp_x0020_1.svg',
    url: '<strong>mundoalpaca</strong>.com.pe',
    image: 'Sol-01@2x.jpg',
  },
  amano: {
    logo: 'Layer-exp_x0020_1.svg',
    url: '<strong>museoamano</strong>.org',
    image: '002@2x.jpg',
  },
  mirasol: {
    logo: 'Capa-com_x0020_1.svg',
    url: '<strong>mirasol</strong>.com.pe',
    image: 'JMM_0950@2x.jpg',
  },
  arteMichell: {
    logo: 'Capa-com_x0020_1-1.svg',
    url: '<strong>artemichell</strong>.com',
    image: 'DSC_3644TAPA@2x.jpg',
  },
  michellApu: {
    logo: 'FibraEmprendedora.svg',
    url: '<strong>michell</strong>.com.pe/apu',
    image: 'fibra-13@2x.jpg',
    linkTranslate: true,
  },
  origins: {
    logo: 'Capa-sus_x0020_1.svg',
    url: '<strong>michell</strong>.com.pe/michell/origins',
    image: 'DSC_4784@2x.jpg',
  },
  banner: {
    full: true,
    link: 'https://youtu.be/apQc9FCa-3M',
    image:
      'https://dev.michell.com.pe/storage/banners/September2022/dl3vIm15J70VzfDj72k6.jpg',
  },
  blog: {
    logo: 'ios-chatbubble.svg',
    textLogo: 'BLOG',
    url: '<strong>michell</strong>.com.pe/blog',
    image: 'DSC_8069@2x.jpg',
  },
}


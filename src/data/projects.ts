import { Project } from "@/types/Project"
import IconParkOutlineBrowser from '~icons/icon-park-outline/browser'
import MaterialSymbolsLightPhoneAndroidRounded from '~icons/material-symbols-light/phone-android-rounded'
const projects = [
  {
    title: 'Sayurt',
    description: 'Healthy living starts with vegetables!',
    link: 'https://sayurt.vercel.app/',
    icon: IconParkOutlineBrowser,
    stack: ['Vue', 'Tailwind', 'Typescript', 'Nuxt']
  },
  {
    title: 'Cetakuy',
    description: 'Print perfection, delivered to your door.',
    link: 'https://cetakuy-nuxt.vercel.app/',
    icon: IconParkOutlineBrowser,
    stack: ['Vue', 'Tailwind', 'Typescript', 'Nuxt']
  },
  {
    title: 'CoE Smart Tourism and Hospitality',
    description: 'Escape the ordinary, indulge in luxury.',
    link: 'https://ra-smarttourism.vercel.app/',
    icon: IconParkOutlineBrowser,
    stack: ['Vue', 'Tailwind', 'Typescript', 'Nuxt']
  },
  {
    title: 'Desa Wisata Margamulya',
    description: 'Website Desa Wisata Margamulya',
    link: 'https://desamargamulya.com/',
    icon: IconParkOutlineBrowser,
    stack: ['Vue', 'Tailwind', 'Typescript', 'Laravel', 'PHP']
  },
  {
    title: 'Indonesian Housekeeper Association (IHKA) Jawa Barat',
    description: 'Website IHKA Jawa Barat',
    link: 'https://ihkajabar.com/',
    icon: IconParkOutlineBrowser,
    stack: ['Vue', 'Tailwind', 'Typescript', 'Hono']
  },
  {
    title: 'Amasonik',
    description: 'Electronic Waste Management Application',
    link: 'https://github.com/omanfathurrahman/ewaste',
    icon: MaterialSymbolsLightPhoneAndroidRounded,
    stack: ['Flutter', 'Supabase']
  },
  {
    title: 'Save Me',
    description: 'Application for dealing with sexual crimes in schools',
    link: 'https://github.com/omanfathurrahman/save_me',
    icon: MaterialSymbolsLightPhoneAndroidRounded,
    stack: ['Flutter', 'Laravel']
  },
  {
    title: 'Pojokoding',
    description: 'Text-based programming learning application',
    link: 'https://pojokoding.com',
    icon: MaterialSymbolsLightPhoneAndroidRounded,
    stack: ['Nuxt', 'Tailwind', 'Typescript', 'Firebase']
  },
] satisfies Project[]


export { projects }
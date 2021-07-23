import en from '../locales/en/app'
import tw from '../locales/zh-TW/app'

const locale = localStorage.getItem('locale') || 'tw'

import { createI18n } from 'vue-i18n/index'



export default createI18n({
  legacy: false,
  locale,
  globalInjection: true,
  messages: { en, tw }
})
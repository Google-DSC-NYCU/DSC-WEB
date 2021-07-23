<template>
  <button @click="switchLang">{{ nextLocale }}</button>
</template>

<script>
import { defineComponent, computed } from 'vue'

import { useI18n } from 'vue-i18n/index'

import ts from '@/i18n'

const useNextLocale = () => {
      const { availableLocales, locale } = useI18n()
      return computed(() => {
        const currentIndex = availableLocales.indexOf(locale.value)
        const nextIndex = (currentIndex + 1) % availableLocales.length
        return availableLocales[nextIndex]
      })
    }

export default defineComponent({
  name: 'LangSwitch',
  setup () {

    let nextLocale = useNextLocale()
    let switchLang = ()=>{
      ts.global.locale.value = (ts.global.locale.value=='tw')?'en':'tw';
      nextLocale = (ts.global.locale.value=='tw')?'en':'tw'
    }
    return {
      nextLocale,
      switchLang
    }
  }
})
</script>

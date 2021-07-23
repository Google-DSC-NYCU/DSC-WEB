<template>
  <nav id="nav">
    <div class="nav__left">
    </div>
    <div class="nav__right">
      <router-link to="/">{{ t('__home') }}</router-link>
      <router-link to="/about">{{ t('__about') }}</router-link>
      <router-link to="/">{{ t('__events') }}</router-link>
      <LangSwitch></LangSwitch>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n/index'
import LangSwitch from './LangSwitch.vue'

export default defineComponent({
  components:{
    LangSwitch
  },
  setup() {
    const { t } = useI18n()
    return{
      t
    }
  },
})
</script>

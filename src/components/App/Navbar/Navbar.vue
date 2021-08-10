<template>
  <nav id="nav">
    <div class="nav__container">
      <div class="nav__left">
        <img :src="logo" width="260">
        <p class="nav__location">NYCU</p>
      </div>
      <div class="nav__right">
        <router-link to="/">{{ t('__home') }}</router-link>
        <router-link to="/about">{{ t('__about') }}</router-link>
        <router-link to="/events">{{ t('__events') }}</router-link>
        <LangSwitch></LangSwitch>
        </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n/index'
import LangSwitch from './LangSwitch.vue'
import logo from '@/assets/logo.png'

export default defineComponent({
  components:{
    LangSwitch
  },
  setup() {
    const { t } = useI18n()
    return{
      t,
      logo
    }
  },
})
</script>

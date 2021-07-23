<template>
  <footer id="footer">
    <div class="footer__left">
      <b>{{t('__dsc')}}</b>
      <br>
      <b class="location">@ {{t('__location')}}</b>
    </div>
    <div class="footer__right">
      <img :src="dsc" width="200">
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n/index'
import dsc from '@/assets/dsc.svg'

export default defineComponent({
  setup() {
    const { t } = useI18n();
    return{
      dsc,
      t
    }
  },
})
</script>

<template>
    <Navbar></Navbar>
    <router-view></router-view>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/App/Navbar/Navbar.vue'

import '@/assets/scss/app.scss'

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  },
  setup(){
    const route = useRoute()
  }
})

</script>

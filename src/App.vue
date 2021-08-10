<template>
    <Navbar></Navbar>
    <router-view></router-view>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/App/Navbar/Navbar.vue'
// import Footer from '@/components/App/Footer/Footer.vue'

import '@/assets/scss/app.scss'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    // Footer
  },
  setup(){
    const route = useRoute()
  }
})

</script>

<template>
  <main id="main">
  </main>
  <main id="main_xs">
    <section>
      Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
    </section>
    <img :src="Background" alt="">
  </main>
  <Footer></Footer>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import Footer from '@/components/App/Footer/Footer.vue'
import Background from '@/assets/background_xs.jpg'

export default defineComponent({
  components: {
    Footer
  },
  setup(){
    // const state = reactive({ count: 0 })
    return{
      Background
    }
  }
})

</script>


<style lang="scss" scoped>

  #footer {
    position: fixed;
    bottom: 0;
    left: 10vw;
  }
  </style>

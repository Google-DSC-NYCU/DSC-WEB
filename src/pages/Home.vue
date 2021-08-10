<template>
  <!-- <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button> -->
  <main id="main">
  </main>
  <Footer></Footer>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import Footer from '@/components/App/Footer/Footer.vue'

export default defineComponent({
  components: {
    Footer
  },
  setup(){
    const state = reactive({ count: 0 })
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

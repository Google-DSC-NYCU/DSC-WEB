<template>
  <div v-for="data in post" :key="data.id">
    <b>{{data.title}}</b>
    <a :href="data.content">Link</a>
  </div>
  <Footer></Footer>
</template>
<script>
import { defineComponent } from 'vue'
import Footer from '@/components/App/Footer/Footer.vue'
import post from '@/assets/json/post.json';

export default defineComponent({
  components: {
    Footer
  },
  setup() {
    console.log(post)
    return{
      post
    }
  },
})
</script>

<style lang="scss" scoped>

  #footer {
    position: fixed;
    bottom: 0;
    left: 10vw;
  }
  </style>
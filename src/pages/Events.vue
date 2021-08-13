<template>
  <main>
    <div class="event__container">
      <div class="event__card" v-for="data in post" :key="data.id">
        <img :src="data.img" alt="">
        <b>{{data.title}}</b>
        <a :href="data.content">Link</a>
      </div>
    </div>
  </main>
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
    // console.log(post)
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
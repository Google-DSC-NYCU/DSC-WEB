<template>
  <main id="about">
    <div class="about__container">
      <div v-for="data in memberData" :key="data.id" class="containter__card">
        <b>{{data.name}}</b>
        <p>{{data.title}}</p>
        <div class="about__link">
          <img :src="data.img" alt="">
          <a :href="data.github">
            <component :is="IconGitHub"></component>
          </a>
          <a :href="data.facebook">
            <component :is="IconFacebook"></component>
          </a>
          <a :href="data.ig">
            <component :is="IconInstagram"></component>
          </a>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>
<script>
import { defineComponent, reactive } from 'vue'
import IconGitHub from 'virtual:vite-icons/fa-brands/github'
import IconFacebook from 'virtual:vite-icons/fa-brands/facebook'
import IconInstagram from 'virtual:vite-icons/fa-brands/instagram'
import temp from '@/assets/temp.jpg'
import sunny from '@/assets/image/sunny.png'
import ccw from '@/assets/image/ccw.png'
import ian from '@/assets/image/ian.jpg'
import aaron from '@/assets/image/aaron.jpeg'
import Footer from '@/components/App/Footer/Footer.vue'

export default defineComponent({
  components: {
    Footer
  },
  setup() {
    const memberData = reactive([
    {
      name: 'Ian Chen',
      title: 'Team Lead',
      github: 'https://github.com/ianchen0119',
      facebook: '#',
      ig: '#',
      id: '0',
      img: ian
    },
    {
      name: 'Lance Wang',
      title: 'Team member',
      github: 'https://github.com/LanceWang12',
      facebook: '#',
      ig: '#',
      id: '1',
      img: temp
    },
    {
      name: 'CCW',
      title: 'Team member',
      github: 'https://github.com/t106362512',
      facebook: '#',
      ig: '#',
      id: '2',
      img: ccw
    },
    {
      name: 'Sunny Yeh',
      title: 'Team member',
      github: 'https://github.com/jhih-ching-yeh',
      facebook: '#',
      ig: '#',
      id: '3',
      img: sunny
    },
    {
      name: 'Aaron',
      title: 'Team member',
      github: 'https://github.com/cckaron',
      facebook: '#',
      ig: '#',
      id: '4',
      img: aaron
    },
    {
      name: 'Ariel Chen',
      title: 'Team member',
      github: '#',
      facebook: '#',
      ig: '#',
      id: '5',
      img: temp
    }
  ])
  return{
    memberData,
    IconGitHub,
    IconFacebook,
    IconInstagram
  }
  },
})
</script>
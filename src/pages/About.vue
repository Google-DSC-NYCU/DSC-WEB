<template>
  <main id="about">
    <div class="about__container">
      <div v-for="data in memberData" :key="data.id" class="containter__card">
        <div class="about__link">
          <img :src="data.img" alt="">
          <b>{{data.name}}</b>
          <p>{{data.title}}</p>
          <a :href="data.github">
            <component :is="IconGitHub"></component>
          </a>
          <a :href="data.facebook">
            <component :is="IconFacebook"></component>
          </a>
          <a :href="data.ig">
            <component :is="IconInstagram"></component>
          </a>
          <a :href="data.ln">
            <component :is="IconLinkedIn"></component>
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
import IconLinkedIn from 'virtual:vite-icons/fa-brands/linkedin'
import IconInstagram from 'virtual:vite-icons/fa-brands/instagram'
// import temp from '@/assets/temp.jpg'
// import sunny from '@/assets/image/sunny.png'
// import ccw from '@/assets/image/ccw.png'
// import ian from '@/assets/image/ian.jpg'
// import aaron from '@/assets/image/aaron.jpeg'
import Footer from '@/components/App/Footer/Footer.vue'

import memberData from '@/assets/json/member.json';

export default defineComponent({
  components: {
    Footer
  },
  setup() {
    // const memberData = reactive([
    // {
    //   name: 'Ian Chen',
    //   title: 'Team Lead',
    //   github: 'https://github.com/ianchen0119',
    //   facebook: '#',
    //   ig: '#',
    //   id: '0',
    //   img: ian,
    //   ln: 'https://www.linkedin.com/in/ian-chen-88b70b1aa/'
    // },
    // {
    //   name: 'Lance Wang',
    //   title: 'Team member',
    //   github: 'https://github.com/LanceWang12',
    //   facebook: '#',
    //   ig: '#',
    //   id: '1',
    //   img: temp,
    //   ln: ''
    // },
    // {
    //   name: 'CCW',
    //   title: 'Team member',
    //   github: 'https://github.com/t106362512',
    //   facebook: '#',
    //   ig: '#',
    //   id: '2',
    //   img: ccw,
    //   ln: ''
    // },
    // {
    //   name: 'Sunny Yeh',
    //   title: 'Team member',
    //   github: 'https://github.com/jhih-ching-yeh',
    //   facebook: '#',
    //   ig: '#',
    //   id: '3',
    //   img: sunny,
    //   ln: ''
    // },
    // {
    //   name: 'Aaron',
    //   title: 'Team member',
    //   github: 'https://github.com/cckaron',
    //   facebook: '#',
    //   ig: '#',
    //   id: '4',
    //   img: aaron,
    //   ln: ''
    // },
    // {
    //   name: 'Ariel Chen',
    //   title: 'Team member',
    //   github: '#',
    //   facebook: '#',
    //   ig: '#',
    //   id: '5',
    //   img: temp,
    //   ln: 'https://www.linkedin.com/in/ching-chen-21baa01b5/'
    // }
  // ])

  

  return{
    memberData,
    IconGitHub,
    IconFacebook,
    IconInstagram,
    IconLinkedIn
  }
  },
})
</script>
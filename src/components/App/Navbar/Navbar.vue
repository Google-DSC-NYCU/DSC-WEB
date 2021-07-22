<template>
  <nav id="nav">
    <div class="nav__left">
    </div>
    <div class="nav__right">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/">Events</router-link>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>

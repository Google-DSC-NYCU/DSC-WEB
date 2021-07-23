<template>
  <!-- <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button> -->
  <main id="main">
  </main>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

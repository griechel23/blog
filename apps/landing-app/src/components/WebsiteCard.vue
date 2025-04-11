<template>
  <q-card v-ripple class="website-card q-hoverable" tag="a" :href="link" :style="backgroundStyle">
    <span class="q-focus-helper"></span>
    <q-card-section class="text-center">
      {{ title}}
    </q-card-section>
  </q-card>
</template>

<style scoped>
.website-card {
  display: flex;
  justify-content: center; /* Centers content vertically */
  align-items: center; /* Centers content horizontally */
  cursor: pointer; /* Equivalent to 'cursor-pointer' */
  height: 100vh; /* Equivalent to 'window-height' */
  transition: box-shadow 0.2s ease-in-out; /* For hover effect */
  background-size: cover;
  background-position: center center
}
</style>

<script setup lang="ts">

import { computed } from 'vue'

interface Props {
  title: string
  link: string
  image?: string
}

const props = defineProps<Props>()

const backgroundStyle = computed(() => {
  let imageUrl;
  if (props.image) {
    imageUrl = new URL(`../assets/${props.image}`, import.meta.url).href
  }

  return {
    backgroundImage: imageUrl ? `url('${imageUrl}')` : 'none',
    backgroundColor: imageUrl ? 'transparent' : 'black',
    backgroundStyle: 'cover',
    backgroundPosition: 'center center'
  }
})
</script>

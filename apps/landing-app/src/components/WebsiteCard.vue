<template>
  <q-card
    v-ripple
    class="website-card q-hoverable"
    tag="a"
    :href="link"
    :style="backgroundStyle"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <span class="q-focus-helper"></span>
      <q-card-section class="card-title text-h4">
        {{ title }}
      </q-card-section>
    <transition name="reveal-fade">
      <q-card v-if="hovered" class="revealed-card">
        <q-card-section>
          <div class="description-text">
            {{ description }}
          </div>
        </q-card-section>
      </q-card>
    </transition>
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
}
.card-title {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: black; /* optional: ensure readability on background */
}
.revealed-card {
  position: absolute;
  inset: 0% 0;
  height: 100%;
  background-color: rgba(50, 50, 50, 0.45); /* dark gray semi-transparent */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  z-index: 1;
  backdrop-filter: blur(2px);
}
.description-text {
  font-size: 1.125rem;
  font-style: italic;
  max-width: 30rem;
}

/* Fade & scale animation */
.reveal-fade-enter-active,
.reveal-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.reveal-fade-enter-from,
.reveal-fade-leave-to {
  opacity: 0;
  transform: scale(0.85);
}
</style>

<script setup lang="ts">

import { computed, ref } from 'vue'

interface Props {
  title: string
  link: string
  image?: string
  description: string
}

const props = defineProps<Props>()
const hovered = ref(false)

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

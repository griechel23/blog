<template>
  <q-header>
    <template v-for="e in props.entries">
      <router-link :to="e.path">{{ e.name }}</router-link>
    </template>
  </q-header>
</template>

<script setup lang="ts">

import { NavBarProps } from './lib'
import { useRouter } from 'vue-router'

const props = defineProps<NavBarProps>();
const router = useRouter()


</script>
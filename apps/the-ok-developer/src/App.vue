<template>
  <q-layout view="lHh lpR fFf">
    <NavBar
      :entries="navBarPropsRef.entries"
    >
      <template #default>
        <Icon class="icon q-mt-sm"/>
      </template>
    </NavBar>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.icon {
  width: 30px;
  height: 30px;
  opacity: 0.75;
}
</style>

<script setup lang="ts">
import { NavBar, NavBarProps } from '@repo/components'
import { Ref, ref } from 'vue'
import Icon from '@/assets/icon.svg'

const navBarPropsRef: Ref<NavBarProps> = ref({
  webpageTitle: "The Ok Developer",
  entries: [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Blog',
      path: "/blog",
    },
    {
      name: 'About',
      path: "/about",
    },
  ]
})
</script>

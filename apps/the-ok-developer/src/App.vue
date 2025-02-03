<template>
  <q-layout view="lHh lpR fFf">
    <NavBar
      :entries="navBarPropsRef.entries"
    ></NavBar>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { NavBar, NavBarProps } from '@repo/components'
import { Ref, ref } from 'vue'

const navBarPropsRef: Ref<NavBarProps> = ref({
  entries: [
    {
      name: 'About',
      path: "/about",
    }
  ]
})
</script>

<template>
  <q-layout view="lHh lpR fFf">
    <NavBar
      :entries="navBarPropsRef.entries"
      :website-title="navBarPropsRef.websiteTitle"
    >
      <template #title>
        <div class="text-h6">
          GarrenRiechel.com
        </div>
      </template>
    </NavBar>
    <q-page-container>
      <Websites class="q-mt-sm"/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import Websites from '@/components/Websites.vue'
import { NavBar, NavBarProps } from '@repo/components'
import { Ref, ref } from 'vue'

const navBarPropsRef: Ref<NavBarProps> = ref({
  websiteTitle: "The Ok Developer",
  entries: [
    {
      name: 'About',
      path: "/about",
    },
  ]
})
</script>
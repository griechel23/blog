<template>
  <q-page>
    <q-header>About</q-header>
    <AboutTabs
      :tabs="tabs"
      default-tab="blog"
    ></AboutTabs>
  </q-page>
</template>

<script setup lang="ts">
import { AboutEntry, AboutTabs } from '@repo/components'
import AboutBlog from '@/pages/about/AboutBlog.vue'
import AboutMe from '@/pages/about/AboutMe.vue'
import OtherSites from '@/pages/about/OtherSites.vue'

const tabs: AboutEntry[] = [
  {
    label: 'This Blog',
    name: 'blog',
    component: AboutBlog
  },
  {
    label: 'Me',
    name: 'me',
    component: AboutMe
  },
  {
    label: 'Other Sites',
    name: 'links',
    component: OtherSites
  },
]

</script>
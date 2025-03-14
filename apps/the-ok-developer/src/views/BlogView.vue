<template>
  <q-splitter
    v-model="splitterModel"
    style="height: 100vh"
    class="q-mt-md"
  >

    <template v-slot:before>
      <q-tabs
        v-model="tab"
        vertical
        class="text-teal"
      >
        <q-tab name="newVue" label="Setting Up Vue App" >3.14.25</q-tab>
        <q-tab name="dynamicTabs" label="Dynamic Tab Content">2.20.25 <br/>foo bar baz</q-tab>
      </q-tabs>
    </template>

    <template v-slot:after>
      <q-tab-panels
        v-model="tab"
        animated
        swipeable
        vertical
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel name="newVue">
          <NewVueProject/>
        </q-tab-panel>

        <q-tab-panel name="dynamicTabs">
          <DynamicVueTabs/>
        </q-tab-panel>
      </q-tab-panels>
    </template>

  </q-splitter>
</template>

<style scoped>

</style>

<script setup lang="ts">

import { ref } from 'vue'
import NewVueProject from '@/pages/blog/NewVueProject.vue'
import DynamicVueTabs from '@/pages/blog/DynamicVueTabs.vue'

const tab = ref('')
const splitterModel =  ref(20)

</script>
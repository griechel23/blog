<template>
  <div class="container">
    <q-splitter
      v-model="splitterModel"
      style="height: 100vh"
    >
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
        >
          <q-tab name="dailyHabits" label="Daily Habits" class="q-mb-sm q-mt-sm"><div class="flex row items-center"> 3.14.25<q-chip size="sm" color="primary" outline>Non-Tech</q-chip></div></q-tab>
          <q-separator/>
          <q-tab name="newVue" label="Setting Up a Vue App" class="q-mb-sm q-mt-sm"><div class="flex row items-center"> 3.14.25<q-chip size="sm" color="accent" outline>Tech</q-chip></div></q-tab>
          <q-separator/>
          <q-tab name="dynamicTabs" label="Dynamic Tab Content" class="q-mb-sm q-mt-sm"><div class="flex row items-center"> 2.20.25 <q-chip size="sm" color="accent" outline>Tech</q-chip></div></q-tab>
          <q-separator/>
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
          <q-tab-panel name="dailyHabits">
            <DailyHabits/>
          </q-tab-panel>
          <q-tab-panel name="newVue">
            <NewVueProject/>
          </q-tab-panel>

          <q-tab-panel name="dynamicTabs">
            <DynamicVueTabs/>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
</template>

<style scoped>
.container {
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
}
</style>

<script setup lang="ts">

import { ref } from 'vue'
import NewVueProject from '@/pages/blog/NewVueProject.vue'
import DynamicVueTabs from '@/pages/blog/DynamicVueTabs.vue'
import DailyHabits from '@/pages/blog/DailyHabits.vue'

const tab = ref('')
const splitterModel =  ref(20)

</script>
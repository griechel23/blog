<template>
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-tabs
        v-model="tab"
        class="text-teal"
      >
        <template v-for="t in tabs">
          <q-tab :name="t.name" :label="t.label"/>
        </template>
      </q-tabs>
    </div>
  <q-tab-panels v-model="tab">
    <template v-for="t in tabs">
      <q-tab-panel :name="t.name">
        <component :is="t.component"/>
      </q-tab-panel>
    </template>
  </q-tab-panels>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AboutEntry } from './util/types'

interface Props {
  tabs: AboutEntry[]
  defaultTab: string
}

const props = defineProps<Props>()
const tab = ref(props.defaultTab)
</script>
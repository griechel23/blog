<template>
  <q-header class="bg-black text-grey-2" elevated>
    <q-toolbar>
      <q-toolbar-title>
        <slot/>
      </q-toolbar-title>
      <div class="header-entries row items-center justify-end">
        <q-tabs>
          <template v-for="e in entries" :key="e.path">
            <q-route-tab
              :to="e.path"
              :label="e.name"
              class="text-grey-3 q-hover:text-green-4"
            />
          </template>
        </q-tabs>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { NavBarProps } from './lib'

defineProps<NavBarProps>();
</script>
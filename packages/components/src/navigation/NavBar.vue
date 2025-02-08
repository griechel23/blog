<template>
  <q-header>
    <span class="page-title">
      {{ props.webpageTitle }}
    </span>
    <span class="header-entries">
      <span class="right-content q-mr-md">
        <template v-for="e in props.entries">
          <router-link :to="e.path">{{ e.name }}</router-link>
        </template>
      </span>
    </span>
  </q-header>
</template>

<style scoped>
.page-title {

}
.header-entries {
  display: flex;
  justify-content: space-between; /* Ensures left and right alignment */
  align-items: center;
}

.right-content {
  margin-left: auto;
}
</style>

<script setup lang="ts">

import { NavBarProps } from './lib'

const props = defineProps<NavBarProps>();
console.log(JSON.stringify(props))

</script>
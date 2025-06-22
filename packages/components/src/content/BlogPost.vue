<template>
  <div class="container">
    <h1 class="pageTitle">{{ title }}</h1>
    <h2 class="pageSubtitle">{{ subtitle }}</h2>
    <slot class="content" name="content"/>
  </div>
</template>

<script setup lang="ts">

interface Props {
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>

<style scoped>
.container {
  padding: 20px;
}
.pageTitle {
  text-align: center;
  font-size: 2em;
  margin-bottom: 10px;
}
.pageSubtitle {
  text-align: center;
  font-size: 1.5em;
  color: gray;
  margin-bottom: 15px;
}
.content {
  font-size: 1.2em;
}
</style>

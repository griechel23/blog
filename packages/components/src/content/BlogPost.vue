<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <h2 class="subtitle">{{ subtitle }}</h2>
    <slot name="content"/>
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
  text-align: center;
  padding: 20px;
}
.title {
  font-size: 2em;
  margin-bottom: 10px;
}
.subtitle {
  font-size: 1.5em;
  color: gray;
  margin-bottom: 15px;
}
.content {
  font-size: 1.2em;
}
</style>

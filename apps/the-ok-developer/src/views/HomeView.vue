<template>
  <div class="container">
    <h1 class="title">The Ok Developer</h1>
    <p class="subtitle">A blog written for (and written by) a perfectly average software engineer</p>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Background Styling */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  font-family: 'Inter', sans-serif;
}

/* Main Title Styling */
.title {
  font-size: 4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
}

/* Subtitle Styling */
.subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  color: #666;
}
</style>
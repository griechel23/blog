<template>
    <div class="row">
      <WebsiteCard class="col" title="Garren Riechel Photography" :link="websiteUrl" image="sf.jpg"/>
      <WebsiteCard class="col" title="The Ok Developer" :link="okDevUrl" image="empire.jpg"/>
      <WebsiteCard class="col" title="Local Host" :link="localHostUrl" image="breck.jpg"/>
    </div>
</template>

<script setup lang="ts">
import WebsiteCard from '@/components/WebsiteCard.vue'

const websiteUrl = import.meta.env.VITE_PHOTO_URL
const okDevUrl = import.meta.env.VITE_OK_DEV_URL
const localHostUrl = import.meta.env.VITE_LOCAL_HOST_URL
</script>
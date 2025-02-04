<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
    <ModalsContainer />
  </NuxtLayout>
</template>

<script setup lang="ts">
 import { ModalsContainer, useModal } from 'vue-final-modal'
</script>
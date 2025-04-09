<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 600px; width: 100%">
      <div class="text-h5 q-mb-md">Counter</div>

      <q-btn label="Decrement Value" @click="decrementValue" color="primary" />
      <q-btn label="Increment Value" @click="incrementValue" color="primary" />

      <div class="text-h6 q-mt-md">Current Value: {{ currentValue }}</div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const currentValue = ref(0)

function incrementValue() {
  currentValue.value += 1
}

function decrementValue() {
  currentValue.value = Math.max(0, currentValue.value - 1)
}
</script>

<style scoped>
/* You can add your custom styles here */
</style>

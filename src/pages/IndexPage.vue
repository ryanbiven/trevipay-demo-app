<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 600px; width: 100%">
      <div class="text-h5 q-mb-md">Cat Fact Retriever</div>

      <q-btn label="Get Cat Fact" @click="fetchCatFact" color="primary" />

      <q-card v-if="catFact" class="q-my-md">
        <q-card-section>
          <div class="text-subtitle1">{{ catFact }}</div>
        </q-card-section>
      </q-card>
      <q-card v-if="factLength" class="q-my-md">
        <q-card-section>
          <div class="text-subtitle1">{{ factLength }}</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const catFact = ref('') // Store the retrieved cat fact here
const factLength = ref(0)

const fetchCatFact = async () => {
  try {
    const response = await fetch('https://catfact.ninja/fact')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    catFact.value = data.fact
    factLength.value = data.length
  } catch (error) {
    console.error('Error fetching cat fact:', error)
    catFact.value = "Oops! Couldn't fetch a cat fact right now."
  }
}
</script>

<style scoped>
/* You can add your custom styles here */
</style>

<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 600px; width: 100%">
      <div class="text-h5 q-mb-md">To Do List</div>

      <q-input v-model="newToDo" />

      <q-btn label="Add To Do" @click="addToDo" color="primary" />

      <q-list bordered separator>
        <q-item v-for="(toDo, index) in toDos" clickable v-ripple :key="index">
          <q-item-section>{{ toDo }}</q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const newToDo = ref('')

const toDos = ref([])

const addToDo = () => {
  toDos.value.push(newToDo.value)
  newToDo.value = ''
}
</script>

<style scoped>
/* You can add your custom styles here */
</style>

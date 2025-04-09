<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-btn label="Go to Index Page" to="/" color="secondary" />
      <q-btn label="Go to Counter Page" to="/counter" color="secondary" />

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

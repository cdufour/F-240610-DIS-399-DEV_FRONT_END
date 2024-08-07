<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import {provide, reactive} from 'vue';

const settings = reactive({
  nbQuestions: 5,
  level: '*',
  category: '*'
})

provide('settings', settings);
</script>


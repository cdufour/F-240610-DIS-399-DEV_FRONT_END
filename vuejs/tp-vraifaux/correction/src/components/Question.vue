<template>
    <h2 v-if="question">{{ question.label }}</h2>
</template>

<script setup>
const props = defineProps(['question'])
</script>
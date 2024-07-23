<template>
    <div>
        <div>{{ text }}</div>
        <button @click="text = 'x'">Update text</button>
    </div>
</template>

<script setup>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} 
    from 'vue'

const text = ref('Some text')

onBeforeMount(() => {
    console.log('#1 onBeforeMount')
})

onMounted(() => {
    console.log('#2 onMounted')
})

onBeforeUpdate(() => {
    console.log('# onBeforeUpdate');
})

onUpdated(() => {
    console.log('# onUpdated');
})

onBeforeUnmount(() => {
    console.log('#3 onBeforeUnmount')
})

onUnmounted(() => {
    console.log('#4 onUnmounted')
})

</script>
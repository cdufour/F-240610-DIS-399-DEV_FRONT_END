<template>
    <div>
        <h2>Pays</h2>
        <ul>
            <li v-for="country in state.countries" :key="country.id">
                {{ country.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { db } from '@/firebase/config'
import { collection, getDocs } from 'firebase/firestore'

const state = reactive({
    countries: []
})

onMounted(async () => {

    let countries = [];
    const snap = await getDocs(collection(db, 'countries'));
    snap.forEach(doc => {
        countries.push({id: doc.id, name: doc.data().name })
    })
    state.countries = countries; // state update
})

</script>
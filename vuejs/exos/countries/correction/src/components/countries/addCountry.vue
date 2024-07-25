<template>
    <div>
        <h2>Ajout d'un pays</h2>
        <div>
            <input type="text" v-model="countryName" />
        </div>
        <button @click="postCountry">Enregistrer</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { db } from '@/firebase/config'
import { collection, addDoc } from 'firebase/firestore'

const countryName = ref('');

async function postCountry() {
   await addDoc(collection(db, 'countries'), { name: countryName.value })
   console.log('post done')
}


</script>
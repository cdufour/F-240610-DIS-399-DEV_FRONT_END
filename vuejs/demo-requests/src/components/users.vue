<template>
    <div class="row">
        <div 
        class="col-auto mb-4"
        v-for="user in state.users" :key="user.id"
        >
            <div class="card" style="width: 14rem;">
                <img 
                    class="card-img-top" 
                    :src="'https://placebeard.it/300/300?' + user.id"
                    alt="Card image cap"
                >
                <div class="card-body">
                    <div class="card-text">
                        <strong>Name:</strong> {{ user.name }}
                    </div>
                    <div class="card-text">
                        <strong>Lastname:</strong>  {{ user.lastname }}
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

const state = reactive({
    users: []
})

const getUsers = () => {
    axios.get('http://localhost:3000/users')
        .then(res => {
            state.users = res.data;
        })
        .catch(err => {
            console.log(err);
        })
}

onMounted(() => {
    getUsers();
})

</script>
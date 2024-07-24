<template>
    <div>
        <form @submit.prevent="onSubmit">
            <h3>S'enregistrer</h3>
            <div>
                <input type="text" placeholder="Nom" 
                v-model="state.username" 
                />
            </div>
            <div>
                <input type="text" placeholder="Mot de passe" 
                v-model="state.password"
                />
            </div>
            <button>Enregistrer</button>
        </form>
        <hr>
        <div v-if="errors.length>0">
            <ul>
                <li v-for="(err, index) in errors" :key="index">
                    {{ err }}
                </li>
            </ul>
        </div>
        <div>{{ message }}</div>
    </div>
</template>

<script setup>
import {reactive, ref} from 'vue'
import {isPasswordStrong} from './helpers'

const errors = reactive([])

const state = reactive({
    username: '',
    password: ''
})

let message = ref('')

function isUsernameValid() {
    if (!state.username) return false;
    if (state.username.length <= 2) return false;
    if (state.username.includes(" ")) return false;
    return true;
}

function checkForm() {
    errors.splice(0); // reset tableau des erreurs

    if (!isUsernameValid()) {
        errors.push('Le nom doit contenir au moins 2 charactères et pas d\'espace')
    }
    if (!isPasswordStrong(state.password)) {
        errors.push('Le mot de passe doit être de longueur > 11, avec au moins une majuscule, un nombre, un caractères spécial')
    }
}

function onSubmit() {
    checkForm();
    if (errors.length === 0) {
        postUser();
    }
}

function postUser() {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
    })
    .then(res => {
        message.value = `L'utilisateur ${state.username} a été enregistré avec succès`;
        state.username = '';
        state.password = '';
    })
    .catch(err => {
        message.value = `L'utilisateur ${state.username} n'a pas pu être enregistré`
    })
}
</script>
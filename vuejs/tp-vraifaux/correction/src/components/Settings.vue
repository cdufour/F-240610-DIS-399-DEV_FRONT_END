<template>
    <div>
        <h2>Paramètres</h2>
        <form @submit.prevent="onSubmit">
            <div>
                Nombre de questions
                <input type="number" name="nbQuestions" :value="settings.nbQuestions" />
            </div>
            <div>
                Catégories:
                <select name="category" :value="settings.category">
                    <option value="*">Toutes</option>
                    <option v-for="cat in categories" :key="cat" >{{ cat }}</option>
                </select>
            </div>
            <div>
                Niveau:
                <select name="level" :value="settings.level">
                    <option value="*">Tous</option>
                    <option v-for="level in levels" :key="level" >{{ level }}</option>
                </select>
            </div>
            <div>
                <button className="btn btn-primary" type="submit">Enregistrer</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import {ref, inject} from 'vue';

const settings = inject('settings');
const categories = ['Art', 'Géographie', 'Sport'];
const levels = ['Facile', 'Moyen', 'Difficile'];

function onSubmit(e) {
    settings.nbQuestions = parseInt(e.target.nbQuestions.value);
    settings.level = e.target.level.value;
    settings.category = e.target.category.value;
}
</script>
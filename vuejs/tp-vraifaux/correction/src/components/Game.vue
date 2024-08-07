<template>
    <div>
        <div v-if="!state.gameover && !state.gamestarted">
            <button className="btn btn-primary" @click="state.gamestarted = true">Jouer</button>
        </div>

        <div v-if="!state.gameover && state.gamestarted">
            <p>Question {{ state.currentIndex + 1 }} sur {{ state.questions.length }},  
                niveau: <strong>{{ settings.level === '*' ? 'tous' : settings.level  }}</strong>, 
                categorie: <strong>{{ settings.category === '*' ? 'toutes' : settings.category  }}</strong>
            </p>
            <Question :question="state.questions[state.currentIndex]" />
            <button className="btn btn-primary me-3" @click="onChoice(true)">Vrai</button>
            <button className="btn btn-primary" @click="onChoice(false)">Faux</button>
        </div>

        <div v-if="state.gameover">
            <p>Score: {{ state.score }} / {{ state.questions.length }}</p>
            <button className="btn btn-primary" @click="onReplay">Rejouer</button>
        </div>
    </div>
</template>

<script setup>
import _shuffle from 'lodash-es/shuffle';
import { onMounted, reactive, inject } from 'vue';
import Question from './Question.vue';

const api = 'http://localhost:3500/questions';

const settings = inject('settings');
console.log(settings);

const state = reactive({
    questions: [],
    gamestarted: false,
    gameover: false,
    currentIndex: 0,
    score: 0
});

function onChoice(choice) {

    if (choice === state.questions[state.currentIndex].correct) {
        state.score += 1;
    }

    if (state.currentIndex >= state.questions.length - 1) {
        state.gameover = true;
    } else {
        state.currentIndex += 1;
    }
}

function onReplay() {
    state.gameover = false;
    state.currentIndex = 0;
    state.score = 0;
}

onMounted(() => {
  fetch(api)
    .then(res => res.json())
    .then(data => state.questions = 
        _shuffle(data)
            .slice(0, settings.nbQuestions)
            .filter(q => settings.level === '*' || q.level === settings.level)
            .filter(q => settings.category === '*' || q.category === settings.category)
    )
})
</script>
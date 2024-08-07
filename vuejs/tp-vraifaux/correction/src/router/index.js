import { createRouter, createWebHistory } from 'vue-router'
import Game from '../components/Game.vue'
import Settings from '../components/Settings.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', component:Game},
        {path:'/settings', component:Settings},
    ],
    linkActiveClass:'active'
});

export default router;
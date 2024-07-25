import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Countries from '@/components/countries/index.vue'
import AddCountry from '@/components/countries/addCountry.vue'

// firebase
import { auth } from '@/firebase/config'

const isAuth = () => {
  let user = auth.currentUser; // user object || null
  if (!user) return '/';
  return true;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/countries',
      name: 'countries',
      //component: () => import('../views/AboutView.vue')
      component: Countries
    },
    {
      path: '/admin',
      name: 'admin',
      component: AddCountry,
      beforeEnter: isAuth
    }
  ]
})

export default router

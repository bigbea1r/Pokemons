import Home from '@/views/Home.vue'
import TermsOfUse from '@/views/TermsOfUse.vue'
import Pokemon_ID from '@/views/Pokemon_ID.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/terms-of-use', name: 'TermsOfUse', component: TermsOfUse },
    { path: '/:pokemon_id', name: 'Pokemon_ID', component: Pokemon_ID },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
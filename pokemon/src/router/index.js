import Home from '@/views/Home.vue'
import TermsOfUse from '@/views/TermsOfUse.vue'
import Pokemon_ID from '@/views/PokemonID.vue'
import Pokemon from '@/views/Nublay.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/terms-of-use', name: 'TermsOfUse', component: TermsOfUse },
    { path: '/{pokemon_id}', name: 'Pokemon_ID', component: Pokemon_ID },
    { path: '/pokemon', name: 'Pokemon', component: Pokemon },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
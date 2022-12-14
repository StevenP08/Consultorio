import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Citas from '../views/Citas.vue'

import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'
import Listar from '../components/Listar.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/citas',
    name: 'citas',
    component: Citas 
  },
  {
    path: '/crear ',
    name: 'Crear',
    component: Crear
  },{
    path: '/editar',
    name: 'Editar',
    component: Editar 
  },{
    path: '/listar',
    name: 'Listar',
    component: Listar 
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

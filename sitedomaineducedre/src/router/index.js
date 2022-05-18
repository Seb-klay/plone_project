import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Produits from '../views/Produits.vue'
import Minimalistes from '../components/Minimalistes.vue'
import Exotiques from '../components/Exotiques.vue'
import Vegetaux from '../components/Vegetaux.vue'
import Floraux from '../components/Floraux.vue'
import FruitesGourmands from '../components/FruitesGourmands.vue'
import Cart from '../components/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produits',
    name: 'Produits',
    component: Produits
  },
  {
    path: '/produits/minimalistes',
    name: 'Minimalistes',
    component: Minimalistes
  },
  {
    path: '/produits/exotiques',
    name: 'Exotiques',
    component: Exotiques
  },
  {
    path: '/produits/vegetaux',
    name: 'Vegetaux',
    component: Vegetaux
  },
  {
    path: '/produits/floraux',
    name: 'Floraux',
    component: Floraux
  },
  {
    path: '/produits/FruitesGourmands',
    name: 'FruitesGourmands',
    component: FruitesGourmands
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

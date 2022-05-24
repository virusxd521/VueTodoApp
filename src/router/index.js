import Vue from 'vue'
import VueRouter from 'vue-router'
// import TodoView from '../views/TodoView.vue'
import LoginView from '../views/LoginView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/todo',
    name: 'todo',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoView.vue')
  },
  {
    path: '/languages',
    name: 'languages',
    component: () => import(/* webpackChunkName: "about" */ '../views/LanguageView.vue')
  },

]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
  
// })

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Temp from '../views/temp.vue'

Vue.use(VueRouter)


export default new VueRouter({

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Temp',
      component: Temp
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ]

})

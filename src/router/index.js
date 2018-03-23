import Vue from 'vue'
import Router from 'vue-router'
import MechGenerator from '@/components/MainConfiguration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MechGenerator',
      component: MechGenerator
    }
  ]
})

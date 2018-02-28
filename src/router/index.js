import Vue from 'vue'
import Router from 'vue-router'
import TreeGrid from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TreeGrid',
      component: TreeGrid
    }
  ]
})

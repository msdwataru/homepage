import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/Profile'
import Skill from '@/components/Skill'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SelectPlan from '@/views/SelectPlan.vue'
import AddOns from '@/views/AddOns.vue'
import Summary from '@/views/Summary.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/select',
      name: 'select',
      component: SelectPlan
    },
    {
      path: '/add',
      name: 'add',
      component: AddOns
    },
    {
      path: '/summary',
      name: 'summary',
      component: Summary
    }
  ]
})

export default router

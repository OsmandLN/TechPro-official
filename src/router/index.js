import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import SuccessfulCasesPage from '../views/SuccessfulCasesPage.vue'
import StorePage from '../views/StorePage.vue'
import ContactPage from '../views/ContactPage.vue'
import ShoppingBag from '../views/ShoppingBag.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesPage
  },
  {
    path: '/successful-cases',
    name: 'successful-cases',
    component: SuccessfulCasesPage
  },
  {
    path: '/store',
    name: 'store',
    component: StorePage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/shopping-bag',
    name: 'shopping-bag',
    component: ShoppingBag
  },
  // In Vue3.x, the NotFound path differs from that in Vue2.x.
  {
    path: '/:pathMatch(.*)*',
    name: 'not found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

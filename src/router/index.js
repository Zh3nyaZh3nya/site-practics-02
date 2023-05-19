import { createRouter, createWebHistory } from 'vue-router'
import JCMainPage from "@/views/JC-MainPage";

const routes = [
  {
    path: "/",
    component: JCMainPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

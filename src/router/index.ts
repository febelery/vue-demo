import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { defineAsyncComponent } from "vue"
import Home from "@/views/home.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: () => import("@/views/vuex.vue")
  },
  {
    path: "/axios",
    name: "Axios",
    component: defineAsyncComponent(() => import("@/views/axios.vue"))
  }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router

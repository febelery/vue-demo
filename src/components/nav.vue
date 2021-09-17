<template>
  <aside class="nav">
    <ul class="nav-list">
      <li
        class="nav-item flex-center"
        v-for="(nav, index) in navList"
        :key="index"
        :class="{ active: nav.isActive }"
        @click="navClick(nav)"
      >
        {{ nav.name }}
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { onMounted, reactive, watch } from "vue"
import { NavItem } from "../interface/nav"

const router = useRouter()

const navList: Array<NavItem> = reactive([
  {
    name: "Home",
    isActive: false,
    path: "/"
  },
  {
    name: "Vuex",
    isActive: false,
    path: "/vuex"
  },
  {
    name: "Axios",
    isActive: false,
    path: "/axios"
  }
])

const navClick = (e: NavItem) => {
  router.push(e.path)
}

const changeNavActive = (currentPath: string) => {
  navList.forEach((v: NavItem) => {
    const temp = v
    temp.isActive = temp.path === currentPath
    return temp
  })
}

watch(
  () => router.currentRoute.value,
  (rt) => {
    changeNavActive(rt.path)
  }
)

onMounted(() => {
  router.isReady().then(() => {
    changeNavActive(router.currentRoute.value.path)
  })
})
</script>

<style scoped lang="stylus">
@import "../style/basic.styl"
.nav {
  position relative
  width 100%
  height 100%
  box-sizing border-box
  background: #fff

  .nav-list {
    .nav-item {
      box-sizing border-box
      width 100%
      height 60px
      cursor pointer

      &.active {
        font-weight bold
        background $second-background-color
      }
    }
  }
}
</style>

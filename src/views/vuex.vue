<template>
  <div class="vuex-container page-container">
    <div class="page-title">vue test vuex</div>
    <p>{{ data }}</p>
    <el-button type="primary" @click="double">double</el-button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex"
import { computed, ref } from "vue"

const store = useStore()
const data = ref(computed(() => store.state.count))

const double = () => {
  store.commit("increment")
}
</script>

<style scoped></style>

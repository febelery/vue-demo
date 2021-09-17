<template>
  <div class="axios-container page-container">
    <div class="page-title">axios test</div>
    <div class="user-info-container">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>vuejs</span>
            <el-button class="button" type="text" @click="getUserInfo">GetInfo</el-button>
          </div>
        </template>
        <div class="info-list-box" v-loading="loading">
          <div class="text item" v-if="userInfo?.name">name: {{ userInfo?.name }}</div>
          <div class="text item" v-if="userInfo?.id">id: {{ userInfo?.id }}</div>
          <div class="text item" v-if="userInfo?.blog">blog: {{ userInfo?.blog }}</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import axios from "../utils/axios"

const loading = ref(false)
const userInfo = ref<any>({})

const getUserInfo = () => {
  loading.value = true
  axios
    .get("/users/vuejs")
    .then((res) => {
      loading.value = false
      userInfo.value = res.data
      console.log(res.data)
    })
    .catch((err) => {
      loading.value = false
      console.log("err: ", err)
    })
}
</script>

<style scoped lang="stylus">
.axios-container {
  .user-info-container {
    display flex
    justify-content center
    width 100%

    .info-list-box {
      padding 10px

      .text {
        font-size: 14px;
      }

      .item {
        margin-bottom: 18px;
      }
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .box-card {
      width: 480px;
    }
  }
}
</style>

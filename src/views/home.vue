<script setup lang="ts">
import { onMounted, reactive } from "vue"

const dataptr = reactive({
  second: 0,
  minute: 0,
  hour: 0
})

onMounted(() => {
  setInterval(() => {
    const date = new Date()
    dataptr.minute = date.getMinutes() * 6
    dataptr.second = date.getSeconds() * 6
    dataptr.hour = ((date.getHours() % 12) / 12) * 360 + dataptr.minute / 12
  }, 1000)
})
</script>

<template>
  <div class="clock">
    <div v-for="i in 12" :key="i" class="numbers">
      <div :class="'number number-' + i">{{ i }}</div>
    </div>
    <div class="hand second" :style="{ transform: 'rotate(' + dataptr.second + 'deg)' }"></div>
    <div class="hand minute" :style="{ transform: 'rotate(' + dataptr.minute + 'deg)' }"></div>
    <div class="hand hour" :style="{ transform: 'rotate(' + dataptr.hour + 'deg)' }"></div>
  </div>
</template>

<style lang="stylus">
.clock {
  border-radius: 50%;
  box-shadow: 0 1vh 1vh rgba(0, 0, 0, 0.15);
  color: #fff;
  display: block;
  height: 60vh;
  position: relative;
  width: 60vh;
  margin: 5vh auto;
  background-color: #945dfe;

  &::after {
    box-shadow: 0 1vh 1vh rgba(0, 0, 0, 0.3);
    content: "";
    display: block;
    height: 8%;
    width: 8%;
    border-radius: 50%;
    background: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.hand {
  border: 0.8vh solid currentColor;
  background-color: currentColor;
  height: 40%;
  left: 50%;
  margin-top: -42%;
  margin-left: -1vh;
  position: absolute;
  top: 50%;
  transform-origin: 50% 100%;
  width: 0;
  transform: rotate(0deg);
}

.hour {
  height: 30%;
  margin-top: -32%;
}

.second {
  border-width: 0.5vh;
  margin-left: -0.5vh;
}

.number {
  position: absolute;
  left: 50%;
  height: 100%;
  padding-top: 0.5em;
  text-align: center;
  width: 2em;
  margin-left: -1em;
}

for num in (1..11)
  .number-{num}
    transform: rotate((30 * num) deg);
</style>

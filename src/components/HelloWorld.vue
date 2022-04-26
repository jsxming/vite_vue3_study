<!--
 * @Description: 
 * @Autor: 小明～
 * @Date: 2022-04-26 09:08:16
 * @LastEditors: 小明～
 * @LastEditTime: 2022-04-26 09:22:01
-->
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div>
    <h2>大发放</h2>
  </div>
</template>

<style lang="less" scoped>
h1{
  color: red;
}
div{
  h2{
    font-size: 30px;
    color: greenyellow;
  }
}
</style>
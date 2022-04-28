<!--
 * @Description: 
 * @Autor: 小明～
 * @Date: 2022-04-26 09:08:16
 * @LastEditors: 小明～
 * @LastEditTime: 2022-04-28 10:18:25
-->
<script setup lang="ts">
import {ref} from 'vue'
import { LAYOUT_TEMPLATE } from '@/constans/common'
import { useStore } from 'vuex'
console.warn(import.meta.env)
// const store = useStore()
// console.log(store.state.layoutTemplate,'store.state.layoutTemplate')
// const layoutTemplate =LAYOUT_TEMPLATE[store.state.layoutTemplate] 
// const layoutTemplate =LAYOUT_TEMPLATE[store.state.layoutTemplate] 
</script>

<template>
  <component :is="LAYOUT_TEMPLATE.default">
  </component>
</template>


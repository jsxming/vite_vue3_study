<!--
 * @Description: 
 * @Autor: 小明～
 * @Date: 2022-04-26 14:17:28
 * @LastEditors: 小明～
 * @LastEditTime: 2022-04-26 20:01:21
-->
<template>
    <h1 @click="setMsg">{{msg.a}}</h1>
</template>

<script setup>
import {reactive,onMounted,onUpdated} from 'vue'
const msg = reactive({a:123})

onMounted(()=>{
    console.info('mounted')
})
onUpdated(()=>{
    console.log(msg.a);
})
function setMsg(params) {
    msg.a++
}

</script>
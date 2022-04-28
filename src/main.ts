/*
 * @Description: 
 * @Autor: 小明～
 * @Date: 2022-04-26 09:08:16
 * @LastEditors: 小明～
 * @LastEditTime: 2022-04-26 20:12:17
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index'
createApp(App)
    .use(router)
    .use(store)
    .mount('#app')

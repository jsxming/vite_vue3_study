/*
 * @Description: 
 * @Autor: 小明～
 * @Date: 2022-04-26 09:27:56
 * @LastEditors: 小明～
 * @LastEditTime: 2022-04-28 09:29:15
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
const routerInstance = createRouter({
    history: createWebHashHistory(),
    routes
})

routerInstance.beforeEach((to, from, next) => {
    next()
})

export default routerInstance
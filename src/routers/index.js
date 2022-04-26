/*
 * @Description: 
 * @Autor: 小明～
 * @Date: 2022-04-26 09:27:56
 * @LastEditors: 小明～
 * @LastEditTime: 2022-04-26 11:47:47
 */
import VueRouter from 'vue-router'
import routes from './routes'
const routerInstance = VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes
})

export default routerInstance
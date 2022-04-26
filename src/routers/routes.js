/*
 * @Description: 
 * @Autor: 小明～
 * @Date: 2022-04-26 09:28:00
 * @LastEditors: 小明～
 * @LastEditTime: 2022-04-26 14:29:06
 */

const Home = () => import("../page/Home/index.vue")
const Routes =  [
    {
        path:'/',
        component:Home
    }
]

export default Routes
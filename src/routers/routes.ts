/*
 * @Description: 
 * @Autor: 小明～
 * @Date: 2022-04-26 09:28:00
 * @LastEditors: 小明～
 * @LastEditTime: 2022-04-28 09:46:19
 */

const Home = () => import("../page/Home/index.vue")
const Test = () => import("../page/Home/test.vue")
const Routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/test',
        component: Test,
        meta: {
            layout: 'other'
        }
    },
]

export default Routes
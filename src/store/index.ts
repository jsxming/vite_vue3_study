/*
 * @Description: 
 * @Autor: 小明～
 * @Date: 2022-04-26 09:28:08
 * @LastEditors: 小明～
 * @LastEditTime: 2022-04-28 09:59:07
 */
import { createStore } from 'vuex'
import global from './module/user'
import { LAYOUT_TEMPLATE } from '@/constans/common'
import { DefineComponent } from 'vue'
// import second from ''
// 创建一个新的 store 实例
interface IState {
    count: number
    layoutTemplate: string
}

const store = createStore({
    state(): IState {
        return {
            // 默认布局
            layoutTemplate: 'defaultLayout',
            count: 0
        }
    },
    mutations: {
        increment(state) {
            //   state.count++
        },
        SET_LAYOUT_TEMPLATE(state: IState, value: string) {
            state.layoutTemplate = value
        }
    },
    modules: {
        global
    }
})

export default store
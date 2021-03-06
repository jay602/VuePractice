import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        douboleCounter: state => {
            return state.counter * 2
        },
        stringCounter: state => {
            return state.counter + ' Clicks'
        }
    },
    mutations: {
        increment: state => {
            state.counter++
        },
        decrement: state => {
            state.counter--
        }
    }
});
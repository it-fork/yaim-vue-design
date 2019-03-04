import Vue from 'vue'
import Vuex from 'vuex'
import global from './global'
import test from './test'
Vue.use(Vuex)

export default new Vuex.Store({
    ...global,
    modules: {
        test
    }
})

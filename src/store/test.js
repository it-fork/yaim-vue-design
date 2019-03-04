/**
 * @author yaimeet
 * @date 2019/3/3
 * @Description
 */
export default {
    namespaced: true,
    state: {
        msg: 'test'
    },
    mutations: {
        updateMsg: (state, msg) => {
            state.msg = msg
        },
        clearMsg: (state) => {
            state.msg = ''
        }
    },
    actions: {
        updateMsg ({ commit }, msg) {
            commit('updateMsg', msg)
        },
        clearMsg ({ commit }) {
            commit('clearMsg')
        }
    },
    getters: {
        getMsg: (state) => {
            return state.msg
        }
    }
}

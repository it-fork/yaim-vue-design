import Vue from 'vue'
import './register'
import App from './App.vue'
import router from './router/'
import store from './store/'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => {
        return h(App)
    },
    methods: {}
}).$mount('#app')

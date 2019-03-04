/**
 * @author yaimeet
 * @date 2019/3/3
 * @Description
 */
import {
    msgField,
    codeField,
    proxyPath,
    codeSuccessValue,
    codeErrorValue,
    apiErrorCallback,
    apiCatchCallback
} from '@/configs/api'
import axios from 'axios'
class Http {
    axios = null
    config = {
        msgField: msgField || 'msg',
        codeField: codeField || 'code',
        proxyPath: proxyPath || '/proxyApi',
        codeSuccessValue: codeSuccessValue !== undefined ? codeSuccessValue : 200,
        codeErrorValue: codeErrorValue !== undefined ? codeErrorValue : 1
    }
    constructor (options = {}) {
        this.axios = axios.create({
            ...options
        })
    }
    fetch ({ method, path, data = {}, options = {} } = {}) {
        return new Promise((resolve, reject) => {
            this.axios({
                method: method,
                url: `${this.config.proxyPath}${path}`,
                data,
                ...options
            }).then(({ data }) => {
                if (data[this.config.codeField] !== this.config.codeSuccessValue) {
                    apiErrorCallback(data[this.config.codeField], data[this.config.msgField])
                } else {
                    resolve(data)
                }
            }).catch((e) => {
                if (e.response) {
                    if (e.response.status) {
                        apiCatchCallback(e.response.status, e.response.statusText)
                    }
                }
            })
        })
    }
    get ({ path, data = {}, options } = {}) {
        return new Promise((resolve, reject) => {
            this.fetch({ method: 'get', path, data, options }).then(resolve).catch(reject)
        })
    }
    post ({ path, data = {}, options } = {}) {
        return new Promise((resolve, reject) => {
            this.fetch({ method: 'post', path, data, options }).then(resolve).catch(reject)
        })
    }
    delete ({ path, data = {}, options } = {}) {
        return new Promise((resolve, reject) => {
            this.fetch({ method: 'delete', path, data, options }).then(resolve).catch(reject)
        })
    }
    put ({ path, data = {}, options } = {}) {
        return new Promise((resolve, reject) => {
            this.fetch({ method: 'put', path, data, options }).then(resolve).catch(reject)
        })
    }
    patch ({ path, data = {}, options } = {}) {
        return new Promise((resolve, reject) => {
            this.fetch({ method: 'patch', path, data, options }).then(resolve).catch(reject)
        })
    }
}

export default {
    install (Vue, options) {
        Vue.prototype.Http = Http
        Vue.prototype.$http = new Http()
    }
}

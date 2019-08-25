/**
 * @author yaimeet
 * @date 2019/3/3
 * @Description
 */
import axios from 'axios'

class Http {
    axios = null
    config = {
        msgField: 'msg',
        codeField: 'code',
        dataField: 'data',
        proxyPath: '/proxyApi',
        codeSuccessValue: 200,
        codeErrorValue: 1,
        apiErrorCallback: () => {
            console.log('apiErrorCallback')
        },
        apiCatchCallback: () => {
            console.log('apiCatchCallback')
        }
    }

    constructor (options = {}, config = {}) {
        this.axios = axios.create({
            ...options
        })
        Object.keys(config).forEach((key) => {
            this.config[key] = config[key]
        })
    }

    fetch ({ method, path, data = {}, options = {} } = {}) {
        return new Promise((resolve) => {
            this.axios({
                method: method,
                url: `${this.config.proxyPath}${path}`,
                data,
                ...options
            }).then(({ data }) => {
                if (data[this.config.codeField] !== this.config.codeSuccessValue) {
                    this.config.apiErrorCallback(data[this.config.codeField], data[this.config.msgField])
                } else {
                    resolve(data[this.config.dataField])
                }
            }).catch((e) => {
                if (e.response) {
                    if (e.response.status) {
                        this.config.apiCatchCallback(e.response.status, e.response.statusText)
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
    install (Vue, { axiosInit = {}, apiInit = {} } = {}) {
        // console.log("install", axiosInit, apiInit);
        Vue.prototype.Http = Http
        Vue.prototype.$http = new Http(axiosInit, apiInit)
    }
}

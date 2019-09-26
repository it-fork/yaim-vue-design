/*
 * @Author: yaimeet
 * @Date: 2019-09-26 20:56:15
 * @Last Modified by: yaimeet
 * @Last Modified time: 2019-09-26 22:20:06
 */
import axios from 'axios'

export default class Config {
    axios = null
    config = {
        codeField: '',
        msgField: '',
        dataField: '',
        successCodeValue: '',
        errorCodeValue: '',
        proxyPath: '',
        networkErrorCallback: () => {
            console.warn('networkErrorCallback')
        },
        apiErrorCallback: () => {
            console.warn('apiErrorCallback')
        }
    }

    /**
     * 拦截器管理
     */
    interceptors = {
        request: null,
        response: null
    }

    /**
     * 初始化
     */
    constructor ({ axiosConfig, httpConfig } = {}) {
        if (axiosConfig && axiosConfig.constructor === Object) {
            this.setAxios(axiosConfig)
        } else {
            this.initAxios()
        }

        if (httpConfig && httpConfig.constructor === Object) {
            this.setHttp(httpConfig)
        } else {
            this.initHttp()
        }
    }

    /**
     * 检测是否自定义配置
     */
    get isConfig () {
        if (this.codeField && this.msgField && this.successCodeValue && this.errorCodeValue) {
            return true
        }
        return false
    }

    /**
     * 请求拦截器函数
     */
    get requestInterceptors () {
        if (this.interceptors && this.interceptors.request && typeof this.interceptors.request === 'function') {
            return this.interceptors.request
        }
        return () => {
            // console.warn('requestInterceptors')
        }
    }
    /**
     * 响应拦截器函数
     */
    get responseInterceptors () {
        if (this.interceptors && this.interceptors.request && typeof this.interceptors.request === 'function') {
            return this.interceptors.request
        }
        return () => {
            // console.warn('responseInterceptors')
        }
    }

    /**
     * 配置请求和响应拦截器
     * @param {function} requestInterceptors
     * @param {function} responseInterceptors
     */
    configInterceptors (requestInterceptors, responseInterceptors) {
        this.interceptors.request = requestInterceptors
        this.interceptors.response = responseInterceptors
        this.setInterceptors()
        return this
    }

    /**
     * 设置请求和响应拦截器
     */
    setInterceptors () {
        if (this.axios) {
            this.axios.interceptors.request.use(this.requestInterceptors)
            this.axios.interceptors.response.use(this.responseInterceptors)
        }
        return this
    }

    /**
     * 初始化 axios 配置
     */
    initAxios () {
        this.axios = axios.create()
        return this
    }

    /**
     * 自定义 axios 配置
     * @param {object} config
     */
    setAxios (config = {}) {
        this.aixos = axios.create(config)
        return this
    }

    /**
     * 初始化 插件 配置
     */
    initHttp () {
        this.config = {
            codeField: '',
            msgField: '',
            dataField: '',
            successCodeValue: '',
            errorCodeValue: '',
            proxyPath: '',
            networkErrorCallback: () => {
                console.warn('networkErrorCallback')
            },
            apiErrorCallback: () => {
                console.warn('apiErrorCallback')
            }
        }
        return this
    }

    /**
     * 自定义 插件 配置
     * @param {object} config required
     */
    setHttp (config) {
        Object.keys(config).forEach((key) => {
            this.config[key] = config[key]
        })
        return this
    }
}

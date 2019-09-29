/*
 * @Author: yaimeet
 * @Date: 2019-09-26 20:16:02
 * @Last Modified by: yaimeet
 * @Last Modified time: 2019-09-26 22:16:55
 */

import Config from './config'
// import qs from 'qs'

export default class Http extends Config {
    async post (url, data, options) {
        const result = await this.fetch({
            url,
            method: 'post',
            data
        }, options)
        return result
    }
    async get (url, data, options) {
        const result = await this.fetch({
            url,
            method: 'get',
            data
        }, options)
        return result
    }
    async put (url, data, options) {
        const result = await this.fetch({
            url,
            method: 'put',
            data
        }, options)
        return result
    }
    async patch (url, data, options) {
        const result = await this.fetch({
            url,
            method: 'patch',
            data
        }, options)
        return result
    }
    async delete (url, data, options) {
        const result = await this.fetch({
            url,
            method: 'delete',
            data
        }, options)
        return result
    }
    async fetch ({ method, url, data } = {}, options = {}) {
        const paramKey = method === 'get' ? 'params' : 'data'
        const result = await this.axios({
            method,
            url,
            [`${paramKey}`]: data,
            ...options
        })
        return this.formatData(result)
    }

    async formatData (result) {
        return result.data
    }
}

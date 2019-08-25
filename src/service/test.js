const baseUrl = '/test'
export const login = (data, opts) => {
    return {
        method: 'post',
        path: `${baseUrl}/getList`,
        data,
        opts
    }
}

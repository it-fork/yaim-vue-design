<template>
    <div class="http">
        <h1>http.js 插件 示例</h1>
    </div>
</template>
<script>
    export default {
        name: 'test-http',
        data () {
            return {}
        },
        created () {
            // this.testLog()
            this.testApi()
        },
        methods: {
            testLog () {
                this.$log.echo('test', 'msg', 'log')
            },
            async testApi () {
                const result = await this.$http.post('/ittlrApi', {
                    id: 1
                })
                this.$log.echo(result, 'testApi', 'log')
            }
        }
    }
</script>

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
                // this.$log.echo(this.$http, 'testApi this.$http', 'log')
                const result = await this.$http.post('/aittlrApi', {
                    id: 1
                })
                this.$log.echo(result, 'testApi result', 'log')
            }
        }
    }
</script>

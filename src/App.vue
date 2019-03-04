<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <h1>
            {{msg}}
        </h1>
        <router-view/>
    </div>
</template>
<script>
    import * as test from '@/apis/test'
    export default {
        name: 'App',
        data () {
            return {
                msg: 'this is msg'
            }
        },
        created () {
            this.$root.log(this.$store)
            this.$http.get(test.testApi).then((data) => {
                this.$root.log(data, 'table', 'testApi then')
            }).catch((err) => {
                this.$root.log(err, 'error', 'testApi catch')
            })
        },
        methods: {
            /**
             * 测试功能
             * @returns {function(*): string} test
             */
            test () {
                return (a) => {
                    return 'fdfdf'
                }
            }
        }
    }
</script>
<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        box-sizing: border-box;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>

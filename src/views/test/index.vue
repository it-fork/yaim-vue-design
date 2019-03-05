<template>
    <div class="test">
        <div class="navs">
            <router-link to="/test/vuex">vuex</router-link>
            <router-link to="/test/component">component</router-link>
            <router-link to="/test/filter">filter</router-link>
            <router-link to="/test/directive">directive</router-link>
        </div>
        <hr>
        <hr>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'test',
        components: {},
        methods: {}
    }
</script>
<style lang="scss">
    .navs{
        a{
            padding: 0px 10px;
        }
    }
</style>

<template>
    <div class="hello-word">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String,
            default: () => {
                return 'this is hello-word component'
            }
        }
    }
</script>

<style scoped lang="scss">
    .hello-word{}
</style>

<template>
    <div class="word">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: 'word',
        props: {
            msg: String,
            default: () => {
                return 'this is global word component'
            }
        }
    }
</script>

<style scoped lang="scss">
   .word {
       p{
           color: blue;
       }
   }
</style>

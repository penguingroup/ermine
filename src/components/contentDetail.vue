<template>
    <div id="content">
        <div v-html='data'></div>
    </div>
</template>

<script>
    export default {
        name: "itemBar",
        data() {
            return {
                data: this.$route.params.content,
            }
        }
    }
</script>

<style>

</style>

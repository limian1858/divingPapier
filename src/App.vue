<template>
    <div id="app">
        <section class="content">
            <section class="page">
                <router-view/>
            </section>
        </section>
    </div>
</template>

<script>
export default {
    components: {},
    name: 'App',
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>

<style lang="less" scoped>
#app {
    width: 100%;
    height: 100%;
}

</style>

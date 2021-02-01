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
    color: #666;
    background-color: #fff;
    font-family: "Open Sans",Arial,sans-serif;
    font-size: 14px;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
}

</style>

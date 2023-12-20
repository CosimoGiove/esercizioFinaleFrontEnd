<script>
import sezione1footer from './components/sezione1footer.vue';
import Sezione2footer from './components/Sezione2footer.vue';
export default {
    name: "mainfooter",
    components: {
        sezione1footer,
        Sezione2footer,
    },
}
</script>

<template>
    <footer>
        <sezione1footer></sezione1footer>
        <Sezione2footer></Sezione2footer>
    </footer>
</template>

<style lang="scss" scoped>
</style>

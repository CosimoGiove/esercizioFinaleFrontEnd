<script>
import sezione1Main from './components/sezione1Main.vue';
import Sezione2main from './components/Sezione2main.vue';
import Sezione3main from './components/Sezione3main.vue';
import Sezione4Main from './components/Sezione4Main.vue';
import Sezione5Main from './components/Sezione5Main.vue';
import Sezione6MainVue from './components/Sezione6Main.vue';
import Sezione7main from './components/Sezione7main.vue';
export default {
    name: "_main",
    components: {
        sezione1Main,
        Sezione2main,
        Sezione3main,
        Sezione4Main,
        Sezione5Main,
        Sezione6MainVue,
        Sezione7main,
    },
}
</script>
<template>
    <main>
        <sezione1Main></sezione1Main>
        <Sezione2main></Sezione2main>
        <Sezione3main></Sezione3main>
        <Sezione4Main></Sezione4Main>
        <Sezione5Main></Sezione5Main>
        <Sezione6MainVue></Sezione6MainVue>
        <Sezione7main></Sezione7main>
    </main>
</template>

<style lang="scss" scoped>
main {
    color: #333c4e;
}
</style>

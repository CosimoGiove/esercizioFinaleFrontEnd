<script>
import { store } from './store'
import descrizione from './components/descrizione.vue';
import icone from './components/icone.vue';
export default {
    name: "_main",
    components: {
        icone,
        descrizione,
    },
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <main>
        <section>
            <div class="contenitoremain sezione1">
                <div class="descrizione" v-for="informazioni in store.info">
                    <descrizione :titolo="informazioni.titolo" :descrizione="informazioni.descrizione"></descrizione>
                </div>
                <div class="contenitoreicone">
                    <div v-for="icone in store.icona">
                        <icone :img="icone.immagine" :titolo="icone.titolo" :descrizione="icone.descrizione"></icone>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="sezione2">
                <div class="contenitoremain">
                    <div class="descrizione infodottore" v-for="info in store.InfoDottore">
                        <img :src="info.img" alt="">
                        <descrizione :titolo="info.titolo" :descrizione="info.descrizione"></descrizione>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
main {
    color: #333c4e;
}

.sezione1 {
    padding-bottom: 40px;
    padding-top: 80px;
}

.contenitoremain {
    width: 60%;
    margin-top: 80px;
    margin-bottom: 80px;
    margin: 0 auto;

    .contenitoreicone {
        display: flex;
        margin-top: 80px;
    }

    .descrizione {
        text-align: center;
    }
}

.sezione2 {
    background-color: #f7f7f7;
    padding-top: 80px;
}
</style>

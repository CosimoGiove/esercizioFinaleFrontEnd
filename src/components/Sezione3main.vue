<script>
import { store } from '../store';
import descrizione from './descrizione.vue';
import icone from './icone.vue';
export default {
    name: "Sezione3main",
    components: {
        descrizione,
        icone,
    },
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <section>
        <div class="sezione3">
            <div class="contenitoremain">
                <!-- img + descrizione-->
                <div class="descrizione infodottore" v-for="info in store.servizi">
                    <img :src="info.img" :alt="info.titolo">
                    <descrizione :titolo="info.titolo" :descrizione="info.descrizione"></descrizione>
                </div>
                <!--servizi dei dottori-->
                <div class="servizi">
                    <div class="servizidottore" v-for="icone in store.serviziDottore">
                        <icone :img="icone.img" :titolo="icone.titolo" :descrizione="icone.descrizione"></icone>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.contenitoremain {
    width: 60%;
    margin-top: 80px;
    margin-bottom: 80px;
    margin: 0 auto;
}

.descrizione {
    text-align: center;
}

.sezione3 {
    padding-top: 80px;
    padding-bottom: 80px;

    .servizi {
        display: flex;
        flex-wrap: wrap;
    }

    .servizidottore {
        width: calc(100% / 3);
        text-align: center;
        margin-top: 80px;
    }
}
</style>
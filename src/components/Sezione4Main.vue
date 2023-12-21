<script>
import { store } from '../store';
import VisitaLeStrutture from './VisitaLeStrutture.vue'
export default {
    name: "sezione4main",
    components: {
        VisitaLeStrutture,
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
        <div class="sezione4">
            <div class="contenitoremain">
                <div class="descrizione infodottore" v-for="info in store.strutture">
                    <img :src="info.img" :alt="info.titolo">
                    <!-- descrizione-->
                    <div v-for="struttura in store.strutture">
                        <VisitaLeStrutture :immagine="struttura.img" :titolo="struttura.titolo"
                            :descrizione="struttura.descrizione"></VisitaLeStrutture>
                    </div>
                    <!--bottone-->
                    <div class="play">
                        <img src="../../public/img/play-icon.png" alt="scrivania">
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

.sezione4 {
    padding-top: 80px;
    color: white;
    background-image: url(../public/img/paralax-bg-tour-facilities.jpg);
    background-position: center;
    background-size: cover;
    padding-bottom: 80px;
}

.play {
    margin-top: 30px;
    color: #358fc4;
    cursor: pointer;
}
</style>
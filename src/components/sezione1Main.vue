<script>
import icone from './icone.vue';
import { store } from '../store';
export default {
    name: "sezione1main",
    components: {
        icone,
    },
    data() {
        return {
            store,
            props: ["img", "titolo", "descrizione"]
        }
    }
}
</script>
<template>
    <section>
        <div class="contenitoremain sezione1">
            <!--descrizione avada-->
            <div class="descrizione">
                <h2>Welcome to Avada Health</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptas voluptatum nam
                    consecteturvoluptatem,animi,Voluptas voluptatum nam consectetur</p>
            </div>
            <!--icone + titolo e descrizione-->
            <div class="contenitoreicone">
                <div v-for="icone in store.icona">
                    <icone :img="icone.immagine" :titolo="icone.titolo" :descrizione="icone.descrizione"></icone>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.sezione1 {
    padding-bottom: 40px;
    padding-top: 80px;

    .descrizione h2 {
        font-size: 35px;
        margin-bottom: 20px;
    }

    .descrizione p {
        width: 65%;
        margin: 0 auto;
        line-height: 40px;
        font-size: 18px;
    }
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
</style>
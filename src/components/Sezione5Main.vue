<script>
import { store } from '../store';
import ServiziPrincipali from './ServiziPrincipali.vue';
export default {
    name: "sezione5main",
    components: {
        ServiziPrincipali,
    },
    data() {
        return {
            store,
        }
    }
}

</script>
<template>
    <section class="sezione5">
        <div v-for="emergenza in store.assistenza" class="emergenza">
            <ServiziPrincipali :titolo="emergenza.titolo" :img="emergenza.img" :testo="emergenza.testo">
            </ServiziPrincipali>
            <button class="btnem">Learn more</button>
        </div>
        <div>
            <div v-for="emergenza in store.espertodiagnostico" class="esperto">
                <ServiziPrincipali :titolo="emergenza.titolo" :img="emergenza.img" :testo="emergenza.testo">
                </ServiziPrincipali>
                <button class="btnes">Learn more</button>
            </div>

        </div>
        <div>
            <div v-for="emergenza in store.riabilitazione" class="riabilitazione">
                <ServiziPrincipali :titolo="emergenza.titolo" :img="emergenza.img" :testo="emergenza.testo">
                </ServiziPrincipali>
                <button class="btnri">Learn more</button>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.sezione5 {
    display: flex;
    text-align: center;
    line-height: 30px;
    color: white;

    .emergenza {
        background-color: #3aafbf;
        padding: 50px 10px;

    }

    .esperto {
        background-color: #3597c3;
        padding: 50px 10px;
        width: 100%;

    }

    .riabilitazione {
        background-color: #327ec7;
        padding: 50px 10px;
        width: 100%;
    }

    button {
        padding: 15px 30px;
        text-transform: uppercase;
        margin-top: 10px;
        color: white;
        border: 2px solid white;

    }

    .btnem {
        background-color: #3aafbf;
    }

    .btnes {
        background-color: #3597c3;
    }

    .btnri {
        background-color: #327ec7;
    }
}
</style>
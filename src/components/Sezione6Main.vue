<script>
import { store } from '../store';
import descrizione from './descrizione.vue';
export default {
    name: "sezione6main",
    components: {
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
    <section class="sezione6">
        <div v-for="appuntamento in store.appuntamenti" class="appuntamenti contenitoremain">
            <descrizione :titolo="appuntamento.titolo" :descrizione="appuntamento.descrizione"></descrizione>
        </div>
        <div class="contenitoreinput">
            <div>
                <input type="text" placeholder="name" class="text">
            </div>
            <div>
                <input type="email" name="email" id="email" placeholder="email">
            </div>
            <div>
                <input type="number" name="numero" id="numero" placeholder="phonenumber">
            </div>
            <div>
                <input type="date" name="data" id="data">
            </div>
        </div>
        <div class="contenitoretesto1">
            <input type="text" name="testo" id="testoappuntamento" placeholder="How can we help?*">
            <button class="btninvio">
                Make An Appointment
            </button>
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
.sezione6 {
    background-image: url(../public/img/make-an-appointment.jpg);
    background-position: center;
    background-size: cover;
    color: white;
    padding-bottom: 80px;

    .appuntamenti {
        padding-top: 80px;
        text-align: center;
    }

    .contenitoreinput {
        width: 35%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .text,
    #email,
    #numero {
        font-size: 18px;
        margin-top: 30px;
    }

    #data {
        width: 223px;
        padding: 3px;
        margin-top: 30px;
    }

    #testoappuntamento {
        margin-top: 30px;
        width: 100%;
        padding-bottom: 100px;
    }

    .contenitoretesto1 {
        width: 35%;
        margin: 0 auto;
    }

    .btninvio {
        width: 100%;
        margin-top: 20px;
        padding: 10px 0px;
        color: white;
        text-transform: uppercase;
        background-color: #3aafbf;
        border: none;
    }
}
</style>
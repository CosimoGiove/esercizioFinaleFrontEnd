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
            infoDottore: [
                {
                    img: "../public/img/doctor-1.jpg",
                    nome: "jon snow",
                    lavoro: "Anesthesiologist",
                    info: "at vero eos et accusamus et  iusto odio dignissimos ducimus qui blanditiis prasentium volaptum deleniti atque"
                },
                {
                    img: "../public/img/doctor-2.jpg",
                    nome: "tony stark",
                    lavoro: "Cardiologist",
                    info: "at vero eos et accusamus et  iusto odio dignissimos ducimus qui blanditiis prasentium volaptum deleniti atque"
                },
                {
                    img: "../public/img/doctor-3.jpg",
                    nome: "anna smith",
                    lavoro: "Nurse Practitioner",
                    info: "at vero eos et accusamus et  iusto odio dignissimos ducimus qui blanditiis prasentium volaptum deleniti atque"
                },
            ]
        }
    }
}
</script>
<template>
    <main>
        <section>
            <div class="contenitoremain sezione1">
                <div class="descrizione" v-for="informazioni in store.info">
                    <!-- <descrizione :titolo="informazioni.titolo" :descrizione="informazioni.descrizione"></descrizione> -->
                    <h2>Welcome to Avada Health</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptas voluptatum nam
                        consecteturvoluptatem,animi,Voluptas voluptatum nam consectetur</p>
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
                    <div class="descrizione infodottore" v-for="info in store.Dottore">
                        <img :src="info.img" alt="">
                        <descrizione :titolo="info.titolo" :descrizione="info.descrizione"></descrizione>
                    </div>
                </div>
                <div class="carddottore contenitoremain">
                    <div v-for="dottore in infoDottore" class="card">
                        <div class="immaginedottore">
                            <img :src="dottore.img" :alt="dottore.nome">
                            <div class="didascalia">
                                <div class="nome">
                                    {{ dottore.nome }}
                                </div>
                                <div>
                                    {{ dottore.lavoro }}
                                </div>
                                <div class="infolavoro">
                                    {{ dottore.info }}
                                </div>
                                <div class="social">
                                    <span class="facebook">
                                        <font-awesome-icon icon="fa-brands fa-square-facebook" />
                                    </span>
                                    <span class="twitter">
                                        <font-awesome-icon icon="fa-brands fa-square-twitter" />
                                    </span>
                                    <span class="instagram">
                                        <font-awesome-icon icon="fa-brands fa-square-instagram" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="sezione3">
                <div class="contenitoremain">
                    <div class="descrizione infodottore" v-for="info in store.servizi">
                        <img :src="info.img" :alt="info.titolo">
                        <descrizione :titolo="info.titolo" :descrizione="info.descrizione"></descrizione>
                    </div>
                    <div class="servizi">
                        <div class="servizidottore" v-for="icone in store.serviziDottore">
                            <icone :img="icone.img" :titolo="icone.titolo" :descrizione="icone.descrizione"></icone>
                        </div>
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

.sezione2 {
    background-color: #f7f7f7;
    padding-top: 80px;
    padding-bottom: 80px;

    .carddottore {
        display: flex;
    }

    .immaginedottore img {
        width: 100%;
        padding-bottom: 40px;
    }

    .card {
        margin-left: 20px;
        background-color: white;
        margin-top: 80px;
    }

    .didascalia {
        padding-left: 20px;
        padding-right: 20px;

    }

    .nome {
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    .infolavoro {
        margin-top: 30px;
        line-height: 30px;
        margin-bottom: 30px;
    }

    .social {
        font-size: 35px;
        padding-bottom: 30px;
    }

    .twitter {
        margin-left: 10px;
        margin-right: 10px;
        color: #54acee
    }

    .facebook {
        color: #3c5998;
    }

    .instagram {
        color: #3f729b
    }
}

.sezione3 {
    padding-top: 80px;
    .servizi{
        display: flex;
        flex-wrap: wrap;
    }
    .servizidottore{
        width: calc(100% / 3 );
        text-align: center;
        margin-top: 80px;
    }
}
</style>

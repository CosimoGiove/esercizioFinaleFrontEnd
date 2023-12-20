<script>
import { store } from './store'
import descrizione from './components/descrizione.vue';
import icone from './components/icone.vue';
import VisitaLeStrutture from './components/VisitaLeStrutture.vue'
import ServiziPrincipali from './components/ServiziPrincipali.vue';
export default {
    name: "_main",
    components: {
        icone,
        descrizione,
        VisitaLeStrutture,
        ServiziPrincipali,
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
        <section>
            <div class="sezione4">
                <div class="contenitoremain">
                    <div class="descrizione infodottore" v-for="info in store.strutture">
                        <img :src="info.img" :alt="info.titolo">
                        <div v-for="struttura in store.strutture">
                            <VisitaLeStrutture :immagine="struttura.img" :titolo="struttura.titolo"
                                :descrizione="struttura.descrizione"></VisitaLeStrutture>
                        </div>
                        <div class="play">
                            <img src="../public/img/play-icon.png" alt="scrivania">
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
        <section class="sezione7">
            <div v-for="carosello in store.imgcarosello" class="iconecarosello">
                <img :src="carosello.img" alt="">
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
}

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
        padding: 50px 50px;
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
    .btninvio{
        width: 100%;
        margin-top: 20px;
        padding: 10px 0px;
        color: white;
        text-transform: uppercase;
        background-color: #3aafbf;
        border: none;
    }
}
.sezione7{
    display: flex;
    justify-content: center;
    background-image: url(../public/img/rgb-gradient-bar-for-logo-carrasel.jpg);

}
</style>

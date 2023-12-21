<script>
import descrizione from './descrizione.vue';
import { store } from '../store';
export default {
    name: "sezione2main",
    components: {
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
                    <div class="contenuto">
                        <font-awesome-icon icon="fa-regular fa-bookmark" />
                    </div>
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
</template>
<style lang="scss" scoped>
.contenitoremain {
    width: 60%;
    margin-top: 80px;
    margin-bottom: 80px;
    margin: 0 auto;
    perspective: 900px;
}

.descrizione {
    text-align: center;
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

    .card:hover {
        cursor: pointer;
        transform: translateZ(80px);
        box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.5);
    }
    .card:hover .contenuto{
        opacity: 1;
        font-size: 45px;
        color: green;
    }
    .card:hover .immaginedottore img{
        border-top: 4px solid  green;
    }

    .contenuto {
        position: absolute;
        top: 0px;
        left: 5px;
        opacity: 0;
    }

    .card {
        margin-left: 20px;
        background-color: white;
        margin-top: 80px;
        position: relative;
        transform-style: preserve-3d;
        transition: 0.5s;
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
        color: #a2aaaf;
    }

    .social {
        font-size: 35px;
        padding-bottom: 30px;
        cursor: pointer;
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
</style>
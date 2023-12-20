<script>
import { store } from '../store';
export default {
    name: "sezione1footer",
    data() {
        return {
            store,
            piedipagina: [
                {
                    img: "./public/img/medical_logo_2x_dark.png",
                    descrizione: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quas atque deleniti. Tempore sed ipsa, expedita laboriosam fugit nisi alias voluptatem minus magni similique sapiente facilis illum ex. Sequi, quis?",
                    contatto: "learn more about us",
                }
            ],
            contatto: [
                {
                    titolo: "contact information",
                    luogo: "121 King Street,London United Kingdom",
                    telefono: "1.800.458.556",
                }
            ],
            reparto: [
                {
                    titolo: "Medical departments",
                    reparti: ["Cardiology", "Pediactrics", "Diabetes Care", "Pre-Natal Care", "Ultrasound Echocardiogram"
                    ]
                }
            ],
        }
    }
}

</script>
<template>
    <section class="sezione8">
        <div class="piedipagina">
            <div class="piedipaginasx">
                <div v-for="footer in piedipagina">
                    <img :src="footer.img" alt="">
                    <div class="descrizione">
                        <p>{{ footer.descrizione }}</p>
                    </div>
                    <div class="contatto">
                        {{ footer.contatto }}
                    </div>
                    <div class="iconesocial">
                        <span class="facebook">
                            <font-awesome-icon icon="fa-brands fa-square-facebook" />
                        </span>
                        <span class="twitter">
                            <font-awesome-icon icon="fa-brands fa-square-twitter" />
                        </span>
                        <span class="youtube">
                            <font-awesome-icon icon="fa-brands fa-youtube" />
                        </span>
                        <span class="instagram">
                            <font-awesome-icon icon="fa-brands fa-square-instagram" />
                        </span>
                    </div>
                </div>
            </div>
            <div class="piedipaginacentrale">
                <div v-for="footer in contatto">
                    <div class="titolo">
                        {{ footer.titolo }}
                        <hr>
                    </div>
                    <div class="contenitorecontatto">
                        <span class="iconacontatto">
                            <font-awesome-icon icon="fa-solid fa-location-dot" />
                        </span>
                        <span class="luogo">{{ footer.luogo }}</span>
                    </div>
                    <div>
                        <span class="iconacontatto">
                            <font-awesome-icon icon="fa-solid fa-phone" />

                        </span>
                        <span class="telefono">
                            {{ footer.telefono }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="piedipaginadx">
                <div v-for="reparti in reparto">
                    <div class="titolo">
                        {{ reparti.titolo }}
                        <hr>
                    </div>
                    <ul>
                        <li v-for="repartoSpecifico in reparti.reparti">
                            <div>
                                <font-awesome-icon icon="fa-regular fa-circle-right" class="freccia" />
                                <span class="repartospecifico">
                                    {{ repartoSpecifico }}
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <button class="btnfooter">view our departments</button>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.piedipagina {
    display: flex;
    justify-content: start;
    width: 95%;
    margin: 80px auto;

    .btnfooter {
        text-transform: uppercase;
        padding: 10px 30px;
        margin-top: 20px;
        border: 1px solid black;
        color: #333333;
        background-color: white;
    }

    .piedipaginasx {
        display: flex;
        width: 33%;
    }

    .luogo,
    .telefono,
    .repartospecifico {
        color: #9d9d9d;
        margin-left: 10px;
    }

    .freccia {
        background-color: #3aafbf;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        vertical-align: middle;
    }

    .piedipaginadx {
        margin-left: 200px;
    }

    .piedipaginacentrale {
        margin-left: 20px;
    }

    .iconesocial {
        font-size: 30px;
        margin-top: 30px;
    }

    .facebook {
        color: #3c5998;
    }

    .twitter {
        color: #54acee;
        margin: 0px 10px;
    }

    .youtube {
        color: #cd201f;
    }

    .instagram {
        color: #3f729b;
        margin-left: 10px;
    }

    .descrizione {
        border-bottom: 1px solid lightgrey;
        margin-top: 20px;
        line-height: 30px;
        color: #a0a0a0;
    }

    .descrizione p {
        padding-bottom: 20px;
        padding-right: 40px;
    }

    .contatto {
        text-transform: uppercase;
        margin-top: 10px;
    }

    img {
        width: 300px;
    }

    .titolo {
        text-transform: uppercase;
        color: #333c4e;
        font-size: 20px;
    }

    .iconacontatto {
        color: #3aafbf;
        margin-right: 5px;
    }

    .contenitorecontatto {
        margin: 20px 0px;
    }

    hr {
        width: 30%;
        margin-top: 20px;
        border: 2px solid #3aafbf
    }

    ul li {
        list-style: none;
        margin-top: 20px;
    }
}
</style>
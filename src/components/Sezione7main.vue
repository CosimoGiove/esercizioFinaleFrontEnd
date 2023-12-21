<script>
import { store } from '../store';
export default {
    name: "sezione7main",
    data() {
        return {
            store,
        }
    }
}

</script>
<template>
    <section class="sezione7">
        <!--carosello di immagini-->
        <div v-for="carosello in store.imgcarosello" class="iconecarosello">
            <img :src="carosello.img" alt="">
        </div>
    </section>
</template>
<style lang="scss" scoped>
.sezione7 {
    display: flex;
    justify-content: space-between;
    background-image: url(../public/img/rgb-gradient-bar-for-logo-carrasel.jpg);
    overflow: hidden;

    .iconecarosello {
        animation: carosello 5s infinite;
        position: relative;
    }

    @keyframes carosello {
        0% {
            left: 1px;
        }

        50% {
            left: 100px;
        }

        100% {
            left: 1px;
        }


    }

}</style>
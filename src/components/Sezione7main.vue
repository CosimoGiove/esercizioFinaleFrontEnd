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
        <div v-for="carosello in store.imgcarosello" class="iconecarosello">
            <img :src="carosello.img" alt="">
        </div>
    </section>
</template>
<style lang="scss" scoped>
.sezione7 {
    display: flex;
    justify-content: center;
    background-image: url(../public/img/rgb-gradient-bar-for-logo-carrasel.jpg);

}
</style>
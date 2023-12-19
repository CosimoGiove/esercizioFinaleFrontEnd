<script>
export default {
    name: "icone",
    props: ["img", "titolo", "descrizione"]
}
</script>
<template>
        <div class="contenitore">
            <div class="immagine">
                <img :src="img" :alt="titolo">
            </div>
            <div class="titolo">
                {{ titolo }}
            </div>
            <div class="descrizione">
                {{ descrizione }}
            </div>
        </div>
</template>
<style lang="scss" scoped>
.immagine{
    text-align: center;
}
.titolo{
    text-transform: uppercase;
    margin-top: 10px;
}
.descrizione{
    line-height: 35px;
    margin-top: 20px;
}
.contenitore{
    padding-right: 20px;
}

</style>
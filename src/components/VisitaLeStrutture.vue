<script>
export default {
    name: "strutture",
    props: ["immagine", "titolo", "descrizione"]
}
</script>
<template>
    <div class="titolo">
        {{ titolo }}
        <div class="stile"></div>
    </div>
    <div class="descrizione">
        {{ descrizione }}
    </div>
</template>

<style lang="scss" scoped>
.stile {
    border: 1px solid white;
    width: 30%;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
}

.titolo {
    font-size: 35px;
    text-transform: uppercase;
}

.descrizione {
    width: 60%;
    margin: 0 auto;
    line-height: 40px;
}
</style>
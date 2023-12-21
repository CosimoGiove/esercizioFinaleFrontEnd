<script>
export default {
    name: "icone",
    props: ["img", "titolo", "descrizione"]
}
</script>
<template>
    <div class="contenitore">
        <div class="prospettiva">
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
    </div>
</template>
<style lang="scss" scoped>
.immagine {
    text-align: center;
}

.titolo {
    text-transform: uppercase;
    margin-top: 10px;
}

.descrizione {
    line-height: 35px;
    margin-top: 20px;
    color: #a2aaaf;
}

.contenitore {
    padding-right: 20px;
    perspective: 900px;
    position: relative;
    transform-style: preserve-3d;
    transition: 0.5s;
}
.prospettiva{
    padding-top: 10px;
    padding-left: 4px;
}

.contenitore:hover .prospettiva{
    transform: translateZ(50px);
    box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
    cursor: pointer;
    border-radius: 10px;
}</style>
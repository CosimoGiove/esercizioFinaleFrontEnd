<script>
export default {
    name: "descrizione",
    props: ["titolo", "descrizione"]
}
</script>

<template>
    <div class="benvenuto">
        <h2>{{ titolo }}</h2>
        <div class="stile">

        </div>
        <p>
            {{ descrizione }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
.benvenuto h2 {
    font-size: 35px;
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;

}

.benvenuto p {
    line-height: 40px;
    font-size: 17px;
}

.benvenuto {
    width: 60%;
    margin: 0 auto;
}

.stile {
    border: 1px solid #d1d1d1;
    width: 40%;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>
<script>
export default {
    name: "servizi principali",
    props:["titolo","img","testo"],
}
</script>

<template>
        <h4>
            {{ titolo}} 
        </h4>
        <div>
            <img :src="img" alt="weve">
        </div>
        <div>
            {{ testo }}
        </div>
</template>

<style lang="scss" scoped>
h4{
    font-size: 20px;
    margin-bottom: 10px;
}
</style>
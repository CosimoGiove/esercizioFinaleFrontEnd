<script>
export default {
    name: "servizi principali",
    props: ["titolo", "img", "testo"],
}
</script>

<template>
    <h4>
        {{ titolo }}
    </h4>
    <div>
        <img :src="img" alt="weve">
    </div>
    <div>
        {{ testo }}
    </div>
</template>

<style lang="scss" scoped>
h4 {
    font-size: 20px;
    margin-bottom: 10px;
}

img {
    animation: immagine 4s infinite;
    position: relative;
}

@keyframes immagine {
    0% {}

    10% {
        left: 20px;

    }

    20% {
        bottom: 10px;

    }

    30% {
        top: 10px;

    }

    40% {
        bottom: 10px;
    }
    50% {
        right: 20px;

    }

    60% {
        bottom: 10px;

    }

    70% {
        top: 10px;

    }

    80% {
        bottom: 10px;
    }

}</style>
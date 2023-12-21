<script>
import navigazione from './components/navigazione.vue';
export default {
    name: "_header",
    components: {
        navigazione,
    },
    data() {
        return {
            logo: "./public/img/healt_logo.png",
            nav: ["Home", "About", "Departments", "articles"]

        }
    }
}

</script>

<template>
    <header>
        <div class="contenitoreheader">
            <!--logo-->
            <div>
                <img :src="logo" alt="logo">
            </div>
            <!--nav-->
            <div>
                <div class="nav" v-for="navs in nav">
                    <navigazione :nav="navs"></navigazione>
                </div>
                <button>Make Appointment </button>
            </div>
        </div>
        <!--jumbotron-->
        <div class="jumbotron">
            <h1>
                <span>Caring </span>
                <span class="stile">For Life</span>

            </h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatum nam consectetur voluptatem,
                animi,voluplatum
            </p>
            <!--bottone-->
            <button class="bottone">Learn more</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-image: url(../public/img/header-image-homepage.jpg);
    color: white;
    background-position: top;
    background-size: cover;
    height: 650px;
}

.contenitoreheader {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
    align-items: center;
    padding-top: 20px;

    .nav {
        display: inline-block;
        margin-left: 20px;
        text-transform: uppercase;
        margin-right: 20px;

    }
}

.stile {
    color: #3aafbf;
}

button {
    padding: 15px 50px;
    background-color: #3aafbf;
    color: white;
    border: none;
    text-transform: uppercase;
    cursor: pointer;


}

.jumbotron {
    width: 60%;
    margin: 0 auto;
    margin-top: 100px;
}

img {
    width: 220px;
}

.jumbotron p {
    width: 70%;
    margin: 30px 0px;
    font-size: 18px;
}

.jumbotron h1 {
    font-size: 60px;
}

.bottone {
    animation: bottone 5s infinite;
}

/* keyframe */
@keyframes bottone {
    0% {
        transform: rotate(0deg);
    }

    20% {
        transform: rotate(10deg);
        box-shadow: 3px 3px 3px 3px black;
    }

    40% {
        transform: rotate(0deg);
        box-shadow: 3px 3px 3px 1px black
    }

    60% {
        transform: rotate(-10deg);
        box-shadow: 3px 3px 3px 3px black;
    }

    100% {
        transform: rotate(0deg);
    }

}
</style>

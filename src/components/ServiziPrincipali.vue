<script>
export default {
    name: "servizi principali",
    data() {
        return {
            servizi: [
                {
                    titolo: "Emergency Care",
                    img: "../../public/img/wave-divider.png",
                    testo: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ut aspernatur nobis ipsam ad quos, voluptate consequatur modi nostrum mollitia doloribus deleniti autem aliquid obcaecati laborum, expedita necessitatibus nulla voluptatibus!",
                },
                // {
                //     titolo: "Emergency Care",
                //     img: "../../public/img/wave-divider.png",
                //     testo: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ut aspernatur nobis ipsam ad quos, voluptate consequatur modi nostrum mollitia doloribus deleniti autem aliquid obcaecati laborum, expedita necessitatibus nulla voluptatibus!",
                // },
                // {
                //     titolo: "Emergency Care",
                //     img: "./public/img/wave-divider.png",
                //     testo: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ut aspernatur nobis ipsam ad quos, voluptate consequatur modi nostrum mollitia doloribus deleniti autem aliquid obcaecati laborum, expedita necessitatibus nulla voluptatibus!",
                // },
            ]
        }
    }
}
</script>

<template>
    <div v-for="servizio in servizi ">
        <h4>
            {{ servizio.titolo}} 
        </h4>
        <div>
            <img :src="servizio.img" alt="weve">
        </div>
        <div>
            {{ servizio.testo }}
        </div>
        <button>Learn more</button>
    </div>
</template>

<style lang="scss" scoped>
img{
   background-color: blue;
}
</style>
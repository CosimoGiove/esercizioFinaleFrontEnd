import { reactive } from "vue";
export const store = reactive({
    info: [
        {
            titolo: "Welcome to Avada Health",
            descrizione: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptas voluptatum nam consecteturvoluptatem,animi,Voluptas voluptatum nam consectetur"

        }
    ],
    icona: [
        {
            immagine: "./public/img/icon-1.png",
            titolo: "Same day appointments",
            descrizione: "sed ut perspiciatis unde omnis iste natus error sit voluptam ",
        },
        {
            immagine: "./public/img/icon-2.png",
            titolo: "Same day appointments",
            descrizione: "sed ut perspiciatis unde omnis iste natus error sit voluptam ",
        },
        {
            immagine: "./public/img/icon-3.png",
            titolo: "Same day appointments",
            descrizione: "sed ut perspiciatis unde omnis iste natus error sit voluptam",
        },
        {
            immagine: "./public/img/icon-4.png",
            titolo: "Same day appointments",
            descrizione: "sed ut perspiciatis unde omnis iste natus error sit voluptam",
        },
    ],
    Dottore: [
        {
            img:"./public/img/icon-5.png",
            titolo: "Meet our doctors",
            descrizione: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptas voluptatum nam consecteturvoluptatem,animi,Voluptas voluptatum nam consectetur,Voluptas voluptatum nam consectetur"
        }
    ],
    servizi: [
        {
            img:"./public/img/icon-6.png",
            titolo: "our health services",
            descrizione: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptas voluptatum nam consecteturvoluptatem,animi,Voluptas voluptatum nam consectetur,animi,Voluptas voluptatum nam consectetur"
        }
    ],
    serviziDottore:[
        {
            img:"./public/img/icon-14.png",
            titolo:"dental implants",
            descrizione:"sed ut perspiciatis unde omnis iste natus error sit voluptam sit amet consectetur adipisicing",
        },
        {
            img:"./public/img/icon-15.png",
            titolo:"medicine research",
            descrizione:"sed ut perspiciatis unde omnis iste natus error sit voluptam sit amet consectetur adipisicing",
        },
        {
            img:"./public/img/icon-16.png",
            titolo:"blood bank",
            descrizione:"sed ut perspiciatis unde omnis iste natus error sit voluptam sit amet consectetur adipisicing",
        },
        {
            img:"./public/img/icon-11.png",
            titolo:"pharmaceutical advice",
            descrizione:"sed ut perspiciatis unde omnis iste natus error sit voluptam sit amet consectetur adipisicing",
        },
        {
            img:"./public/img/icon-12.png",
            titolo:"reabilitation center",
            descrizione:"sed ut perspiciatis unde omnis iste natus error sit voluptam sit amet consectetur adipisicing",
        },
        {
            img:"./public/img/icon-13.png",
            titolo:"mediacal counseling",
            descrizione:"sed ut perspiciatis unde omnis iste natus error sit voluptam sit amet consectetur adipisicing",
        },
    ]
})
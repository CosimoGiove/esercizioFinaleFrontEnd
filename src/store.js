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
    InfoDottore: [
        {
            img:"./public/img/icon-5.png",
            titolo: "Meet our doctors",
            descrizione: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptas voluptatum nam consecteturvoluptatem,animi,Voluptas voluptatum nam consectetur,Voluptas voluptatum nam consectetur"
        }
    ]
})
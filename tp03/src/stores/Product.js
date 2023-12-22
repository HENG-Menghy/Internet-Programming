import prodImg1 from '../assets/img/Cat-011.png'
import prodImg2 from '../assets/img/Cms-031.jpg'
import prodImg3 from '../assets/img/Cms-041.png'

import img1 from '../assets/img/cat-13 1.png'
import img2 from '../assets/img/cat-11 1.png'
import img3 from '../assets/img/cat-12 1.png'
import img4 from '../assets/img/cat-9 1.png'
import img5 from '../assets/img/cat-3 1.png'
import img6 from '../assets/img/cat-4 1.png'
import img7 from '../assets/img/cat-1 4.png'
import img8 from '../assets/img/cat-15 1.png'
import img9 from '../assets/img/cat-14 1.png'
import img10 from '../assets/img/cat-7 1.png'

import proimg1 from '../assets/img/18 1.png'
import proimg2 from '../assets/img/1 902.png'
import proimg3 from '../assets/img/3 389454.png'
import proimg4 from '../assets/img/5 7.png'
import proimg5 from '../assets/img/7 1.png'
import proimg6 from '../assets/img/8 1.png'
import proimg7 from '../assets/img/9 1.png'
import proimg8 from '../assets/img/11 1.png'
import proimg9 from '../assets/img/12 1.png'
import proimg10 from '../assets/img/16 1.png'

export default{

    data(){
        return{
            Category:[
                {
                    id:1,
                    img: img1,
                    itemCount: "14 items",
                    ItemName: "Cake & Milk",
                    bgColor: "#F2FCE4"
                },
                {
                    id:2,
                    img: img2,
                    itemCount: "17 items",
                    ItemName: "Peach",
                    bgColor: "#FFFCEB"
                },
                {
                    id:3,
                    img: img3,
                    itemCount: "21 items",
                    ItemName: "Oganic Kiwi",
                    bgColor: "#ECFFEC"
                },
                {
                    id:4,
                    img: img4,
                    itemCount: "68 items",
                    ItemName: "Red Apple",
                    bgColor: "#FEEFEA"
                },
                {
                    id:5,
                    img: img5,
                    itemCount: "34 items",
                    ItemName: "Snack",
                    bgColor: "#FFF3EB"
                },
                {
                    id:6,
                    img: img6,
                    itemCount: "25 items",
                    ItemName: "Black Plum",
                    bgColor: "#FFF3FF"
                },
                {
                    id:7,
                    img: img7,
                    itemCount: "65 items",
                    ItemName: "Vegetables",
                    bgColor: "#F2FCE4"
                },
                {
                    id:8,
                    img: img8,
                    itemCount: "33 items",
                    ItemName: "Headphone",
                    bgColor: "#FFFCEB"
                },
                {
                    id:9,
                    img: img9,
                    itemCount: "54 items",
                    ItemName: "Cake & Milk",
                    bgColor: "#F2FCE4"
                },
                {
                    id:10,
                    img: img10,
                    itemCount: "63 items",
                    ItemName: "Orange",
                    bgColor: "#FFF3FF"
                },
            ],
            Promotion:[
                {
                    img: prodImg3,
                    text: "Everyday Fresh & Clean with Our Products",
                    bgButton: "#3BB77E",
                    bgColor: "#F0E8D5"
                },
                {
                    img: prodImg1,
                    text: "Make your Breakfast Healthy and Easy",
                    bgButton: "#3BB77E",
                    bgColor: "#F3E8E8"
                },
                {
                    img:prodImg2,
                    text: "The best Organic Products Online",
                    bgButton: "#FDC040",
                    bgColor: "#E7EAF3"
                },
            ],
            ProItems:[
                {
                    img: proimg1,
                    text: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                    id:1,
                    price: 21,
                    dis: "17",
                    tag: "-17%",
                    bgColor: "#3BB77E",
                    show: "active",
                },
                {
                    img: proimg2,
                    text: "All Natural Italian-Style Chicken Meatballs",
                    id:2,
                    price:Math.ceil(Math.random()*100),
                    dis:Math.ceil(Math.random()*100),
                    tag: "Hot",
                    bgColor: "#FD6E6E",
                    show: "active",
                },
                {
                    id:3,
                    img: proimg3,
                    price:Math.ceil(Math.random()*100),
                    text: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
                    bgColor: "#FDC040",
                    dis:Math.ceil(Math.random()*100),
                    tag: "Sale",
                    show: "active",
                },
                {
                    id:4,
                    img: proimg4,
                    price:Math.ceil(Math.random()*100),
                    text: "Foster Farms Takeout Crispy Classic Buffalo Wings",
                    dis: "17",
                    tag: "-17%",
                    show: "",
                },
                {
                    id:5,
                    img: proimg5,
                    price:Math.ceil(Math.random()*100),
                    text: "Blue Diamond Almonds Lightly Salted Vegetables",
                    dis: "17",
                    tag: "-17%",
                    show: "",
                },
                {
                    id:6,
                    img: proimg6,
                    price:Math.ceil(Math.random()*100),
                    text: "Chobani Complete Vanilla Greek Yogurt",
                    dis: "17",
                    tag: "-17%",
                    show: "",
                },
                {
                    id:7,
                    img: proimg7,
                    price:Math.ceil(Math.random()*100),
                    text: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
                    dis:Math.ceil(Math.random()*100),
                    tag: "Sale",
                    show: "active",
                    bgColor: "#F6C851",
                },
                {
                    id:8,
                    img: proimg8,
                    price:Math.ceil(Math.random()*100),
                    text: "Encore Seafoods Stuffed Alaskan Salmon",
                    dis:Math.ceil(Math.random()*100),
                    tag: "",
                    show: "",
                },
                {
                    id:9,
                    img: proimg9,
                    price:Math.ceil(Math.random()*100),
                    text: "Gorton’s Beer Battered Fish Fillets with soft paper",
                    dis: "17",
                    tag: "",
                    show: "",
                },
                {
                    id:10,
                    img: proimg10,
                    price:Math.ceil(Math.random()*100),
                    text: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
                    dis:Math.ceil(Math.random()*100),
                    tag: "Hot",
                    show: "active",
                    bgColor: "#FD6E6E"
                },
            ],
        }
        
    }
}
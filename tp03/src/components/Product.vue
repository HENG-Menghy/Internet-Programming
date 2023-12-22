<template>
    <div class="prod-con">
        <div class="prod-imgCon">
            <img :src="img" alt="">
        </div>
        <div class="prod-text" >
            <p class="p1">Hodo Foods</p>
            <RouterLink class="routerlink" :to="`/products/${id}`">
                <p class="p2">{{ text }}</p>
            </RouterLink>
            <div class="prod-star">
                <img v-for="col in getStar()" :src="col" alt="">
                <p class="p6">(4.0)</p>
            </div>
            <p class="p3">500 gram</p>
            <div class="prod-price">
                <div class="wrapper">
                    <p class="p4">${{ price }}</p>
                    <p v-if="dis!=''" class="p5">${{ Math.ceil(price*(1-parseInt(dis)/100)) }}</p>
                </div>
                <Count></Count>
            </div>
        </div>
        <div class="prod-disp" :class="show" :style="{backgroundColor: bgColor}">
            <p>{{ tag }}</p>
        </div>
    </div>
</template>

<script>
    import Count from './Count.vue';
    import star1 from '../assets/img/001-star1.png'
    import star2 from '../assets/img/001-star5.png'
    import Product from '../stores/Product.js';
import { RouterLink } from 'vue-router';

    export default{
        components:{
            Count,
            RouterLink
        },

        data(){
            return{
                proId: null,
                pro: null,
            }
        },
        
        props:{
            img: String,
            text:String,
            dis:Number,
            show:String,
            bgColor: String,
            tag:String,
            rate_pro: {
                type: Number,
                default: 4,
            },
            price:Number,
            id:Number,
        },
        methods:{
            getStar(){
                let star= [];
                for(let i=0;i<5;i++){
                    if(i<this.rate_pro){
                        star.push(star1);
                    }
                    else{
                        star.push(star2);
                    }
                }
                return star;
            }
        },

    }
</script>
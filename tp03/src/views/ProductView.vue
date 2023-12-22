<template>
    <div class="productView-con">
        <div class="path">
            <p>Home</p>
            <img src="../assets/img/fi-rs-angle-small-right 2.png" alt="">
            <p>Vegetables & tubers</p>
            <img src="../assets/img/fi-rs-angle-small-right 2.png" alt="">
            <p>{{ product.text }}</p>
        </div>
        <productInfo :imgSrc="product.img" :title="product.text" :price="product.price"></productInfo>
        <div class="similar-con">
            <div class="icon-con">
                <svg @click="
                    previousItem(), ScrollLeft()"
                
                xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                <g clip-path="url(#clip0_1584_1066)">
                    <path d="M18.3172 5.69784H4.92466L9.33483 2.40484L7.44113 0.990845L1.6917 5.28384C1.18956 5.6589 0.907471 6.16752 0.907471 6.69784C0.907471 7.22817 1.18956 7.73679 1.6917 8.11184L7.44113 12.4048L9.33483 10.9908L4.92466 7.69784H18.3172V5.69784Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_1584_1066">
                    <rect width="18.7496" height="13" fill="white" transform="translate(0.410278 0.391235)"/>
                    </clipPath>
                </defs>
                </svg>
            </div>
            <div class="hold" :style="{transform: `translateX(${translate}px)`}">
                <router-link 
                    v-for="(product) in ProItems"
                    :to="`/products/${product.id}`"
                    >
                    <div class="img-con">
                        <img :src="product.img" alt="">
                    </div>
                </router-link> 
            </div>
            <div class="icon-con">
                <svg @click="nextItem(), scrollRight()" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <g clip-path="url(#clip0_1584_1071)">
                        <path d="M12.414 5.31992L8.121 1.02692L6.707 2.44092L10 5.73392H0V7.73392H10L6.707 11.0269L8.121 12.4409L12.414 8.14792C12.7889 7.77286 12.9996 7.26424 12.9996 6.73392C12.9996 6.20359 12.7889 5.69497 12.414 5.31992Z" fill="#7E7E7E"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1584_1071">
                        <rect width="13" height="12" fill="white" transform="translate(0 0.733887)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            
        </div>
        <Tab></Tab>
    </div>
</template>

<script>
    import productInfo from "../components/ProductInfo.vue"
    import Tab from "../components/Tab.vue";
    import Product from "../stores/Product.js";
    import Similar from "../components/SimilarCon.vue"
    import { RouterView,RouterLink } from "vue-router";

    
    export default{
        mixins:[Product],
        components:{
            productInfo,
            Tab,
            Similar,
            RouterView,
        },

        data(){
            return{
                productId: null,
                product: null,
                translate: 0,
            }
        },

        created(){
            this.productId = parseInt(this.$route.params.productId);
            this.product = this.ProItems.find(pro => pro.id === this.productId);
        },
        updated(){
            this.productId = parseInt(this.$route.params.productId);
            this.product = this.ProItems.find(pro => pro.id === parseInt(this.productId));
        },

        methods:{
            nextItem(){
                if(this.productId<this.ProItems.length) this.productId++;
                this.$router.push(`${this.productId}`);
            },
            previousItem(){
                if(this.productId>1)this.productId--;
                this.$router.push(`${this.productId}`);
            },
            scrollRight(){
                let content = document.querySelector('.hold');
                content.scrollLeft += 117.4;
                
            },
            ScrollLeft(){
                let content = document.querySelector('.hold');
                content.scrollLeft -= 117.4;
            },
        }
    }
</script>
<template>
    <div class="container">
        <SignUp></SignUp>
        <Menu text="Featured Categories"></Menu>
        <div class="cat-dis">
            <RouterLink class="routerlink" v-for="cat in Category" :to="`/categories/${cat.id}`">
                <Categories :style="{backgroundColor: cat.bgColor}" :img="cat.img" :itemCount="cat.itemCount" :itemName="cat.ItemName"></Categories>
            </RouterLink>
        </div>
        <div class="pro-dis">
            <Promotion v-for="pro in Promotion" :text="pro.text" :bgButton="pro.bgButton" :style="{backgroundColor: pro.bgColor, backgroundImage: `url(${pro.img})`}"></Promotion>
        </div>
        <Menu text="Popular Products"></Menu>
        <div class="prod-dis">
            <Product v-for="item in ProItems" :id="item.id" :bgColor="item.bgColor" :img="item.img" :text="item.text" :show="item.show" :dis="item.dis" :tag="item.tag" :price="item.price"></Product>
        </div>
    </div>
</template>

<script>
    import Store from "../stores/Product"

    import Menu from '../components/Menu.vue'
    import Categories from '../components/Category.vue'
    import Promotion from '../components/Promotion.vue'
    import Product from '../components/Product.vue'
    import SignUp from '../components/SignUp.vue'
    import { RouterLink } from "vue-router"

    export default{
        mixins: [Store],
        components:{
            Menu,
            Categories,
            Promotion,
            Product,
            SignUp,
        },
    }
</script>
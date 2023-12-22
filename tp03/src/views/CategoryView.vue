<template>
    <HotDeal :title="category.ItemName"></HotDeal>
</template>

<script>
    import HotDeal from '../components/HotDeal.vue'
    import Product from '../stores/Product.js'

    export default{
        mixins:[Product],
        components:{
            HotDeal,
        },

        data(){
            return{
                categoryid: null,
                category: null,
            }
        },

        created(){
            this.categoryid = this.$route.params.categoriesId;
            this.category = this.Category.find( cat => cat.id === parseInt(this.categoryid));
        },
    }
</script>
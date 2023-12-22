<template>
    <div class="hotdeal-con">
        <p>{{ title }}</p>
        <div class="path">
            <p>Home</p>
            <img src="../assets/img/fi-rs-angle-small-right 2.png" alt="">
            <p>Categories</p>
            <img src="../assets/img/fi-rs-angle-small-right 2.png" alt="">
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<script lang="ts">
    export default{
        props:{
            title:{
                type:String,
                default: "Coke & Milk",
            },
        }
    }
</script>
<template>
    <div class="container">
        <div class="box1">
            <div>
                <h3>Everyday Fresh & Clean with Our Products</h3>
                <button-component id="color-1"/>
            </div>
            <img src="/Picture11.png">
        </div>
        <div class="box2">
            <div>
                <h3>Make your Breakfast Healthy and Easy</h3>
                <button-component id="color-1"/>
            </div>
            <img src="/Picture12.png">
        </div>
        <div class="box3">
            <div>
                <h3>The best Organic Products Online</h3>
                <button-component id="color-2"/>
            </div>
            <img src="/Picture13.png">
        </div>
    </div>
</template>

<script></script>

<style scoped>
    .container {
        display: flex;
        flex-wrap: wrap;
    }
    .box1, .box2, .box3{
        position: relative;
        width: 330px;
        height: 170px;
        border-radius: 10px;
        padding: 10px 20px;
        margin: 10px;
    }
    .box1 {
        background: #F0E8D5;
    }
    .box2 {
        background: #F3E8E8;
    }
    .box3 {
        background: #E7EAF3;
    }
    .box1 > div, .box2 > div, .box3 > div {
        position: absolute;
        width: 170px;
    }
    .box2 #color-1, #color-2 {
        margin-top: 25px;
    }
    #color-1 {
        background-color: #3BB77E;
    }
    #color-2 {
        background-color: #FDC040;
    }
    img {
        margin-top: 30px;
        float: right;
        height: 9rem;
    }
</style>
<template>
    <div id="wrapper">
        <div id="container" v-for="item in Foods">
            <img :src="item.path">
            <h6>{{ item.name }}</h6>
            <p>{{ item.desc }}</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                Foods: [
                    {path: '/Picture1.png', name: 'Hamburger', desc: '14 items'},
                    {path: '/Picture2.png', name: 'Peach', desc: '17 items'},
                    {path: '/Picture3.png', name: 'Oganic Kiwi', desc: '21 items'},
                    {path: '/Picture4.png', name: 'Red Apple', desc: '68 items'},
                    {path: '/Picture5.png', name: 'Snack', desc: '34 items'},
                    {path: '/Picture6.png', name: 'Black plum', desc: '25 items'},
                    {path: '/Picture7.png', name: 'Vegetables', desc: '65 items'},
                    {path: '/Picture8.png', name: 'Headphone', desc: '34 items'},
                    {path: '/Picture9.png', name: 'Cake & Milk', desc: '54 items'},
                    {path: '/Picture10.png', name: 'Orange', desc: '63 items'}
                ]
            }
        }
    }
</script>
<style scoped>
    #wrapper {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 30px;
    }
    #container {
        width: 80px;
        height: 100px;
        padding: 10px;
        border-radius: 8px;
        margin: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #F2FCE4;
    }
    img {
        margin-bottom: 15px;
        height: 5rem;
    }
    h6 {
        margin-top: -10px;
    }
    p {
        margin-top: -20px;
        font-size: 8px;
        font-weight: 400;
        color: #d2d2d2;
    }
</style>
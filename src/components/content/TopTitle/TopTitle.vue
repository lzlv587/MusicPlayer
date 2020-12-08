<template>
    <div>
        <div class="toptitle-one">
            <div>
                <ul>
                    <li v-for="item in title" :key="item">{{item}}</li>
                </ul>
            </div>

        </div>

        <div class="toptitle-two">

        </div>
    </div>
</template>
<script>
export default {
    name:'TopTitle',
    props:{
        title:{
            type:Array,
            default:[]
        }
    }
}
</script>
<style scoped>
.toptitle-one{
    position: -webkit-sticky; 
    position: sticky; 
    top: 0;
    width:100%;
    z-index: 1000;
    height: 100px;
    background-color: #242424;
}
.toptitle-one>div{
    width: 1100px;
    margin: 0 auto;
}
.toptitle-two{
    position: -webkit-sticky; 
    position: sticky; 
    top: 100px;
    width:100%;
    height: 50px;
    background-color: #C20C0C;
}
</style>
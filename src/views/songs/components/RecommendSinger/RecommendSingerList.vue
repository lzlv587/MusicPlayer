<template>
    <div>
        <div class="singer-item" v-for="(item,index) in SingersData" :key="index">
            <recommend-singer-item :Singer="item"/>
        </div>
    </div>
</template>
<script>
import RecommendSingerItem from './RecommendSingerItem'
export default {
    name:'RecommendSingerList',
    components:{
        RecommendSingerItem
    },
    props:{
        SingersData:Array
    }
}
</script>
<style scoped>
.singer-item{
    margin-top: 20px;
    border: 1px solid rgb(222, 222, 222) !important;
    background: #efefee;
}
.singer-item:hover{
    background-color: #cecece;
}
</style>
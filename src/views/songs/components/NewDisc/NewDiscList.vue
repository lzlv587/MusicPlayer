<template>
    <div class="new-disc-list">
        <ul>
            <li v-for="item in DiscData" :key="item">
                <new-disc-item :DiscItem="item"/>
            </li>
        </ul>
    </div>
</template>
<script>
import NewDiscItem from './NewDiscItem'
export default {
    name:"NewDiscList",
    components:{
        NewDiscItem
    },
    props:{
        DiscData:Array
    }
}
</script>
<style scoped>
.new-disc-list>ul{
    list-style: none;
}
.new-disc-list>ul>li{
    float: left;
    margin-left: 20px;
}
</style>
<template>
    <div class="new-disc-item">
        <div>
            <a href="#" class="new-disc-item-content">
                <img :src="DiscItem.picUrl" class="image" @click="GotoSongList()">
                <p>{{DiscItem.name}}</p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:"NewDiscItem",
    props:{
        DiscItem:Object
    },
    mounted(){
        console.log("测试打印DiscItem")
        console.log(this.DiscItem);
    }
}
</script>
<style scoped>
.new-disc-item{
    /* height: 150px; */
    width: 150px;
}
.new-disc-item-content>img{
    width: 100%;
    height: 100%;
}
.new-disc-item-content>p{
    padding-bottom: 10px;
}
.new-disc-item-content{
    text-decoration-line:none;
    color: #4c4c4c;
}
.new-disc-item:hover{
    color: #909090;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
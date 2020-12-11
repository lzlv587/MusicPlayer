<template>
    <div class="target-song-list">
        <div class="song-list-coverimg">
            <img :src="data.playlist.coverImgUrl" alt="">
        </div>
        <div class="song-list-info">
            <h2>{{data.playlist.name}}</h2>
            <div class="song-list-info-tag">
                <span>标签：</span>
                <el-tag type="info" v-for="item in data.playlist.tags" :key="item">{{item}}</el-tag>
            </div>
            <div class="song-list-info-desc">
                <p>
                {{data.playlist.description}}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'TargetSongShow',
    props:{
        data:Object
    }
}
</script>
<style scoped>
.song-list-coverimg{
    margin:30px 60px;
    height: 200px;
    width:200px;
    padding: 2px 2px;
    border: 5px groove #d1d1d1;
    border-radius: 20px;
    float: left;
}
.song-list-info{
    float: left;
    flex:1;
    padding:10px 10px;
}
.song-list-info-tag>span{
    margin-left: 5px;
}
.song-list-coverimg>img{
    width:100%;
    border-radius: 20px;

}
.song-list-info-desc{
    padding: 5px 10px;
    background-color:#eeedec;
    margin:15px auto;
    height:100px;
    overflow:auto;
    font-size: 11px;
    font-family: "微软雅黑";
}
.target-song-list{
    display: inherit;
}
</style>
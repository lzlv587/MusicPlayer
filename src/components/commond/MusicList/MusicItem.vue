<template>
    <div>
        <div class="music-item" v-for="item in MusicArray" :key="item">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <img :src="item.coverImgUrl" class="image" @click="GotoSongList(item.id)">
                <div style="padding: 14px;height:25px">
                    <span>{{item.name}}</span>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
    name:'MusicItem',
    props:{
        MusicArray:Array
    },
    methods:{
        GotoSongList(id){
            this.$router.push({path:'/songlist',query: {id:id}})
        }
    }
}
</script>
<style scoped>
    .music-item{
        width: 150px;
        float: left;
        margin:15px 33px;
        font-size: 11px;
    }
    .image{
        width: 100%;
        height: 100%;
    }
</style>
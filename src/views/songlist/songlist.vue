<template>
    <div class="songs">
        <top-title  @ChangeRouter="ChangeRouter"/>

        <div class="main">
            <div class="content">
                <div class="content-left">
                    <div class="content-left-top">
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
                                {{data.playlist.description}}
                            </div>

                        </div>
                    </div>

                </div>
                <div class="content-right"></div>
            </div>
        </div>
    </div>
</template>
<script>
import TopTitle from 'components/content/TopTitle/TopTitle'
import {GetBanner,GetMusicList,GetSongListData} from 'network/songs'
import carousel from 'components/commond/carousel/carousel'
export default {
    name:'songs',
    components:{
        TopTitle,
        carousel,
    },
    data(){
        return{
            title:[
                {
                    title:'发现音乐',
                    path:'/songs',
                    child:[
                        {
                            title:'推荐',
                            path:'/recommend'
                        },
                        {
                            title:'排行榜',
                            path:'/recommend'
                        },
                        {
                            title:'歌单',
                            path:'/recommend'
                        },
                        {
                            title:'主播电台',
                            path:'/recommend'
                        }
                    ]
                },
                {
                    title:'我的音乐',
                    path:'/mysongs'
                },
                {
                    title:'朋友',
                    path:'/friends'
                },
                {
                    title:'商城',
                    path:'/mysongs'
                },
                {
                    title:'音乐人',
                    path:'/mysongs'
                },
                {
                    title:'下载客户端',
                    path:'/mysongs'
                }
            ],
            currentId:0,
            data:{}
        }
    },
    created(){
        this.currentId=this.$router.history.current.query.id
        GetSongListData(this.currentId).then(res=>{
            this.data=res.data
            console.log(this.data)
        })
    },
    mounted(){

    },
    methods:{
        ChangeRouter(index){
            this.$router.replace(this.title[index].path)
        },
    }
}
    
</script>
<style>
.carousel{
    width: 1300px;
    margin: 0 auto;
}
.content{
    width: 1300px;
    height: 600px;
    margin: 0 auto;
    display: flex;
    background-color: white;
}
.main{
    margin-top: 160px;
}
.content-left{
    flex: 70;
    padding :10px;
    border-left: 1px solid rgb(222, 222, 222) !important;
    border-right: 1px solid rgb(222, 222, 222) !important;
}
.content-right{
    flex: 30;
    border-right: 1px solid rgb(222, 222, 222) !important;

}
.content-left-top{
    display: flex;
}
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
    background-color:#eeedec;
    margin:15px auto;
    height:100px;
    overflow:auto;
    font-size: 11px;
    font-family: "微软雅黑";
}
</style>
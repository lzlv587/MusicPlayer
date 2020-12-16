<template>
    <div class="songs">
        <top-title :title="title" @ChangeRouter="ChangeRouter"/>

        <div class="main">
            <carousel :banners="BannerImg" :CarouselLoad="CarouselLoad" class="carousel"></carousel>
            <div class="content">
                <div class="content-left">
                    <pop-mui-rec :MusicArray="MusicArray" @click="ChangeCat"></pop-mui-rec>
                    <new-disc/>

                </div>
                <div class="content-right">
                    <recommend-singer-show :SingersData="artists"/>
                </div>
            </div>
        </div>
        <my-audio/>
    </div>
</template>
<script>
import TopTitle from 'components/content/TopTitle/TopTitle'
import {GetBanner,GetMusicList,GetRecommendSinger,GetNewDisc} from 'network/songs'
import carousel from 'components/commond/carousel/carousel'
import PopMuiRec from 'views/songs/components/PopMuiRec/PopMuiRec'
import RecommendSingerShow from './components/RecommendSinger/RecommendSingerShow'
import MyAudio from 'components/commond/Audio/MyAudio'
import NewDisc from './components/NewDisc/NewDiscShow'
export default {
    name:'songs',
    components:{
        TopTitle,
        carousel,
        PopMuiRec,
        RecommendSingerShow,
        MyAudio,
        NewDisc
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
            BannerImg:[],
            TitlePopConfig:{
                linecolor:'green'
            },
            MusicArray:[],
            artists:[],
            DiscData:[]
        }
    },
    created(){
        GetBanner().then(res=>{
            for(var i=0;i<res.data.banners.length;i++){
                console.log(res.data.banners[i].imageUrl)
                var imgobj={};
                imgobj.imageUrl=res.data.banners[i].imageUrl;
                this.BannerImg.push(imgobj);
            }
            
        })
        GetMusicList().then(res=>{
            console.log(res.data.playlists);
            for(var i=0;i<res.data.playlists.length;i++){
                this.MusicArray.push(res.data.playlists[i]);
            }
        })
        GetRecommendSinger().then(res=>{
            this.artists=res.data.artists
        })
        GetNewDisc().then(res=>{
            console.log("获取新碟上架数据")
            console.log(res)
            for(var i=0;i<10;i++){
                console.log(res.data.monthData[i])
                this.DiscData.push(res.data.monthData[i])
            }
        })
    },
    mounted(){
        this.$bus.$on('ChangeCat',(res)=>{
            console.log('测试接收事件总线'+res)
            GetMusicList(res).then(res=>{
                this.MusicArray=new Array
                for(var i=0;i<res.data.playlists.length;i++){
                    this.MusicArray.push(res.data.playlists[i]);
                }
            })
        })
    },
    methods:{
        ChangeRouter(index){
            this.$router.replace(this.title[index].path)
        },
        CarouselLoad(){
            console.log('emit测试')
        },
        ChangeCat(){
            
        }
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
    height: 1800px;
    margin: 0 auto;
    background-color: white;
}
.main{
    margin-top: 160px;
}
.content-left{
    width:70%;
    padding :10px;
    border-left: 1px solid rgb(222, 222, 222) !important;
    border-right: 1px solid rgb(222, 222, 222) !important;
    float: left;
}
.content-right{
    width:26%;
    border-right: 1px solid rgb(222, 222, 222) !important;
    padding:10px;
    float: right;

}

</style>
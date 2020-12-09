<template>
    <div>
        <top-title :title="title" @ChangeRouter="ChangeRouter"/>

        <div class="main">
            <carousel :banners="BannerImg" :CarouselLoad="CarouselLoad" class="carousel"></carousel>
            <div class="content">
                <div class="content-left">
                    <title-pop-rec :linecolor="TitlePopConfig.linecolor"></title-pop-rec>
                </div>
                <div class="content-right"></div>
            </div>
        </div>
        <h2>Songs</h2>
    </div>
</template>
<script>
import TopTitle from 'components/content/TopTitle/TopTitle'
import {GetBanner} from 'network/songs'
import carousel from 'components/commond/carousel/carousel'
import TitlePopRec from 'views/songs/components/TitlePopRec'
export default {
    name:'songs',
    components:{
        TopTitle,
        carousel,
        TitlePopRec
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
                }
            ],
            BannerImg:[],
            TitlePopConfig:{
                linecolor:'green'
            }
        }
    },
    created(){
        GetBanner().then(res=>{
            console.log(res)
            for(var i=0;i<res.data.banners.length;i++){
                console.log(res.data.banners[i].imageUrl)
                var imgobj={};
                imgobj.imageUrl=res.data.banners[i].imageUrl;
                this.BannerImg.push(imgobj);
            }
        })
    },
    methods:{
        ChangeRouter(index){
            this.$router.replace(this.title[index].path)
        },
        CarouselLoad(){
            console.log('emit测试')
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
    height: 400px;
    margin: 0 auto;
    display: flex;
}
.main{
    margin-top: 160px;
}
.content-left{
    flex: 70;
    padding :10px;
    border-left: 2px solid rgb(175, 173, 173) !important;
    border-right: 2px solid rgb(175, 173, 173) !important;
}
.content-right{
    flex: 30;
    border-right: 2px solid rgb(175, 173, 173) !important;

}
</style>
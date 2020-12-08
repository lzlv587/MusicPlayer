<template>
    <div>
        <top-title :title="title" @ChangeRouter="ChangeRouter"/>
        <carousel :banners="BannerImg" :CarouselLoad="CarouselLoad"></carousel>
        <h2>Songs</h2>
    </div>
</template>
<script>
import TopTitle from 'components/content/TopTitle/TopTitle'
import {GetBanner} from 'network/songs'
import carousel from 'components/commond/carousel/carousel'
export default {
    name:'songs',
    components:{
        TopTitle,
        carousel
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
            BannerImg:[]
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
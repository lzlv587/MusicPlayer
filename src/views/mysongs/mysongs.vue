<template>
    <div class="mysongs">
        <top-title :title="title" @ChangeRouter="ChangeRouter"/>
        <carousel :banner="BannerImg"></carousel>
        <h2>MySongs</h2>
        <div class="my-audio">
            <my-audio/>
        </div>
    </div>
</template>
<script>
import TopTitle from 'components/content/TopTitle/TopTitle'
import {GetBanner} from 'network/songs'
import carousel from 'components/commond/carousel/carousel'
import MyAudio from 'components/commond/Audio/MyAudio'
export default {
    name:'mysongs',
    components:{
        TopTitle,
        carousel,
        MyAudio
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
            for(var i=0;i<res.length;i++){
                this.BannerImg.push(res[i].imageUrl)
            }
        })
    },
    methods:{
        ChangeRouter(index){
            this.$router.replace(this.title[index].path)
        }
    }
}
    
</script>
<style scoped>
</style>
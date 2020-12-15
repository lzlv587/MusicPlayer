<template>
    <div class="songs">
        <top-title  @ChangeRouter="ChangeRouter"/>

        <div class="main">
            <div class="content">
                <div class="content-left">
                    <div class="content-left-top">
                        <target-song-show :data='data'/>
                    </div>
                    <song-list-show :tableData="tableData"/>
                    <commend-list-show/>
                    
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
import SongListShow from './components/SongListShow/SongListShow'
import TargetSongShow from './components/TargetSongShow/TargetSongShow'
import CommendListShow from './components/CommendList/CommendListShow'
export default {
    name:'songs',
    components:{
        TopTitle,
        carousel,
        SongListShow,
        TargetSongShow,
        CommendListShow
    },
    data(){
        return{
            currentId:0,
            data:{},
            tableData:{},
        }
    },
    created(){
        this.currentId=this.$router.history.current.query.id
        GetSongListData(this.currentId).then(res=>{
            this.data=res.data
            console.log(this.data)
            this.tableData=res.data.playlist.tracks
            console.log(this.tableData)
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
    height: 1800px;
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
    padding: 5px 10px;
    background-color:#eeedec;
    margin:15px auto;
    height:100px;
    overflow:auto;
    font-size: 11px;
    font-family: "微软雅黑";
}
</style>
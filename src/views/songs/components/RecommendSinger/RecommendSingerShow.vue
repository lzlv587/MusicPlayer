<template>
    <div >
        <!-- 首页入驻歌手的标题栏 -->
        <title-frame :config="config">
            <h5 slot="left">入驻歌手</h5>
            <a slot="right" href="#"><h5>查看更多></h5></a>
        </title-frame>
        <recommend-singer-list :SingersData="SingersData"/>
        <div class="recommend-button">
            <el-button type="danger" plain >成为音乐人</el-button>
        </div>
    </div>
</template>
<script>
import TitleFrame from 'components/commond/TitleFrame/TitleFrame'
import RecommendSingerList from './RecommendSingerList'
export default {
    name:"RecommendSingerTitle",
    data(){
        return {
            config:{
                linecolor:'2px solid rgb(167, 167, 167) !important'
            }
        }
    },
    components:{
        TitleFrame,
        RecommendSingerList
    },
    props:{
        SingersData:[]
    }
}
</script>
<style scoped>
.recommend-button{
    margin-top: 10px;
}
.recommend-button>button{
    width: 100%;
}
</style>
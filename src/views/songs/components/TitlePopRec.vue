<template>
    <div>
        <!-- 首页热门推荐的标题栏 -->
        <title-frame :config="config">
            <h4 slot="left">热门推荐</h4>
            <el-breadcrumb separator="|" slot="center" class="title">
                <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
                <el-breadcrumb-item v-for="item in title" :key="item">{{item.text}}</el-breadcrumb-item>
            </el-breadcrumb>
        </title-frame>
    </div>
</template>
<script>
import TitleFrame from 'components/commond/TitleFrame/TitleFrame'
export default {
    name:"TitlePopRec",
    components:{
        TitleFrame
    },
    data(){
        return {
            config:{
                linecolor:'2px solid #C20C0C !important'
            },
            title:[
                {
                    text:'华语'
                },{
                    text:'流行'
                },{
                    text:'摇滚'
                },{
                    text:'乡村'
                }
            ]
        }
    }
}
</script>
<style scoped>
    .title{
        margin:25px 25px;
    }
</style>
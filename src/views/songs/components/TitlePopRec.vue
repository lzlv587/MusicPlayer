<template>
    <div>
        <!-- 首页热门推荐的标题栏 -->
        <title-frame :config="config">
            <h4 slot="left">热门推荐</h4>
            <el-breadcrumb separator="|" slot="center" class="title">
                <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
                <el-breadcrumb-item v-for="(item,index) in title" :key="index" @click.native="ChangeCat(item.text)"><a>{{item.text}}</a></el-breadcrumb-item>
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
                },{
                    text:''
                }
            ]
        }
    },
    methods:{
        ChangeCat(cat){
            console.log('事件总线：子组件开始传递')
            // this.$emit("ChangeCat",cat)
            this.$bus.$emit('ChangeCat',cat)
        }
    }
}
</script>
<style scoped>
    .title{
        margin:25px 25px;
    }
</style>
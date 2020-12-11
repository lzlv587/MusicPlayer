<template>
    <div>
        <div class="toptitle-one">
            <div>
                <ul>
                    <a href="#">
                        <li v-for="(item,index) in title" :key="index" class="title-item" @click="ChangeRouter(index)" :class="{itemactive:index===currentIndex}">{{item.title}}</li>
                    </a>
                </ul>
                <div class="search">
                    <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
                    <el-button icon="el-icon-search" circle></el-button>
                </div>
            </div>
        </div>

        <div class="toptitle-two">
            <div>
                <ul>
                    <a href="#">
                    </a>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'TopTitle',
    props:{

    },
    data(){
        return {
            currentIndex:-1,
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
        }
    },
    methods:{
        ChangeRouter(index){
            this.currentIndex=index
            // this.$emit('ChangeRouter',index)
            this.$router.replace(this.title[index].path)
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!=-1
        }
    }
}
</script>
<style scoped>
.itemactive{
    background-color: black;
}
.toptitle-one{
    position: -webkit-sticky; 
    position: fixed; 
    top: 0;
    left: 0;
    width:100%;
    z-index: 1000;
    height: 100px;
    background-color: #242424;
}
.toptitle-one>div{
    width: 1100px;
    margin: 0 auto;
}
.title-item{
    float: left;
    height: 100px;
    color: #fff;
    list-style: none;
    line-height:100px;
    font-size: 20px;
    padding:0 19px
}

.title-item:hover{
    background-color: black;
}

.toptitle-two{
    position: -webkit-sticky; 
    position: fixed; 
    left: 0;
    z-index: 1000;
    top: 100px;
    width:100%;
    height: 10px;
    background-color: #C20C0C;
}
.toptitle-two>div>ul,.toptitle-one>div>ul{
    margin: 0px;
}
.search{
    display: flex;
    float: left;
    margin:30px 50px
}
.search>input{
    float: left;
     
}
.search>button{
    float: left;
    margin-left: 5px;
}
</style>
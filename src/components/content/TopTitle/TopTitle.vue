<template>
    <div>
        <div class="toptitle-one">
            <div>
                <ul>
                    <a href="#">
                        <li v-for="(item,index) in title" :key="index" class="title-item" @click="ChangeRouter(index)" :class="{itemactive:index===currentIndex}">{{item.title}}</li>
                    </a>
                </ul>
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
        title:{
            type:Array,
            default:[]
        },
        path:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            currentIndex:-1
        }
    },
    methods:{
        ChangeRouter(index){
            this.currentIndex=index
            console.log(this.path)
            this.$emit('ChangeRouter',index)
            // this.$router.replace(this.path)
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
    position: sticky; 
    top: 0;
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
    position: sticky; 
    top: 100px;
    width:100%;
    height: 50px;
    background-color: #C20C0C;
}
.toptitle-two>div>ul{
    margin: 0px;
}
</style>
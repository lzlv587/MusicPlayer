<template>
    <div>
        <title-frame :config="config">
            <h4 slot="left">新碟上市</h4>
        </title-frame>
        <div class="new-disc-show-content">
            <new-disc-frame>
                <div slot="content-item-one" class="new-disc-content">
                    <new-disc-list :DiscData="DiscDataOne"/>
                </div>
                <div slot="content-item-two" class="new-disc-content">
                    <new-disc-list :DiscData="DiscDataTwo"/>
                </div>
                <div slot="content-item-three" class="new-disc-content">
                    <new-disc-list :DiscData="DiscDataThree"/>
                </div>
                <div slot="content-item-four" class="new-disc-content">
                    <new-disc-list :DiscData="DiscDataFour"/>
                </div>
            </new-disc-frame>
        </div>
    </div>
</template>
<script>
import TitleFrame from 'components/commond/TitleFrame/TitleFrame'
import NewDiscFrame from 'components/commond/NewDiscFrame/NewDiscFrame.vue'
import NewDiscItem from './NewDiscItem'
import NewDiscList from './NewDiscList.vue'
export default {
    name:"NewDiscShow",
    components:{
        NewDiscFrame,
        NewDiscItem,
        NewDiscList,
        TitleFrame,
    },
    methods:{
    },
    props:{
        DiscData:Array
    },
    data(){
        return {
            DiscDataOne:[],
            DiscDataTwo:[],
            DiscDataThree:[],
            DiscDataFour:[],
            config:{
                linecolor:'2px solid #C20C0C !important'
            },
        }
    },
    watch:{
        DiscData: function(newVal,oldVal){
            for(var i=0;i<4;i++){
                this.DiscDataOne.push(newVal[i]);
                this.DiscDataThree.push(newVal[i]);
            }
            for(var i=4;i<8;i++){
                this.DiscDataTwo.push(newVal[i]);
                this.DiscDataFour.push(newVal[i]);
            }
        }
    },
    computed:{
    }
}
</script>
<style scoped>
.new-disc-content{
    overflow: hidden;
    float: left;
    width: 770px;
}
.new-disc-content>ul{
    list-style: none;
}
.new-disc-content>ul>li{
    float: left;
}
.new-disc-show-content{
    margin-top: 20px;
}
</style>

<template>
    <div>
        <!-- 热门推荐组件 -->
        <title-pop-rec/>
        <music-list>
            <music-item slot="MusicItem" :MusicArray="MusicArray"></music-item>
        </music-list>
    </div>
</template>
<script>
import TitlePopRec from '../TitlePopRec'
import {MusicList,MusicItem} from 'components/commond/MusicList'
export default {
    name:'PopMuiRec',
    components:{
        MusicList,
        MusicItem,
        TitlePopRec
    },
    props:{
        MusicArray:Array
    },
    methods:{
        ChangeCat(cat){
            // console.log("父组件接收处理")
            // console.log(cat);

        }
    }
}
</script>
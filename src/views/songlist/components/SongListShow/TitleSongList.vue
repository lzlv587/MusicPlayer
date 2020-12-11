<template>
    <div>
        <!-- 歌单信息的标题栏 -->
        <title-frame :config="config">
            <h4 slot="left">歌曲列表</h4>
        </title-frame>
        
    </div>
</template>
<script>
import TitleFrame from 'components/commond/TitleFrame/TitleFrame'
export default {
    name:'TitleSongList',
    components:{
        TitleFrame
    },
    data(){
        return {
            config:{
                linecolor:'2px solid #C20C0C !important'
            },
        }
    }
}
</script>
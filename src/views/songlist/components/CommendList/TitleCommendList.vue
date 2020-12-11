<template>
    <div>
        <!-- 实现评论栏 -->
        <title-frame :config="config">
            <h4 slot="left">评论</h4>
        </title-frame>
    </div>
</template>
<script>
import TitleFrame from 'components/commond/TitleFrame/TitleFrame'
export default {
    name:'TitleCommendList',
    components:{
        TitleFrame
    },
    data(){
        return {
            config:{
                linecolor:'2px solid #C20C0C !important'
            }
        }
    }
}
</script>
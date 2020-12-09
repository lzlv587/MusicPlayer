<template>
    <div>
        <!-- 首页新碟上市的标题栏 -->
        <title-frame :config="config">
            <h4 slot="left">新碟上市</h4>
        </title-frame>
    </div>
</template>
<script>
import TitleFrame from 'components/commond/TitleFrame/TitleFrame'
export default {
    name:"TitleNewMui",
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
<style scoped>
    .title{
        margin:25px 25px;
    }
</style>
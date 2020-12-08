<template>
    <div>
        <top-title :title="title"/>
    </div>
</template>
<script>
import TopTitle from 'components/content/TopTitle/TopTitle'
export default {
    name:'songs',
    components:{
        TopTitle
    },
    data(){
        return{
            title:['发现音乐','我的音乐','朋友']
        }
    }
}
    
</script>
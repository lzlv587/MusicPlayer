<template>
    <div>测试ceshisearch</div>
</template>
<script>
import {GetSearchData} from 'network/songs'
export default {
    name:"search",
    data(){
        return {
            keywords:"",
            result:[]
        }
    },
    created(){
        this.keywords=this.$router.history.current.query.keywords
        GetSearchData(this.keywords).then(res=>{
            console.log(res)
            this.result=res.data.result.songs
        })
    },
    mounted(){
        console.log(this.keywords)
    }
}
</script>
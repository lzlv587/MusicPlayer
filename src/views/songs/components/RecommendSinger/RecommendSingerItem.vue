<template>
    <div>
        <div class="singer">
            <img :src="Singer.picUrl">
            <p>{{Singer.name}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'RecommendSingerItem',
    props:{
        Singer:Object
    }
}
</script>
<style scoped>
.singer{
    width: 100%;
    display: flex;
}
.singer>img{
    width: 80px;
}
.singer>p{
    margin-left: 60px;
    font-weight:700;
    font-size: x-large;
}

</style>
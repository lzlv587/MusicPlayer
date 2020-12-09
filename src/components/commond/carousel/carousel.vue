<template>
    <div>
        <el-carousel type="card">
            <el-carousel-item v-for="banner in banners" :key="banner.imageUrl">
                <div>
                    <a :href="banner.link">
                        <img :src="banner.imageUrl" class="carousel-img"/>
                    </a>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    name:"carousel",
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    updated(){
        this.$nextTick(function(){
            this.$emit('CarouselLoad')
        })
    },
}
</script>
<style>
.carousel-img{
    max-width:100%;
    height:auto; 
}

</style>
<template>
    <div>
        <el-carousel>
            <el-carousel-item v-for="banner in banners" :key="banner.imageUrl">
                <div>
                    <a :href="banner.link">
                        <img :src="banner.imageUrl" style="height:100%"/>
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
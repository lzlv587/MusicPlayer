<template>
    <div class="new-disc-item">
        <div>
            <a href="#" class="new-disc-item">
                <img src="~assets/img/test.jpg" class="image" @click="GotoSongList()">
                <p>测试内容</p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:"NewDiscItem"
}
</script>
<style scoped>
.new-disc-item{
    /* height: 150px; */
    width: 150px;
}
.new-disc-item>img{
    width: 100%;
    height: 100%;
}
</style>
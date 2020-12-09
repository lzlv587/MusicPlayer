<template>
    <div class="title-frame" :style="{'border-bottom':config.linecolor}">
        <div class="title-frame-left">
            <slot name="left"></slot>
        </div>
        <div class="title-frame-center">
            <slot name="center"></slot>
        </div>
        <div class="title-frame-right">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:"TitleFrame",
    props:{
        config:Object
    }
}
</script>
<style>
.title-frame{
    height: 44px;
    display: flex;
    padding: 3px 10px;
}
.title-frame-left ,.title-frame-right{
    width: 100px;
    /* background-color: blue; */
}
.title-frame-center{
    flex:1;
    /* background-color: darkcyan; */
}
</style>
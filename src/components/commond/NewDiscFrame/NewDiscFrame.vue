<template>
    <div class="new-disc-frame">
        <div class="left-btn">
            <div class="btn" @click="MoveLeft()"><span class="el-icon-arrow-left btn-text"></span></div>
        </div>
        <div class="new-disc-frame-content" ref="ContentItem">
            <div ref="content-item-one" class="new-disc-frame-content-item on-left">
                <slot name="content-item-one"  ></slot>
            </div>
            <div ref="content-item-two" class="new-disc-frame-content-item on-left">
                <slot name="content-item-two"  ></slot>
            </div>
            <div ref="ContentItemThree" class="new-disc-frame-content-item on-show">
                <slot name="content-item-three"></slot>
            </div>
            <div ref="ContentItemFour" class="new-disc-frame-content-item on-right">
                <slot name="content-item-four"></slot>
            </div>
        </div>
        <div class="right-btn">
            <div class="btn" @click="MoveRight()"><span class="el-icon-arrow-right btn-text"></span></div>
        </div>

    </div>
</template>
<script>

export default {
    name:"NewDiscFrame",
    data(){
        return{
            content_arr:[]
        }
    },
    methods:{
        MoveRight(){
            //减减加
            //四组件
            console.log(this.$refs.ContentItem.children);
            this.content_arr=this.$refs.ContentItem.children;
            for(var item in this.content_arr){
                console.log(this.content_arr[item])
                if(this.content_arr[item].className=="new-disc-frame-content-item on-show"){
                    this.content_arr[parseInt(item)].className="new-disc-frame-content-item move-left"
                    this.content_arr[parseInt(item)+1].className="new-disc-frame-content-item on-show"
                }
            }
            console.log(this.$refs.ContentItemThree)
            // this.$refs.ContentItemThree.style.left="-1000px"
            // this.$refs.ContentItemThree.classList.add('left')
            this.$refs.ContentItemThree.classList.value="new-disc-frame-content-item move-left"

        },
        MoveLeft(){
            //加减
            this.$refs.ContentItemThree.classList.value="new-disc-frame-content-item move-right"
        }
    },

}
</script>

<style scoped>

.new-disc-frame{
    display: flex;
    width: 100%;
    height: 250px;
    background-color: #efefee;
    border: 1px solid #d3d3d3;
}
.left-btn,.right-btn{
    width: 70px;
    height: 100%;
}
.new-disc-frame-content{
    transition: all 10s;
    flex:1;
    float: left;
    /* overflow: hidden; */
    position: relative;
}
.btn{
    background-color: #0000;
    border-color: #0000;
    height: 100%;
    font-size: 30px;
    margin-top: 100px;
}
.btn-text:hover{
    font-size: 40px;
}
.new-disc-frame-content-item{
    left: 0px;
    float: left;
    position: absolute;
    transition:"left 20s"
}
.move-left{
    left: -1000px;
    transition: left 2s ease 0s;
}
.move-right{
    left: 0px;
    transition: left 2s ease 0s;
}
.on-left{
    left: -1000px;
}
.on-right{
    left: 1000px;
}
.on-show{
    left: 0;
}
</style>
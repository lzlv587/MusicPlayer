<template>
    <div>
        <new-disc-frame>
            <div slot="content-item-one" class="new-disc-content">
                <ul class="item">
                    <li>
                        <new-disc-item/>
                    </li>
                </ul>
            </div>
            <div slot="content-item-two" class="new-disc-content">
                <ul class="item">
                    <li>测试第1个</li>

                    <li>测试测试1</li>
                    <li>测试测试2</li>
                    <li>测试测试3</li>
                    <li>测试测试4</li>
                    <li>测试测试5</li>
                    <li>测试测试6</li>
                    <li>测试测试7</li>
                    <li>测试测试8</li>
                    <li>测试测试9</li>
                    <li>测试测试10</li>
                    <li>测试第1个</li>

                </ul>
            </div>
            <div slot="content-item-three" class="new-disc-content">
                <ul class="item">
                    <li>测试第2个</li>

                    <li>测试中国测试1</li>
                    <li>测试中国测试2</li>
                    <li>测试中国测试3</li>
                    <li>测试中国测试4</li>
                    <li>测试中国测试5</li>
                    <li>测试中国测试6</li>
                    <li>测试中国测试7</li>
                    <li>测试中国测试8</li>
                    <li>测试中国测试9</li>
                    <li>测试中国测试10</li>
                    <li>测试中国测试11</li>
                    <li>测试中国测试12</li>
                    <li>测试中国测试13</li>
                    <li>测试中国测试14</li>
                    <li>测试中国测试15</li>
                    <li>测试中国测试16</li>
                    <li>测试中国测试17</li>
                    <li>测试中国测试18</li>
                    <li>测试中国测试19</li>
                    <li>测试中国测试20</li>
                    <li>测试第2个</li>

                </ul>
            </div>
            <div slot="content-item-four" class="new-disc-content">
                <ul class="item">
                    <li>测试第3个</li>

                    <li>测试中国测试1</li>
                    <li>测试中国测试2</li>
                    <li>测试中国测试3</li>
                    <li>测试中国测试4</li>
                    <li>测试中国测试5</li>
                    <li>测试中国测试6</li>
                    <li>测试中国测试7</li>
                    <li>测试中国测试8</li>
                    <li>测试中国测试9</li>
                    <li>测试中国测试10</li>
                    <li>测试中国测试11</li>
                    <li>测试中国测试12</li>
                    <li>测试中国测试13</li>
                    <li>测试中国测试14</li>
                    <li>测试中国测试15</li>
                    <li>测试中国测试16</li>
                    <li>测试中国测试17</li>
                    <li>测试中国测试18</li>
                    <li>测试中国测试19</li>
                    <li>测试中国测试20</li>
                    <li>测试第3个</li>

                </ul>
            </div>
        </new-disc-frame>
    </div>
</template>
<script>
import NewDiscFrame from 'components/commond/NewDiscFrame/NewDiscFrame.vue'
import NewDiscItem from './NewDiscItem'
export default {
    name:"NewDiscShow",
    components:{
        NewDiscFrame,
        NewDiscItem
    },
    methods:{
    }
}
</script>
<style scoped>
.new-disc-content{
    overflow: hidden;
    float: left;
    width: 800px;
}
.new-disc-content>ul{
    list-style: none;
}
.new-disc-content>ul>li{
    float: left;
}
</style>

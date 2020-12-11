<template>
    <div class="audio">
        <aplayer autoplay
        :music="{
            title: 'secret base~君がくれたもの~',
            artist: 'Silent Siren',
            src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
            pic: 'http://p3.music.126.net/osp_RPPFRnAkt4LCpYwjsw==/109951164472086350.jpg'
        }"
        />
    </div>
</template>
<script>
import Aplayer from 'vue-aplayer'
export default {
    name:'MyAudio',
    components:{
        Aplayer
    }
}
</script>
<style scoped>
.audio{
    position: fixed;
    bottom: 0;
    height: 80px;
    width: 100%;
    margin: 0 auto;
    background-color: #242424;
}
.audio-play{
    height: 80px;
    width: 500px;
}
.controlBar{
    height: 80px;
}
</style>
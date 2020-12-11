<template>
    <div>
        <title-song-list/>
        <el-table
        :data="tableData"
        stripe
        style="width: 100%">
            <el-table-column
            type="index"
            width="50">
            </el-table-column>
            <el-table-column
                width="50">
                <template>
                    <el-button icon="el-icon-video-play" size="mini" circle></el-button>
                </template>
            </el-table-column>

            <el-table-column
                prop="name"
                label="歌曲标题"
                width="300">
            </el-table-column>
            <el-table-column
                label="歌手"
                width="300">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium" type="danger" v-for="item in scope.row.ar" :key="item">{{ item.name }}</el-tag>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                label="专辑"
                prop="al"
                width="300">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import TitleSongList from './TitleSongList'
export default {
    name:'SongListShow',
    components:{
        TitleSongList
    },
    props:{
        tableData:Array
    }
}
</script>
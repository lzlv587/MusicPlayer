import {request} from 'network/request'
export function GetBanner(){
    return request({
        url:'/banner'
    })
}
export function GetMusicList(cat){
    return request({
        url:'/top/playlist/highquality',
        params: {
            offset: (Math.random() * 1297).toFixed(0) - 12,
            limit: 8,
            cat:cat
        }
    })
}
export function GetSongListData(id){
    return request({
        url:'/playlist/detail',
        params:{
            id:id
        }
    })
}
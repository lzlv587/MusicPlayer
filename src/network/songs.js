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
export function GetRecommendSinger(){
    return request({
        url:'/top/artists',
        params:{
            offset:0,
            limit:5
        }
    })
}
export function GetNewDisc(){
    return request({
        url:'/top/album',
        params:{
            limit:10
        }
    })
}
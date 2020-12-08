import {request} from 'network/request'
export function GetBanner(){
    return request({
        url:'/banner'
    })
}
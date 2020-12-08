import axios from 'axios'
export function request(config){
    const instance=axios.create({
        baseURL: '/api',
        timeout: 30000,
    })
    return instance
}
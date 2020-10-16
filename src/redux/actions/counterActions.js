import constants from '../constants';
import axios from 'axios'

let counters = [1,2,3,4]
function getCounters(){
    return{
        type: constants.counters.GET,
        counters: counters
    }
}

function connect(){
    let res = axios.get('http://localhost:8000/connect').then(res=>{
        console.log(res.data)
        return res.data
    })
    return{
        type: constants.counters.CONNECT,
        counters:res
    }
}

function disconnect(){
    let res = axios.get('http://localhost:8000/disconnect').then(res=>{
        console.log(res.data)
        return res.data
    })
    return{
        type: constants.counters.CONNECT,
        counters:res
    }
}

function count(){
    let res = axios.get('http://localhost:8000/count').then(res=>{
        console.log(res.data)
        return res.data
    })
    return{
        type: constants.counters.CONNECT,
        counters:res
    }
}

export default {
    getCounters,
    connect,
    disconnect,
    count
}

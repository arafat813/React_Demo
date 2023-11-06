import {INCREMENT, DECREMENT} from './constant'

// 初始化状态
const initState = 0
export default function conutReducer(previous = initState, action){
    const {type, data} = action
    switch(type){
        case INCREMENT:
            return previous + data
        case DECREMENT:
            return previous - data
        default: 
            return previous 
    }
}
import {INCREMENT, DECREMENT} from './constant'

const createIncreamentAction = data => ({type: INCREMENT, data})

const createDecreamentAction = data =>{
    return {type: DECREMENT, data}
}

// 异步action 就是action的值为函数
const createIncreamentAsyncAction = (data, time) => {
    return (dispatch) =>{
        setTimeout(() => {
            // 这一行会报错 所以会用到redux-thunk  因为action只认对象类型action  不认函数类型action
            dispatch(createIncreamentAction(data))
        }, time);
    }
}

export {
    createIncreamentAction,
    createDecreamentAction,
    createIncreamentAsyncAction
}
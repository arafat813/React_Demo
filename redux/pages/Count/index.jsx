import { useState, useEffect } from 'react';
import store from '../../redux/store.js';
import {createDecreamentAction, createIncreamentAction, createIncreamentAsyncAction} from '../../redux/count_action.js'

function Count(){
    const [num, setNum] = useState(0)
    const [selectNum, setSelectNum] = useState(1)
    const [Count, setCount] = useState({})

    useEffect(() => {
        // 订阅更改 否则不更新
        store.subscribe(() => {
            setCount({});
        });
    }, []);

    function increment(){
        store.dispatch(createIncreamentAction(parseInt(selectNum)))

        // store.dispatch({
        //     type: 'increment',
        //     data: parseInt(selectNum)
        // })

        // setNum(parseInt(num) + parseInt(selectNum))
    }
    function decrement(){
        store.dispatch(createDecreamentAction(parseInt(selectNum)))

        // store.dispatch({
        //     type: 'decreament',
        //     data: parseInt(selectNum)
        // })

        // setNum(parseInt(num) - parseInt(selectNum))
    }
    function incrementIfOdd(){
        if(store.getState() % 2 !== 0){
            store.dispatch(createIncreamentAction(parseInt(selectNum)))

            // store.dispatch({
            //     type: 'increment',
            //     data: parseInt(selectNum)
            // })

            // setNum(parseInt(num) + parseInt(selectNum))
        }
    }
    function incrementAsync(){
        // setTimeout(() => {
            store.dispatch(createIncreamentAsyncAction(parseInt(selectNum), 1000))

            // store.dispatch({
            //     type: 'increment',
            //     data: parseInt(selectNum)
            // })

            // setNum(parseInt(num) + parseInt(selectNum))
        // }, 1000);
    }
    return(
        <div>
           <h1>当前求和为： {store.getState()}</h1>
           &nbsp;&nbsp;<select onChange={e=>{setSelectNum(e.target.value)}}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
           </select>&nbsp;&nbsp;
           <button onClick={increment}>+</button>&nbsp;&nbsp;
           <button onClick={decrement}>-</button>&nbsp;&nbsp;
           <button onClick={incrementIfOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;
           <button onClick={incrementAsync}>异步＋</button>&nbsp;&nbsp;
        </div>
    )
}


export default Count;
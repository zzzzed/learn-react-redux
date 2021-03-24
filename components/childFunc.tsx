import React, {useCallback, useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css';
import {stateType} from '../state'


const Child = () => {
    const {FuncNum} = useSelector((state: stateType) => {
        console.log('Func', state)
        return {
            FuncNum: state.FuncNum
        }
    })
    const dispth = useDispatch()

    const addClick = useCallback(
        () => dispth({type: 'FUNC_ADD'}),
        [FuncNum],
    )

    const reduceClick = useCallback(
        () => dispth({type: 'FUNC_REDUCE'}),
        [FuncNum],
    )

    return useMemo(() => (
        <div>
            <div className="App">{FuncNum}</div>
            {Math.random()}
            <div>Func组件</div>
            <button onClick={addClick}>+</button>
            <button onClick={reduceClick}>-</button>
        </div>
    ), [FuncNum])
}

export default Child



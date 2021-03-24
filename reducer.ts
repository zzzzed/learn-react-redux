import {actionType} from './type'
const reducer = (state: any, action: actionType) => {
    switch(action?.type) {
        case 'FUNC_ADD':
            return {...state, FuncNum: state.FuncNum + 1}
        case 'FUNC_REDUCE':
            return {...state, FuncNum: state.FuncNum - 1}
        case 'CLASS_ADD':
            return {...state, ClassNum: state.ClassNum + 1}
        case 'CLASS_REDUCE':
            return {...state, ClassNum: state.ClassNum - 1}
        default:
            return state
    }
}

export default reducer
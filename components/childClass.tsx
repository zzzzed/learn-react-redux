import React from 'react'
import {connect} from 'react-redux'
import '../App.css';
import {stateType} from '../state'

interface TodosItemProps {
    ClassNum?: Number
    addClick: () => void;
    reduceClick: () => void;
}


class ChildClass extends React.Component<TodosItemProps> {
    constructor(props: TodosItemProps) {
        super(props)
    }
    render() {
        const {ClassNum, addClick, reduceClick} = this.props
        console.log('class', this.props)
        return (
            <>
                <div className="App">{ClassNum}</div>
                <div>Class组件</div>
                <button onClick={addClick}>+</button>
                <button onClick={reduceClick}>-</button>
            </>
        )
    }

}

const mapStateToProps = (state: stateType) => {
    return {
        ClassNum: state.ClassNum
    }
}

const mapDispatchToProps = (dispatch: (param: any) => void) => {
    return {
        addClick: () => {
            dispatch({type: 'CLASS_ADD'})
        },
        reduceClick: () => {
            dispatch({type: 'CLASS_REDUCE'})
        }
    }
}

export const WrapChildClass = connect(mapStateToProps, mapDispatchToProps)(ChildClass)
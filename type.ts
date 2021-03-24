export type actionType = {
    type: string,
    payLoad?: {[name: string]: any}
}

export type dispatchToProps = {
    addClick: () => void,
    reduceClick: () => void
}
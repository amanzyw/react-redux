function tods(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'ADD_TODOS':
        return {
            id:action.id,
            text:action.text,
            completed:false
        }
        default:
            return state
    }
}
export default tods;
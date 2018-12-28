
const reducer = (state, action) => {
    switch(action.type){
        case 'ADD'   : return state + 1 
        case "Subtract" : return state -1 
        case 'Reset' : return state = 0
        default: return state
    }
};
export default reducer;
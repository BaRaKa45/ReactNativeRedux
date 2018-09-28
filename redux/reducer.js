
const initState = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
} 

const reducer = (state = initState , action) => {
    switch(action.type) {
        case 'UPDATE_HOUR':
            return {
                hours: new Date().getHours(),
                minutes: new Date().getMinutes(),
                seconds: new Date().getSeconds(),
            }
        default:
        return state;
    }
}

export default reducer;
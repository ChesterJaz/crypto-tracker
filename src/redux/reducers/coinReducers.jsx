
const initialState = {
    id : "",
    name : "",
    image : "",
    market_cap : "",
    symbol : "",
    current_price : "",
    price_change_24h : "",
}


export const coinReducers = (state = initialState, action) =>{
    switch (action) {
        case 'GET_COINS':
            return {...state, payload}
        default:
            return state;
    }
}
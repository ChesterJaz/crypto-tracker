
//reducers


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
    switch (action.type) {
        case 'GET_COINS':
            return {...state, ...action.payload}
        default:
            return state;
    }
}
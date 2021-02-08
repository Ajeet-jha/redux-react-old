import {FETCH_POSTS, NEW_POST} from '../actions/types'

const initialState = {
    items : [],
    item : {}
}

export default  function (state = initialState, action){
    switch (action.type) {
        case FETCH_POSTS:
            console.log("called !!!!!!!!");
            return {
                ...state,
                itmes: action.payload
            }
        case NEW_POST:
            console.log("NEW_POST called !!!!!!!!");
            return {
                ...state,
                itme: action.payload
            }
        default:
            return state
    }
}
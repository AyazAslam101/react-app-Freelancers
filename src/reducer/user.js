import { USER_ACTION } from "../action/constants";

const initialState = {
    users: JSON.parse(localStorage.users || "[]")
}



export  const userDetails = (state = initialState, action )=>{

    switch(action.type) {
        case USER_ACTION:
            const _state = {...state};
            _state.users = [..._state.users, action.payload];
            localStorage.setItem("users",JSON.stringify(_state.users))
            return _state;
    }
    return state;
}
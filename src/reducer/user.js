import { USER_ACTION, USER_PROFILE_ACTION } from "../action/constants";

const initialState = {
    users: JSON.parse(localStorage.users || "[]"),
    userProfile : JSON.parse(localStorage.userProfile || '{}')
}



export  const userDetails = (state = initialState, action )=>{

    switch(action.type) {
        case USER_ACTION:
            const _state = {...state};
            _state.users = [..._state.users, action.payload];
            localStorage.setItem("users",JSON.stringify(_state.users))
            return _state;
            case USER_PROFILE_ACTION:  
            const _states = {...state};
            _states.userProfile = {..._states.userProfile, userProfile:action.payload};
            localStorage.setItem("userProfile" ,JSON.stringify(action.payload))
    }
    return state;
}
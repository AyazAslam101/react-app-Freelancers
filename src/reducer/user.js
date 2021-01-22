import { USER_ACTION } from "../action/constants";

const initialState = 
    {
        userDetail:{}
    }



export const userDetails = (state = initialState, action )=>{

    switch(action.type) {
        case USER_ACTION:
            const _state = {...state};
            console.log({chec:_state});
            _state.userDetail = action.payload;
            return _state;
    }
    return state;
}
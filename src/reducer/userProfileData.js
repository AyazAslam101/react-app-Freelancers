import {USER_PROFILE_ACTION} from "../action/constants"

const initialState = {
    userProfile : JSON.parse(localStorage.userProfile || "[]")
}

export const userProfileData = (state = initialState , action) =>{
    switch(action.type){
        case USER_PROFILE_ACTION : 
            const _state_profile = {...state};
            _state_profile.userProfile = [..._state_profile.userProfile , action.payload];
            localStorage.setItem("userProfile" ,JSON.stringify(_state_profile.userProfile))
            return _state_profile
    }
    // return _state_profile
}
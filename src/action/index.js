import { USER_ACTION , USER_PROFILE_ACTION } from "./constants";

export const usersAction = (payload) => {
    return {
        type : USER_ACTION,
        payload
    }
}

export const userProfileAction = (payload)=>{
    return{
        type : USER_PROFILE_ACTION , 
        payload
    }
}
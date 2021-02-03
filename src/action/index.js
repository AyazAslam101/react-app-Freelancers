import { USER_ACTION , USER_PROFILE_ACTION , PROPOSAL_ACTION } from "./constants";

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

export const proposalAction = (payload)=>{
    return{
        type : PROPOSAL_ACTION,
        payload
    }
}
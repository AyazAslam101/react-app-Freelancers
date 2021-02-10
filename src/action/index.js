import { USER_ACTION , USER_PROFILE_ACTION , PROPOSAL_ACTION , JOB_ACTION ,CLIENT_DATA } from "./constants";
// import { USER_ACTION , USER_PROFILE_ACTION , PROPOSAL_ACTION ,CLIENT_DATA } from "./constants";

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

export const jobAction = (payload)=>{
    return{
        type : JOB_ACTION,
        payload
    }
}
export const clientDataAction = (payload)=>{
    return{
        type : CLIENT_DATA,
        payload
    }
}
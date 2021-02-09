import { USER_ACTION, USER_PROFILE_ACTION  , PROPOSAL_ACTION , JOB_ACTION} from "../action/constants";

const initialState = {
    users: JSON.parse(localStorage.users || "[]"),
    userProfile : JSON.parse(localStorage.userProfile || '{}'),
    userProposal : JSON.parse(localStorage.userProposal || '[]'),
    userJobs : JSON.parse(localStorage.userJobs || '[]'),
    // userJobs : JSON.parse(localStorage.userJobs || "[]")
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
        case PROPOSAL_ACTION:
            const _stateProposal = {...state};
            _stateProposal.userProposal = [..._stateProposal.userProposal,  action.payload];
            localStorage.setItem("userProposal", JSON.stringify(_stateProposal.userProposal));
            return _stateProposal
        case JOB_ACTION:
            const _stateJobs = {...state};
            _stateJobs.userJobs = [..._stateJobs.userJobs , action.payload];
            localStorage.setItem("userJobs" , JSON.stringify(_stateJobs.userJobs))
            return _stateJobs
    }
    return state;
}
import { USER_ACTION } from "./constants";

export const usersAction = (payload) => {
    console.log({usData:payload});
    return {
        type : USER_ACTION,
        payload
    }
}
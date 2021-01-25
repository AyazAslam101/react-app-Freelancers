import { USER_ACTION } from "./constants";

export const usersAction = (payload) => {
    return {
        type : USER_ACTION,
        payload
    }
}
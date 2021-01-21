import users from './user'
import {combineReducers} from 'redux'


const combine = combineReducers({
    alluser : users
})

export default combine;
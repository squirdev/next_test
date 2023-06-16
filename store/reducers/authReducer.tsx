import { LOGIN,LOGOUT } from "../types";
import { Auth } from '../states/authStates'
import { HYDRATE } from "next-redux-wrapper";
import * as action from '../actions/authAction'

const initialState: Auth = {
    isAuthenticated: false,
    isLoading: true,
    token: '',
};
export default (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload
      }
    case LOGIN:
      return {
        ...state,
        token: action.payload
      }
    case LOGOUT:
      return {
        token: ''
      }
    default:
      return state
    }
  }
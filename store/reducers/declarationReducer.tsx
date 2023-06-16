import { DECLARATION } from "../types";
import { DeclarationInfor } from '../states/declarationStates'
import { HYDRATE } from "next-redux-wrapper";
import * as action from '../actions/declarationAction'

const initialState: DeclarationInfor = {
    declarationer: '',
    time: new Date(),
};
export default (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload
      }
    case DECLARATION:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
    }
  }
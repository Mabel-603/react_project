
import {INCREMENT,DECREMENT} from '../action_types.js'

export const creatIncrementAction = value => ({type:INCREMENT,data:value})
export const creatDecrementAction = value => ({type:DECREMENT,data:value})
export const creatIncrementAsyncAction = (value,delay) =>{
  return dispatch=>{
    setTimeout(() => {
      dispatch(creatIncrementAction(value))
    }, delay);
  }
}
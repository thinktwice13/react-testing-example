import { SAVE_COMMENT } from 'actions/types'

export default (state = [], action) => {
  switch(action.type) {
    case SAVE_COMMENT:
      return {...state, comment: action.payload }
    default: 
      return state
  }
}
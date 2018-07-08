import comments from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment'
  }

  const newState = comments([], action)

  expect(newState).toEqual(['new comment'])
})
import React from 'react';
import { mount } from 'enzyme'
import CommentList from "components/CommentList"
import Root from 'Root'

let wrapped

beforeEach(() => {
  const initialState = {
    comments: ['comment1','comment2']
  }
  wrapped = mount(<Root initialState={initialState}><CommentList/></Root>)
})

afterEach(() => {
  wrapped.unmount()
})

it('creates one <li> per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})
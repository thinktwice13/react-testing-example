import React from 'react';
import { mount } from 'enzyme'
import CommentList from "components/CommentList"
import Root from 'Root'

let wrapped
const comments = ['comment1','comment2']

beforeEach(() => {
  wrapped = mount(<Root initialState={{comments}}><CommentList/></Root>)
})

afterEach(() => {
  wrapped.unmount()
})

it('creates one <li> per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

it('shows text for ech comment', () => {
  comments.forEach(item => {
    expect(wrapped.render().text()).toContain(item);
  })
})
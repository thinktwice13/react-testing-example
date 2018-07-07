import React from 'react';
import ReactDOM from "react-dom"
import { shallow } from "enzyme"
import App from "components/App"
import CommentBox from "components/CommentBox"
import CommentList from "components/CommentList"


it("shows a comment box", () => {
  // const div = document.createElement("div")
  
  // ReactDOM.render(<App/>, div)

  // expect(div.innerHTML).toContain("Comment Box")

  // ReactDOM.unmountComponentAtNode(div);

  const wrapped = shallow(<App/>)

  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it("Shows a comment list", () => {
  const wrapped = shallow(<App />)
  expect(wrapped.find(CommentList).length) .toEqual(1)
})
import React from 'react';

class CommentBox extends React.Component {
  state = {comment: ""}
  handleChange = e => this.setState({comment: e.target.value})
  handleSubmit = e => {
    e.preventDefault()
    this.setState({comment: ""})
    console.log(this.state.comment)
  }
  render() {
    return <form>
      <h4>Add a Comment</h4>
      <textarea 
      value={this.state.comment}
      onChange={this.handleChange}/>
      <div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    </form>
  }
}

export default CommentBox;
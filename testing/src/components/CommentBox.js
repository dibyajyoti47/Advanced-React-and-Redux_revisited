import React from "react";
import * as actions from "actions";
import requireAuth from "./requireAuth";
import { connect } from "react-redux";

class ComponentBox extends React.Component {
  state = { comment: "" };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ comment: "" });
    this.props.saveComment(this.state.comment);
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button onClick={this.props.fetchComments} className="fetch-comments">
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(requireAuth(ComponentBox));

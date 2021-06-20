import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { connect } from "react-redux";
import * as actions from "actions";

class App extends React.Component {
  componentDidMount() {}

  renderButton() {
    if (this.props.auth) {
      return (
        <button
          onClick={() => {
            this.props.changeAuth(false);
          }}
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            this.props.changeAuth(true);
          }}
        >
          Sign In
        </button>
      );
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/post"> Post a comment </Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          {this.renderHeader()}
          <Route path="/post" component={CommentBox} />
          <Route path="/" exact component={CommentList} />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(App);

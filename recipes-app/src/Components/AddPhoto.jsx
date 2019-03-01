import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../actions";

class AddPhoto extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const url = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const title = event.target.elements.title.value;
    const post = {
      id: Number(new Date()),
      title,
      description,
      url
    };
    if (description && url) {
      this.props.newPost(post);
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div>
        <h1 className="text-slanted text-center">PhotoWall</h1>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="link" />
            <input type="text" placeholder="title" name="title" />
            <input type="text" placeholder="Description" name="description" />
            <button className="btn btn-primary">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  newPost: payload => dispatch(addPost(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(AddPhoto);

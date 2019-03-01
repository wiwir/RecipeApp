import React, { Component } from "react";
import { connect } from "react-redux";
import PhotoList from "./PhotoList";
import { removePost } from "../actions";
import "./styles.css";
import NavBar from "./NavBar";

class PhotoWall extends Component {
  handleAddNew = () => {
    this.props.history.push("/addpost");
  };

  render() {
    return (
      <div>
        <NavBar />
        <div>
          <button className="addIcon btn" onClick={this.handleAddNew} />
          <PhotoList
            photos={this.props.photos}
            removePhoto={this.props.removePost}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state,
  getId: state.id
});

const mapDispatchToProps = dispatch => ({
  removePost: id => dispatch(removePost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoWall);

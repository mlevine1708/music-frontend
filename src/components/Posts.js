import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/deletePost";

class Posts extends React.Component {
  state = {};

  handleDelete = (post) => {
    this.props.deletePost(post.id, post.user_id);
  };

  vote = (id) => {
    this.state[id]
      ? this.setState({ [id]: (this.state[id] += 1) })
      : this.setState({ [id]: 1 });
  };

  render() {
    return (
      <div>
        {this.props.posts &&
          this.props.posts.map((post) => (
            <li key={post.id}>
              {post.date} - {post.kind} - {post.genre}{" "}
              <button onClick={() => this.vote(post.id)}>
                Post {this.state[post.id] ? this.state[post.id] : 0}
              </button>
              <button onClick={() => this.handleDelete(post)}>Delete</button>
            </li>
          ))}
      </div>
    );
  }
}

export default connect(null, { deletePost })(Posts);

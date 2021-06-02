import React from "react";
import { connect } from "react-redux";
import { addPost } from "../actions/addPost";

class PostInput extends React.Component {
  state = {
    kind: "album",
    amount: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTransaction(this.state, this.props.user.id);
    this.setState({
      kind: "album",
      amount: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Post:</label>
          <select
            name="kind"
            value={this.state.kind}
            onChange={this.handleChange}
          >
            <option>albums</option>
            <option>songs</option>
            <option>artists</option>
          </select>
          <label>Top Ten:</label>
          <input
            type="text"
            name="post"
            value={this.state.user}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addPost })(PostInput);

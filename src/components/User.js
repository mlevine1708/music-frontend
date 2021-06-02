import React from "react";
import { Redirect } from "react-router-dom";
import UserEdit from "./UserEdit";

import PostsContainer from "../containers/PostsContainer";

const User = (props) => {
  console.log(props);
  // let account = props.accounts[props.match.params.id - 1]
  let user = props.users.filter((user) => user.id == props.match.params.id)[0];

  console.log(user);
  return (
    <div>
      <h2>{user ? user.name : null}</h2>
      <PostsContainer user={user} />
      <br />
      <h4>Edit User</h4>
      <Edit user={user} />
    </div>
  );
};

export default User;

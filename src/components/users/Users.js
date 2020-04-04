import React, { useContext } from "react";
import Useritem from "../users/Useritem";
import GithubContext from "../../context/github/githubContext";

import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  }
  return (
    <div style={userStyle}>
      {users.map(user => (
        <Useritem key={user.id} user={user} />
      ))}
    </div>
  );
};
Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;

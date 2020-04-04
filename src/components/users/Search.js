import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { searchUsers, clearUsers, users } = githubContext;
  const { showAlert } = alertContext;

  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      showAlert("Please enter a valid text", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users.."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>

      {users.length > 0 ? (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      ) : null}
    </div>
  );
};
Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
};

export default Search;

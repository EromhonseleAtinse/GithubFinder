import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  //   console.log(res);
  // }

  // const searchUsers = async text => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   setUsers(res.data.items);
  //   setLoading(false);
  //   setShowButton(true);

  //   console.log(res);
  // };

  // const showAlert = (msg, type) => {
  //   setAlert({ msg: msg, type: type });

  //   setTimeout(() => setAlert(null), 1500);
  // };
  // showClear = () => (this.state.users.length > 0 ? true : false);
  // showClear = () => {
  //   this.setState({ showButton: true });
  // };

  return (
    <GithubState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Alert alert={alert} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login"
                  render={props => <User {...props} />}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

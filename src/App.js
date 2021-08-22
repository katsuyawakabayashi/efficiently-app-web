import React from "react";
import "./index.css";
import { Inbox, Login, Security, Themes, Upgrade, Signup } from "./pages";
import UserProvider from "./contexts/AuthContext";
import TaskContextProvider from "./contexts/TaskContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Reset from "./pages/Reset";
import Profile from "./pages/Profile";
import EntryContextProvider from "./contexts/EntryContext";
import Settings from "./pages/Settings";
import TaskScreen from "./screens/TaskScreen";

function App() {
  return (
    <Router>
      <UserProvider>
        <TaskContextProvider>
          <Switch>
            <PrivateRoute exact path="/" component={TaskScreen} />
            <PrivateRoute path="/today" component={TaskScreen} />
            <PrivateRoute path="/star" component={TaskScreen} />
            <PrivateRoute path="/upcoming" component={TaskScreen} />
            <PrivateRoute path="/archive" component={TaskScreen} />
            <PrivateRoute path="/search" component={TaskScreen} />
            <EntryContextProvider>
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/security" component={Security} />
              <PrivateRoute path="/themes" component={Themes} />
              <PrivateRoute path="/upgrade" component={Upgrade} />
              <PrivateRoute path="/settings" component={Settings} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/reset" component={Reset} />
            </EntryContextProvider>

            <Redirect to="/" component={TaskScreen} />
          </Switch>
        </TaskContextProvider>
      </UserProvider>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import "./index.css";
import Inbox from "./pages/index";
import Star from "./pages/star";
import Archive from "./pages/archive";
import Upcoming from "./pages/upcoming";
import test_tasks_1 from "./pages/data/test_tasks_1";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // unfiltered tasks
  const [tasks, setTasks] = useState(test_tasks_1);

  // screen name hook,
  const [sideScreenName, setSideScreenName] = useState("");

  // list type (inbox, star, ...) hook, required for filtering tasks in SectionTasks
  const [sectionType, setSectionType] = useState("inbox");
  return (
    <>
      <Router>
        <Switch>
          <Route path="/star">
            <Star
              tasks={tasks}
              setTasks={setTasks}
              sideScreenName={sideScreenName}
              sectionType={sectionType}
              setSectionType={setSectionType}
            />
          </Route>
          <Route path="/archive">
            <Archive
              tasks={tasks}
              setTasks={setTasks}
              sideScreenName={sideScreenName}
              sectionType={sectionType}
              setSectionType={setSectionType}
            />
          </Route>
          <Route path="/upcoming">
            <Upcoming
              tasks={tasks}
              setTasks={setTasks}
              sideScreenName={sideScreenName}
              sectionType={sectionType}
              setSectionType={setSectionType}
            />
          </Route>
          <Route exact path="/">
            <Inbox
              tasks={tasks}
              setTasks={setTasks}
              sideScreenName={sideScreenName}
              sectionType={sectionType}
              setSectionType={setSectionType}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

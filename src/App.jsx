import React from "react";
import StudentCard from "./components/studentCard";
import { Route, Switch } from "react-router";
import StudentFormAdd from "./components/studentFormAdd";
import StudentFormEdit from "./components/studentFormEdit";

function App() {
  return <>
    <div className="container">
      <Switch>
            <Route path="/add/" component={StudentFormAdd} />
            <Route path="/edit/" component={StudentFormEdit} />
            <Route exact path="/" component={StudentCard} />
        </Switch>
    </div>
  </>;
};

export default App;

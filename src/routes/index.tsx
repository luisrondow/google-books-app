import { Switch, Route } from "react-router-dom";

import Home from "../containers/Home";
import Book from "../containers/Book";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/book/:id" exact component={Book} />
    </Switch>
  );
}

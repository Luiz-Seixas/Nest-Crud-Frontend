import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/register";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Register} />
    </Switch>
  );
}

export default Routes;

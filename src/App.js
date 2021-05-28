import { Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Feed from "./components/feed/Feed";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          path="/feed"
          component={Feed}
        />
        <Route
          path="*"
          component={NotFound}
        />
      </Switch>
    </div>
  );
}

export default App;

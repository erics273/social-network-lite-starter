import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Feed from "./pages/feed/Feed";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";

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
          exact
          path="/login"
          component={Login}
        />
        <Route
          exact
          path="/feed"
          component={Feed}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
      </Switch>
    </div>
  );
}

export default App;

import { Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import NotFound from "./components/notFound/NotFound";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
            exact
            path="/"
            component={Home}
          />
           <Route
            path="/home"
            component={Home}
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

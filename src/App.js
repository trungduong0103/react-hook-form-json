import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { VanillaTestRJSF } from "./forms/react-jsonschema-form";
import TestRHF from "./forms/react-hook-form";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/test-rjsf" component={VanillaTestRJSF} />
          <Route path="/test-rhf" component={TestRHF} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

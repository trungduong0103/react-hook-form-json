import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  VanillaTestRJSF,
  MaterialUITestRJSF,
} from "./forms/react-jsonschema-form";
import { VanillaTestRHF, MaterialUITestRHF } from "./forms/react-hook-form";
import Demo from './rhf-with-json-schema/Demo';

const LinkButtons = () => {
  return (
    <div className={styles.btnWrapper}>
      <Link className={styles.btn} to="/test-vanilla-rjsf">
        Test RJSF
      </Link>

      <Link className={styles.btn} to="/test-material-ui-rjsf">
        Test Material UI RJSF
      </Link>

      <Link className={styles.btn} to="/test-vanilla-rhf">
        Test RHF
      </Link>
      <Link className={styles.btn} to="/test-material-ui-rhf">
        Test Material UI RHF
      </Link>
    </div>
  );
};

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path="/" exact component={LinkButtons} />
          <Route path="/test-vanilla-rjsf" exact component={VanillaTestRJSF} />
          <Route
            path="/test-material-ui-rjsf"
            exact
            component={MaterialUITestRJSF}
          />

          <Route path="/test-vanilla-rhf" exact component={VanillaTestRHF} />
          <Route
            path="/test-material-ui-rhf"
            exact
            component={MaterialUITestRHF}
          />

          <Route path="/demo-schema" exact component={Demo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

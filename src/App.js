import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { VanillaTestRJSF } from "./forms/react-jsonschema-form";
import { VanillaTestRHF } from "./forms/react-hook-form";

const LinkButtons = () => {
  return (
    <div className={styles.btnWrapper}>
      <Link
        style={{ marginRight: "10px" }}
        className={styles.btn}
        to="/test-rjsf"
      >
        Test RJSF
      </Link>

      <Link
        style={{ marginLeft: "10px" }}
        className={styles.btn}
        to="/test-rhf"
      >
        Test RHF
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
          <Route path="/test-rjsf" exact component={VanillaTestRJSF} />
          <Route path="/test-rhf" exact component={VanillaTestRHF} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

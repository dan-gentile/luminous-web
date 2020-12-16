import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Coffee from "./pages/Coffee/Coffee";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/theDrop" component={Store} />
        <Route exact path="/coffee" component={Coffee} />
      </Switch>
    </Router>
  );
};

export default App;

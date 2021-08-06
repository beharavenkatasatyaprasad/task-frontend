import "./App.css";
import Main from "./views/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UpdateAgent from "./views/UpdateAgent";
import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/">
            <Main />
          </Route>
          <Route path="/update/:agentId">
            <UpdateAgent />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from "./Chat";
import Message from "./Message";

function App() {
  return (
    //change app to
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

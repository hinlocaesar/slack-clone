import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    //change app to
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          {/* React Router ->Chat screen*/}
        </div>
      </Router>
    </div>
  );
}

export default App;

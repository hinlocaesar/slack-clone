import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    //change app to
    <div className="app">
      <h1>Caesar Hinlo Slack Clone</h1>

      <Header />
      <div className="app__body">
        <Sidebar />
        {/* React Router ->Chat screen*/}
      </div>
    </div>
  );
}

export default App;

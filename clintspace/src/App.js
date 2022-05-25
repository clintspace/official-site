import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <div className='container'> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* </div> */}
      </div>
    </Router>
  );
}

export default App;

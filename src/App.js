import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Dashboard from './components/Dashboard';
import './App.css';
import Analytics from "./components/Analytics";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard/>} />
          <Route path="/analytics" exact element={<Analytics/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>

  );
}

export default App;

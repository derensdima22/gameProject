import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./component/header/header";
import { HomePages } from "./pages/homePage/homePages";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path={"/"} element={<HomePages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

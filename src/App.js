import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, Videos, Research } from "./pages";
import { TopNav, Footer } from "./components";

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/videos' exact element={<Videos />} />
          <Route path='/research' exact element={<Research />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

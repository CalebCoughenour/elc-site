import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, Videos, Research, News } from "./pages";
import { TopNav, Footer } from "./components";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/videos' exact element={<Videos />} />
          <Route path='/research' exact element={<Research />} />
          <Route path='/news' exact element={<News />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

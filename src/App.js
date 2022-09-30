import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, Videos, Research, News } from "./pages";
import { TopNav, Footer, BackToTopButton } from "./components";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/research' element={<Research />} />
          <Route path='/news' element={<News />} />
        </Routes>
        <BackToTopButton />
        <Footer />
      </Router>
    </>
  );
}

export default App;

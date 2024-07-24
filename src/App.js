import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/layout/Home';
import Footer from './component/layout/Footer';
import CreateResume from './component/CreateResume';
import ViewResume from './component/ViewResume';
import Header from './component/layout/Header';

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-resume" element={<CreateResume />} />
              <Route path="/view-resume" element={<ViewResume />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

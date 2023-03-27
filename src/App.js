
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import Layout from './Layout/Layout';
import Contact from './contact/contact';
import Main from "./Main/Main";
import About from "./About/About"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/Main" element={<Main />} />
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

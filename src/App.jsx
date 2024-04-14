import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import BookModal from './BookModal';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const { isAuthenticated } = useAuth0();
  


  return (
    <>

      <Router>
        <Header />
          {isAuthenticated ? (<Routes>
          <Route
            exact path="/"
            element={<BestBooks />}
          />
          <Route
            exact path="/About"
            element={<About />}
          />
          <Route
            exact path="/Profile"
            element={<Profile />}
          />
        </Routes>) : <h2>Please Login to continue</h2>}
        <br/>

        <Footer />
      </Router>
    </>
  );
}

export default App;
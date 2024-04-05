import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import BookModal from './BookModal';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSaveChanges = async () => {
    try {
      // Send the form data to the backend endpoint using Axios
      const response = await axios.post('http://localhost:3001/books', {
        'title' : title,
        'description' : description,
        'status' : status
      });
      console.log('Response:', response.data);

      // Close the modal
      handleClose();
    } catch (error) {
      console.error('Error:', error);
      // Handle error here (e.g., show error message to the user)
    }
  };




  return (
    <>
      <BookModal show={show} setTitle={setTitle} setDescription={setDescription} setStatus={setStatus} handleSaveChanges={handleSaveChanges}/>
      <Router>
        <Header />
        <Routes>
          <Route
            exact path="/"
            element={<BestBooks />}
          />
          <Route
            exact path="/About"
            element={<About />}
          />
        </Routes>
        <br/>
        <Button variant="primary" onClick={handleShow}>Add Book</Button>
        <Footer />
      </Router>
    </>
  );
}

export default App;
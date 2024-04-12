import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false,
      newTitle: '',
      newDescription: '',
      newStatus: '',
      currentId: ''
    }
  }

  fetchBooks() {
    axios.get('https://can-of-books-backend-ryex.onrender.com/books').then(response => {
      this.setState({ books: response.data });
    });
  }

  handleDeleteBook = async (bookId) => {
    try {
      // Send a DELETE request to the server to delete the book
      const response = await axios.delete(`https://can-of-books-backend-ryex.onrender.com/books/${bookId}`);
      console.log('Book deleted:', response.data);
      this.fetchBooks();

    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  handleUpdateBook = async () => {
    try {

      const response = await axios.put(`https://can-of-books-backend-ryex.onrender.com/books/${this.state.currentId}`, {
        'title': this.state.newTitle,
        'description': this.state.newDescription,
        'status': this.state.newStatus
      });
      console.log('Book updated:', response.data);
      this.fetchBooks();
    } catch (error) {
      console.error('Error updating book book:', error);
    }
    this.handleClose()
  };

  componentDidMount() {
    this.fetchBooks();
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  setNewTitle(target) {
    this.setState({ newTitle: target });
    console.log(this.state.newTitle);
  }

  setNewDescription(target) {
    this.setState({ newDescription: target });
  }

  setNewStatus(target) {
    this.setState({ newStatus: target });
  }

  setCurrentId(target) {
    this.setState({ currentId: target});
  }

  prepareUpdateBook(book){
    this.setCurrentId(book._id)
    this.setNewTitle(book.title);
    this.setNewDescription(book.description);
    this.setNewStatus(book.status);
    this.handleShow();
  }


  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <Carousel style={{ marginTop: '150px', color: 'black' }}>
            {this.state.books.map((book, index) => (
              <Carousel.Item key={index}>
                <div className="carousel-content">
                  <h5>{book.title}</h5>
                  <p>{book.description}</p>
                  <div className="button-group">
                    <Button variant="primary" onClick={() => this.handleDeleteBook(book._id)}>Delete This Book</Button>
                    <Button variant="secondary" onClick={() => this.prepareUpdateBook(book)}>Update Book</Button>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found</h3>
        )}
        <Modal show={this.state.show}>
          <Modal.Header closeButton onClick={() => this.handleClose()}>
            <Modal.Title>Add a Book!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control value={this.state.newTitle} onChange={(e) => this.setNewTitle(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={this.state.newDescription} onChange={(e) => this.setNewDescription(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Control value={this.state.newStatus} onChange={(e) => this.setNewStatus(e.target.value)} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" onClick={() => this.handleUpdateBook()}>
        Save Changes
      </Button>
            <Button variant="secondary" onClick={() => this.handleClose()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default BestBooks;

import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  fetchBooks() {
    axios.get('http://localhost:3001/books').then(response => {
      this.setState({ books: response.data });
    });
  }

  forceRerender = () => {
    this.setState(this.state);
  };

  handleDeleteBook = async (bookId) => {
    try {
      // Send a DELETE request to the server to delete the book
      const response = await axios.delete(`http://localhost:3001/books/${bookId}`);
      console.log('Book deleted:', response.data);
      // this.fetchBooks();
      // this.forceRerender();
    } catch (error) {
      console.error('Error deleting book:', error);
      // Handle errors here
    }
  };

  componentDidMount() {
    this.fetchBooks();
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
                <h5>{book.title}</h5>
                <p>{book.description}</p>
                <Button variant="primary" onClick={() => this.handleDeleteBook(book._id)}>Delete This Book</Button>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found</h3>
        )}
      </>
    );
  }
}

export default BestBooks;

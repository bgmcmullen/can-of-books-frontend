import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';


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

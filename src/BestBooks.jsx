
import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  fetchBooks() {
    axios.get('http://localhost:3001/books').then(response => {
      this.setState({ bookData: response.data});
    });

  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
      <p>{this.state}</p>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;

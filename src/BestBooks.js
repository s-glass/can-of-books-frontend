import React from 'react';
import axios from 'axios';
import { Carousel, Container } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: ''
    }
  }

  getBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;

      let axiosData = await axios.get(url);
      // console.log('FIRST LOOK AT THE DATA:', axiosData);

      this.setState({
        books: axiosData.data
      })

    } catch (error) {
      console.log(error.response);

    }
  }

  componentDidMount() {
    this.getBooks();
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
          {
            this.state.books.length > 0 ? (
    
            <Container>

              <Carousel>
                  {this.state.books.map((book, key) => (
                    <Carousel.Item key={book._id}>
                      <img src="../img/Screenshot 2023-03-25 at 2.02.00 AM (2).png"
                        alt={book.description}
                      />
                      <Carousel.Caption>
                        {book.title} is about {book.description}
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
              </Carousel>
            </Container>
            ) : (
              <h3>No Books Found </h3>
          )};
      </>
    )
  }
}

export default BestBooks;
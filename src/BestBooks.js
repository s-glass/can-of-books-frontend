import { Component } from 'react';
import axios from 'axios';
import { Carousel, Container, Button } from 'react-bootstrap';
import BookModal from './BookModal';
// import bookImg from './img/random.png'

class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: '',
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

  deleteBook = async (id) => {

    try{
      // Axios will send ID of cat to delete
      
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`
  
      await axios.delete(url);
  
  
      // Update state to then remove the delete books => use .filter() to get 
      
      let updatedBooks = this.state.books.filter(book => book._id !== id); // easy way to do this is {this.getBooks}
  
  
      this.setState({
        books: updatedBooks,
      })
  
  
  
  
    }catch(error){
      console.log(error.response);
    }
  
  }

  handleBookSubmit = (event) => {
    event.preventDefault();

  
    let bookObj = {
      title: event.target.title.value,  //--enter the values from forms --
      description: event.target.description.value,
      status: event.target.status.checked   //--needs to be checked--
    }
    this.postBook(bookObj); // passed this handleSubmit function to the postBook function
    this.props.closeModal();
  }
  

  
  postBook = async (bookObj) => {
    try{
    let url = `${process.env.REACT_APP_SERVER}/books`
    let createdBook = await axios.post(url, bookObj) // --ON a post, 

    this.setState({
      books: [...this.state.books, createdBook.data],
    })
  
    } catch(error){
      console.log(error.message)
    }
  }

  componentDidMount() {
    this.getBooks();
  }




  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {
    console.log(this.state.books);
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
                      <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        alt={book.description}
                      />
                      <Carousel.Caption>
                        {book.title} is about {book.description}
                        <Button onClick= {() => {this.deleteBook(book._id)}}>Delete</Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
              </Carousel>
              {this.props.showModal ? <BookModal show={this.props.openModal} onHide={this.props.closeModal} handleBookSubmit={this.handleBookSubmit}/>:<Button onClick= {this.props.openModal}>Add Book</Button>}

            </Container>
            ) : (
              <h3>No Books Found </h3>
          )}
      </>
    )
  }
}


export default BestBooks;
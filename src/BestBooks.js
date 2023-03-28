import { Component } from 'react';
import axios from 'axios';
import { Carousel, Container, Button } from 'react-bootstrap';

class BestBooks extends Component {
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
                  <div key={key}>
                    <Book book={book}/> 

                    <Carousel.Item key={book._id}>
                      <img src="../img/Screenshot 2023-03-25 at 2.02.00 AM (2).png"
                        alt={book.description}
                      />
                      <Carousel.Caption>
                        {book.title} is about {book.description}
                      </Carousel.Caption>
                    </Carousel.Item>
                    </div>
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
class Book extends Component {
  render() {
    return (
      <>
      <p>{this.props.book.title} is about {this.props.book.description}</p>
      <Button onClick= {() => {this.props.deleteBook(this.props.book._id)}}>Delete</Button>
      </>
    )
  }
}

export default BestBooks;

/* 
//delete goes where state is which is here -- wherever state lives is where to update the delete state

deleteBook = async (id) => {

  try{
    // Axios will send ID of cat to delete
    
    let url = `${process.env.REACT_APP_SERVER}/books/${id}`

    await axios.delete(url);


    // Update state to then remove the delete books => use .filter() to get 
    
    let updatedBooks = this.state.books.filter(book => book._id ! == id); // easy way to do this is {this.getBooks}


    this.setState({
      books: updatedBooks,
    })




  }catch{
    console.log(error.response);
  }

}

***** Create a MODAL that will pop up when a button is pressed to add a book **** // handler lives where state lives --- modal form can go else where (form needs fields for each part of the schema and the status)*****

****handleBookSubmit -- builds the added book****

** #1 comes from Form and builds Book Object **

handleBookSubmit = (event) => {
  event.preventDefault();

  // Build Cat Object from Form Data
  let bookObj = {
    title: event.target.title.value  //--enter the values from forms --
    description: event.target.description.value
    status: event.target.status.checked   //--needs to be checked--
  }
  this.postBook(bookObj); // passed this handleSubmit function to the postBook function

}



***adds book to database***

postBook = async (bookObj) => {

  try{

  let url = `${process.env.REACT_APP_SERVER}/cats`

  let createdBook = await axios.post(url, bookObj) // --ON a post, 

  this.setState({
    books: [...this.state.books, createdBook.data],
  })

  } catch(error){
    console.log(error.message)
  }


}

*/
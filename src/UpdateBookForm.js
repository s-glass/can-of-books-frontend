import React from 'react';
import { Container, Form, Button } from 'react-bootstrap'

class UpdateBookForm extends React.Component {

  handleBookSubmit = (event) => {
    event.preventDefault();

    let bookToUpdate = {
      title: event.target.title.value,  //--enter the values from forms --
      description: event.target.description.value,
      status: event.target.status.checked,
      _id: this.props.book._id,
      _v: this.props.book._v 
    }
    // Handler from bestbooks.js to update database
    this.props.updateBook(bookToUpdate);
  }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onHide}>

          <Modal.Header closeButton><Modal.Title>book title</Modal.Title></Modal.Header>

          <Container className="mt-5">
            <Form onSubmit={this.props.handleBookSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="text" defaultValue={this.props.book.name}/>
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" defaultValue={this.props.book.description} />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Check type="checkbox" label="read" defaultValue={this.props.book.status} />
              </Form.Group>
              <Button type="submit">Update Book</Button>
            </Form>
          </Container>
        </Modal>
      </>
    );
    )
  }
}

export default UpdateBookForm;




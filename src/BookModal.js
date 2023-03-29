import { Modal, Form, Button, Container } from 'react-bootstrap';
import { Component } from 'react';

class BookModal extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onHide}>

          <Modal.Header closeButton><Modal.Title>book title</Modal.Title></Modal.Header>

          <Container className="mt-5">
            <Form onSubmit={this.props.handleBookSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Check type="checkbox" label="read" />
              </Form.Group>
              <Button type="submit">Add Book</Button>
            </Form>
          </Container>
          </Modal>
        </>
        );
}
}


export default BookModal;

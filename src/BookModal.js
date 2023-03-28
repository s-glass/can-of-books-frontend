import { Modal , Form, Button } from 'react-bootstrap';
import { Component } from 'react';

class BookModal extends Component {
  render() {
    return (
      <>
      <Modal show={this.props.show} onHide={this.props.onHide}>
    
      <Modal.Header closeButton><Modal.Title>Proof of Life </Modal.Title></Modal.Header>
      
      </Modal>
      </>
    )
  }
}

export default BookModal;













// render() {
//   console.log('App State >>> ', this.state);
//   return (
//     <>
//       <header>
//         <h1>Cool Cats</h1>
//       </header>
//       <main>
//         {
//           this.state.cats.length > 0 &&
//           <>
//             <Cats
//               cats={this.state.cats}
//               deleteCat={this.deleteCat}
//             />
//           </>
//         }
//         <Container className="mt-5">
//           <Form onSubmit={this.handleCatSubmit}>
//             <Form.Group controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control type="text" />
//             </Form.Group>
//             <Form.Group controlId="color">
//               <Form.Label>Color</Form.Label>
//               <Form.Control type="text" />
//             </Form.Group>
//             <Form.Group controlId="location">
//               <Form.Label>Location</Form.Label>
//               <Form.Control type="text" />
//             </Form.Group>
//             <Form.Group controlId="spayNeuter">
//               <Form.Check type="checkbox" label="spay-neuter" />
//             </Form.Group>
//             <Button type="submit">Add Cat</Button>
//           </Form>
//         </Container>
//       </main>
//     </>
//   );
// }
// }

import { Component } from "react";
import { Card, } from 'react-bootstrap'
// import { sarah, dasha} from './img'
import bookImg from './img/dasha.jpg'
import bookImg2 from './img/sarah.jpg'

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <main>
      <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={bookImg2}/>
        <Card.Body>
        <Card.Title animation="glow">Sarah Glass</Card.Title>
          <Card.Text>Software Developer student at Code Fellows</Card.Text>     
        </Card.Body>
      </Card>
      </>
      <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={bookImg} alt="photo of developer"/>
        <Card.Body>
          <Card.Title animation="glow">Dasha Burgos</Card.Title>
          <Card.Text>Software Developer student at Code Fellows</Card.Text>     
        </Card.Body>
      </Card>
      </>
      </main>

  );
  }
};

export default Profile;
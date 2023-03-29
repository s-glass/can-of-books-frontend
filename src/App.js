import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
// import BookModal from './BookModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: '',
      showModal: false,
      selectedBook: {},

    }
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    })
  }

  openModal = () => {
    this.setState({
      showModal: true,

    })
  }


  render() {

    return (
      <>
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks openModal={this.openModal} showModal={this.state.showModal} closeModal={this.closeModal}/>}
            >
            </Route>
            <Route 
              exact path="/about"
              element={<About />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
        </>
        
        <div>

      </div>
      </>
    )
  }
}

export default App;
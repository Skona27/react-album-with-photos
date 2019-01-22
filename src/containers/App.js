import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

// Layout view-components
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

// Pages stateful-components
import AlbumPage from './Pages/AlbumPage';
import PhotosPage from './Pages/PhotosPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
            <Route exact path='/' component={AlbumPage}/>
            <Route path='/albums/:id' component={PhotosPage}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;

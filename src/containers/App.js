import React, { Component } from 'react';
import {HashRouter as Router, Route} from "react-router-dom";

// Layout view-components
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

// Pages stateful-components
import AlbumPage from './Pages/AlbumPage';
import PhotosPage from './Pages/PhotosPage';

// HOC
import Aux from '../hoc/Aux';

class App extends Component {
  render() {
    return (
      <Router>
        <Aux>
          <Header/>
          <Route exact path='/' component={AlbumPage}/>
          <Route path='/albums/:id' component={PhotosPage} />
          <Footer/>
        </Aux>
      </Router>
    );
  }
}

export default App;

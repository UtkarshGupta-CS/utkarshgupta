import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;

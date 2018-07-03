import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Article from './article'
import Author from './author'
import CommentsPost from './comments'
import Sponsor from './sponsor'
import Title from './title'
import CoClickbait from './CoClickbait'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
    <main className="expanded row">
      <div className="large-8 medium-12 columns article">

        <Title />
      
       <Author />

      <Article /> 
 
      <CommentsPost />
 
      </div>

      <Sponsor />

      <CoClickbait />
    
    </main>

    <footer className="expanded row">
      <h6>&copy; 2017 Erebor Industries</h6>
      <h6 className="float-right">All rights reserved</h6>
    </footer>
      </div>
    );
  }
}

export default App;

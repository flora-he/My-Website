import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './pages/HomePage.js';
import Contact from './pages/contact.js';
import PicturesPage from './pages/PicturesPage.js';
import AboutPage from './pages/about.js';

function App() {
  return (
    <div className="App">

    <NavBar/>

      <div class = "pageHolder">
        <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/pictures" component={PicturesPage} />
        <Route exact path="/about" component={AboutPage} />

      </Router>
      </div>
      <Footer/>
    </div>
  );
}

class Footer extends React.Component{
  render(){
    return(
      <div class = "footer">
        Thanks for coming!
      </div>
    )
  }
}

class NavBar extends React.Component {
  render(){
    return(
      <div class = "navbar">
        <a class = "navbutton" href = "/">Home</a>
        <a class = "navbutton" href = "/contact">Contact Me</a>
        <a class = "navbutton" href = "/pictures">My Pictures</a>
        <a class = "navbutton" href = "/about">About</a>
      </div>
    );
  }
}

export default App;

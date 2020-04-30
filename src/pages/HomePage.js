import React from 'react';
import boo_img from '../images/boo.jpg';

class HomePage extends React.Component {
  render() {
    return(
      <div class="page">
        <h1>Hi! I'm Flora</h1>
        <div class = "intro">
        <img class = "pic" src={boo_img} alt="boo">
        </img>
        <p class = "profile">oh say can you see by the dawns early light</p>
        </div>
      </div>
    );
  }
}
export default HomePage

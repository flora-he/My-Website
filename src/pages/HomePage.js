import React from 'react';
import boo_img from '../images/boo.jpg';

class HomePage extends React.Component {
  render() {
    return(
      <div class="page">
        <h1 class= "headerFont">Hi, I'm Flora</h1>
        <div class = "intro">
          <img class = "homePagePic" src={boo_img} alt="boo">
          </img>
        </div>
        <div>
          <h1 class = 'headerFont'> ~ Welcome ~ </h1>
        </div>
        <div>
        <p class = "profile paraFont">I am currently as rising sophomore and
        I attend the University of Texas at Austin, pursing a degree in
        Management Information systems. This website began as a project assigned by
        Texas Convergent, a wonderful organization in my university, and I'm going to use
        it to nuture my interests and creativity</p>
        </div>
        <div>
        <p class = 'profile paraFont'>
        I'm passionate about solving the issues we face today by using data
        science. I'm excited about making a change in our society's healthcare,
        environmental sustainability, and racial injustices. I believe there is
        so much more we can do, and I plan on being a part of the journey.</p>
        </div>
      </div>
    );
  }
}
export default HomePage

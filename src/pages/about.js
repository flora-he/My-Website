import React from 'react';
import greenshirt from '../images/greenshirt.jpg'

class about extends React.Component {
  render() {
    return(
      <div class = "page">
        <img class = "pic" src ={greenshirt} alt = "image couldn't be displayed"/>
        <h1 class = 'headerFont'>My Life</h1>
        <div>
        <p class = 'paraFont'>  I was born in Chicago, Illinois, and raised in Austin, Texas,
          and I've been here ever since. I graduated from Westwood High School
           where I was Co-Captain of the Varsity Tennis Team. We won State Champs in
           my senior year! Now, I currently attend the University of Texas at
           Austin where I study Management Information Systems. </p>

        <p class = 'paraFont'>To introduce myself further, I'm going to list a couple of my favorite things:</p>
        <p class = 'paraFont'>1. Favorite cuisine: Thai Food</p>
        <p class = 'paraFont'>2. Favorite Netflix show: Grey's Anatomy (I'm too far in to quit)</p>
        <p class = 'paraFont'>3. Favorite drink: Good ol' water</p>
        <p class = 'paraFont'>4. Favorite book: A Thousand Splendid Suns</p>
        <p class = 'paraFont'>6. Favorite artist: Wild Party</p>
        <p class = 'paraFont'>5. Favorite thing to relax: Long drives</p>

        </div>
      </div>
    )
  }
}
export default about

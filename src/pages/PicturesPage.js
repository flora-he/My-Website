import React from 'react';
import boo_img from '../images/boo.jpg';

class PicturesPage extends React.Component {
  render() {
    return(
      <div class = "page">
        <h1>My Pics</h1>
        <div class = "pictureContainer">
            <img class = "pic" src ={boo_img} alt = "pic of me"/>
            <img class = "pic" src ="https://c8.alamy.com/comp/GFECA5/new-york-united-states-27th-july-2016-chef-guy-fieri-presented-designed-GFECA5.jpg"/>
            <img class = "pic" src ="https://c8.alamy.com/comp/GFECA5/new-york-united-states-27th-july-2016-chef-guy-fieri-presented-designed-GFECA5.jpg"/>
            <img class = "pic" src ="https://c8.alamy.com/comp/GFECA5/new-york-united-states-27th-july-2016-chef-guy-fieri-presented-designed-GFECA5.jpg"/>
            <img class = "pic" src ="https://c8.alamy.com/comp/GFECA5/new-york-united-states-27th-july-2016-chef-guy-fieri-presented-designed-GFECA5.jpg"/>
            <img class = "pic" src ="https://c8.alamy.com/comp/GFECA5/new-york-united-states-27th-july-2016-chef-guy-fieri-presented-designed-GFECA5.jpg"/>
        </div>
      </div>
    )
  }
}
export default PicturesPage

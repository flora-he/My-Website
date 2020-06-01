import React from 'react';
import boo_img from '../images/boo.jpg';
import britney2_img from '../images/britney2.jpg'
import fun_img from '../images/fun.jpg'
import game_img from '../images/game.jpg'
import irenes_img from '../images/irenes.jpg'
import face_img from '../images/ix fill in face.jpg'
/*import pooja1 from '../images/pooja.JGP'*/
import family from '../images/family.jpg'
import boba from '../images/boba.JPG'
import megna from '../images/megna.jpg'
import zilker from '../images/zilker.jpg'
import mommmy from '../images/mommy.jpg'
import blues from '../images/blues.jpg'

class PicturesPage extends React.Component {
  render() {
    return(
      <div class = "page">
        <h1 class = 'headerFont'>Just some pics :)</h1>
        <div class = 'row'>
          <div class = "column">
              <img class = "pic" src ={britney2_img} alt = "image couldn't be displayed"/>
              <img class = "pic" src ={fun_img} alt = "image couldn't be displayed"/>
              <img class = "pic" src ={family} alt = "image couldn't be displayed"/>
              <img class = "pic" src ={game_img} alt = "image couldn't be displayed"/>
              <img class = "pic" src ={face_img} alt = "image couldn't be displayed"/>
              <img class = "pic" src ={irenes_img} alt = "image couldn't be displayed"/>
            </div>
            <div class = "column">
                <img class = "pic" src ={family} alt = "image couldn't be displayed"/>
                <img class = "pic" src ={boba} alt = "image couldn't be displayed"/>
                <img class = "pic" src ={megna} alt = "image couldn't be displayed"/>
                <img class = "pic" src ={zilker} alt = "image couldn't be displayed"/>
                <img class = "pic" src ={mommmy} alt = "image couldn't be displayed"/>
                <img class = "pic" src ={blues} alt = "image couldn't be displayed"/>
              </div>
        </div>
      </div>
    )
  }
}
export default PicturesPage

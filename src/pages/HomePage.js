import React, { Component } from 'react'
import CardsBar from '../components/CardsBar/CradsBar'
import * as imgGenerator from "../utils/imgGenerator"

import Card from "../components/CardsBar/Carousel/Card"

export default class HomePage extends Component {

  render() {
    const styleHome = Object.assign({}, styles.HomePage, {backgroundImage: this.state.backImgUrl});
    return (
      <div className="HomePage" style={styleHome}>
        {/* <Card src={imgGenerator.getCardImageSrc(0)} style={{marginBottom: '40px'}}/> */}
        <CardsBar style={styles.CardsBar} data={this.state.cardsBarData} 
                  tapCard={(title, i)=>{this.changeBackground(title, i)}}></CardsBar>
      </div>
    );
  }

  constructor(props) {
      super(props);
      this.state = { backImgUrl: imgGenerator.getCoverImageUrl(1),
                     cardsBarData: cardsBarData};
  }

  changeBackground(title, cardIndex) {
    console.log(title, cardIndex);
    if(cardIndex <= 2) this.setState({ backImgUrl: imgGenerator.getCoverImageUrl(cardIndex) });
  }

}

const styles = {
    HomePage: {
        width: '100%', height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex', flexDirection: 'column-reverse', 
        WebkitTransition: 'background-image 0.4s ease-in-out',
        transition: 'background-image 0.4s ease-in-out'
    },
    CardsBar: {
        marginBottom: '-26px', width: '100%'
    }
}

const cardsBarData = {'UX Design': [0, 1, 2, 2, 1, 0, 1, 2], 'Coding': [2, 0, 1, 2]};
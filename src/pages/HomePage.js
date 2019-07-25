import React, { Component } from 'react'
import CardsBar from '../components/CardsBar/CradsBar'
import { projectsData, linksData } from '../utils/dataProvider'

export default class HomePage extends Component {

  render() {
    return (
      <div className="HomePage" style={styles.HomePage}>
        <CardsBar style={styles.CardsBar} data={this.state.projectsData} 
                  tapCard={(title, i)=>{this.openLink(title, i)}}></CardsBar>
      </div>
    );
  }

  constructor(props) {
      super(props);
      this.state = { projectsData: projectsData };
  }

  openLink(title, cardIndex) {
    console.log(title, cardIndex);
    const url = projectsData[title][cardIndex].link;
    window.open(url, '_blank');
  }

}

const styles = {
    HomePage: {
        width: '100%', height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        position: 'relative'
    },
  
    CardsBar: {
      position: 'absolute', bottom: '0px', width: '100%'
    }
}

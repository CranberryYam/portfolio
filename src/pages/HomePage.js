import React, { Component } from 'react'
import CardsBar from '../components/CardsBar/CradsBar'

export default class HomePage extends Component {

  render() {
    return (
      <div className="HomePage" style={styles.HomePage}>
        <CardsBar style={styles.CardsBar} data={this.state.cardsBarData} 
                  tapCard={(title, i)=>{this.openLink(title, i)}}></CardsBar>
      </div>
    );
  }

  constructor(props) {
      super(props);
      this.state = { cardsBarData: cardsBarData };
  }

  openLink(title, cardIndex) {
    console.log(title, cardIndex);
    const url = linksData[title][cardIndex];
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

const cardsBarData = {'UX Design': ['Squeeze', 1, 2, 2, 1, 'Squeeze', 1, 2], 'Coding': [2, 'Squeeze', 1, 2]};

const group1 = ['https://www.thebalancecareers.com/google-docs-resumes-2062719','https://www.thebalancecareers.com/google-docs-resumes-2062719',
'https://www.thebalancecareers.com/google-docs-resumes-2062719',
'https://www.thebalancecareers.com/google-docs-resumes-2062719',
'https://www.thebalancecareers.com/google-docs-resumes-2062719',
'https://www.thebalancecareers.com/google-docs-resumes-2062719',
'https://www.thebalancecareers.com/google-docs-resumes-2062719',
'https://www.thebalancecareers.com/google-docs-resumes-2062719',
];
const group2 = ['https://www.thebalancecareers.com/google-docs-resumes-2062719','https://www.thebalancecareers.com/google-docs-resumes-2062719',
'https://www.thebalancecareers.com/google-docs-resumes-2062719',
'https://www.thebalancecareers.com/google-docs-resumes-2062719'];

const linksData = {'UX Design': group1, 'Coding': group2};
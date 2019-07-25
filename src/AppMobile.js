import React, { Component } from 'react'
import splashMobile from './images/splashMobile.png'
import name from './images/name.png'
import CardsBarMobile from './components/CardsBarMobile/CardsBarMobile'
import { resumeLink } from './utils/dataProvider'

export default class AppMobile extends Component {

  render() {
    return (
      <div className="AppMobile" style={styles.AppMobile}>
        <img src={name} style={styles.NameTag} alt=''></img>
        <img src={splashMobile} style={{width: '100%'}} alt='' onClick={()=>{this.openResume()}}></img>
        <CardsBarMobile style={styles.CardsBarMobile}></CardsBarMobile>
      </div>
    );
  }

  openResume = ()=>{
    const url = resumeLink;
    window.open(url, '_blank');
  }

}

const styles = {
    AppMobile: {
        width: '100%', backgroundColor: 'white',
        display: 'flex', flexDirection: 'column', alignItems: 'center'
    },

    NameTag: {
      width: '108px', height: '23px',
      marginTop: '14px', marginBottom: '20px'
    },

    CardsBarMobile: {
      width: '100%', marginTop: '47px'
    }
}
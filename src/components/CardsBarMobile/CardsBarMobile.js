import React, { Component } from 'react'
import * as imgGenerator from "../../utils/imgGenerator"
import NaviBar from './NaviBar'
import { projectsData, linksData } from '../../utils/dataProvider'


export default class CardsBarMobile extends Component {

  render() {
    const style = Object.assign({}, styles.CardsBarMobile, this.props.style);
    return (
      <div className='CardsBarMobile NoScrollBar' style={style}>
        <NaviBar  titles={Object.keys(projectsData)} tap={(title)=>{this.tap(title)}} style={styles.CardTopNaviBar}/>
        <div className='Cards'> {this.buildList(this.state.paths)} </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { curentTitle: Object.keys(projectsData)[0],
                   paths: Object.values(projectsData)[0]};
  }

  buildList = (array)=>{
    return array.map((item, i) => {
            const src = imgGenerator.getCardImageSrc(item.image);
            return (<img key={i} src={src} alt='A Project' style={styles.Card}  
                         onClick={()=>{this.tapCard(i)}}/>)
    });
  }

  /** tap for tap navibar */
  tap = (index)=>{
    this.setState({curentTitle: Object.keys(projectsData)[index],
                   paths: Object.values(projectsData)[index]});
  }

  tapCard = (cardIndex)=>{
    const url = projectsData[this.state.curentTitle][cardIndex].link;
    window.open(url, '_blank');
  }
  
}

const styles = {

    CardsBarMobile: {
        display: 'flex', flexDirection: 'column',
    },

    CardTopNaviBar: {
        marginLeft: '3.5%', marginBottom: '18px'
    },

    Card: {
        width: '93%', marginBottom: '6px', marginLeft: '3.5%', marginRight: '3.5%'
    }
}
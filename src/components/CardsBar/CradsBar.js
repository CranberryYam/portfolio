import React, { Component } from 'react'
import CardTopNaviBar from "./CardTopNaviBar/CardTopNaviBar"
import Carousel from "./Carousel/Carousel"
import './NoScrollBar.css'

export default class CardsBar extends Component {

  render() {
    const style = Object.assign({}, styles.CardsBar, this.props.style);
    return (
      <div className="CardsBar NoScrollBar" style={style}>
        <CardTopNaviBar titles={Object.keys(this.props.data)} tap={(title)=>{this.tap(title)}} style={styles.CardTopNaviBar}></CardTopNaviBar>
        <Carousel style={styles.Carousel} data={this.state.paths} tap={(i)=>{this.tapCard(i)}}
                  headGap='56px'></Carousel>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { curentTitle: Object.keys(this.props.data)[0],
                   paths: Object.values(this.props.data)[0]};
  }

  /** tap for tap navibar */
  tap = (index)=>{
    this.setState({curentTitle: Object.keys(this.props.data)[0],
                   paths: Object.values(this.props.data)[index]});
  }

  tapCard = (cardIndex)=>{
    if(this.props.tapCard) this.props.tapCard(this.state.curentTitle, cardIndex);
  }
  
}

const styles = {

    CardsBar: {
        position:'relative', height: '360px', overflow: 'auto', whiteSpace: 'nowrap'
    },

    CardTopNaviBar: {
      position: 'absolute', top: '0px', marginLeft: '56px'
    },

    Carousel: {
      position: 'absolute', bottom: '0px',
      marginLeft: '0px', width: '100%'
    }
}

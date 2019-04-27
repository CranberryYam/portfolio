import React, { Component } from 'react'
import CardTopNaviBar from "./CardTopNaviBar/CardTopNaviBar"
import Carousel from "./Carousel/Carousel"

class CardsBar extends Component {

  render() {
    const style = Object.assign({}, styles.CardsBar, this.props.style);
    return (
      <div className="CardsBar" style={style}>
        <CardTopNaviBar titles={Object.keys(this.props.data)} tap={(title)=>{this.tap(title)}}></CardTopNaviBar>
        <Carousel style={styles.Carousel} data={this.state.paths} tap={(i)=>{this.tapCard(i)}}></Carousel>
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
        display: 'flex', flexDirection: 'column'
    },
    Carousel: {
        marginTop: '26px', marginLeft: '56px'
    }
}

export default CardsBar;
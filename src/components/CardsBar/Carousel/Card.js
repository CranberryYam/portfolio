import React, { Component } from 'react'

export default class Card extends Component {

  constructor(props){
    super(props);
    this.state = {styles: normalStyle};
  }

  render() {
    return (
      <div className="Card" style={this.props.style}>
        <img alt="A Project" src={this.props.src} style={this.state.styles.img}
           onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
      </div>
    );
  }

  handleMouseEnter = ()=>{
    this.setState({ styles: hoverStyle });
  }

  handleMouseLeave = ()=>{
    this.setState({ styles: normalStyle });
  }

}

const normalStyle = {
  img: {
    transition: 'all .2s ease-in-out', 
    overflowY: 'visible',
    width: '311px', height: '220px',
  }
}

const hoverStyle = {
  img: {
    transition: 'all .2s ease-in-out', 
    overflowY: 'visible',
    width: '363px', height: '257px',
  }
}

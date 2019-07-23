import React, { Component } from 'react'

export default class Card extends Component {

  constructor(props){
    super(props);
    this.state = {styles: normalStyle, isHover: false, onClick: props.onClick};
  }

  render() {
    const styles = this.state.isHover ? hoverStyle : normalStyle;
    const title = this.props.text ? this.props.text : 'No Title';
    return (
      <div className="Card" style={this.props.style}>
        <img alt="A Project" src={this.props.src} style={styles.img}
             onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}
             onClick={this.state.onClick}/>
        <div className="TitleLabel" style={styles.TitleLabel}>{title}</div>
      </div>
    );
  }

  handleMouseEnter = ()=>{
    this.setState({ isHover: true });
  }

  handleMouseLeave = ()=>{
    this.setState({ isHover: false });
  }

}

const normalStyle = {
  img: {
    transition: 'all .2s ease-in-out', 
    width: '311px', height: '220px',
    marginTop: '37px'
  },
  TitleLabel: {
    height: '24px', fontSize: '21', opacity: 0.0, textAlign: 'center'
  }
}

const hoverStyle = {
  img: {
    transition: 'all .2s ease-in-out', 
    width: '363px', height: '257px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    MozBoxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    WebkitBoxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    marginTop: '0px'
  },
  TitleLabel: {
    height: '24px', fontSize: '21px', opacity: 1.0, textAlign: 'center'
  }
}

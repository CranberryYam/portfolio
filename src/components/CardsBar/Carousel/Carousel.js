import React, { Component } from 'react'
import './Carousel.css'
import * as imgGenerator from "../../../utils/imgGenerator"

class Carousel extends Component {
  
  render() {
    return (
      <div className="Carousel" style={Object.assign({}, this.props.style, styles.Carousel)}>
        { this.buildList(this.props.data) }
      </div>
    );
  }

  buildList = (array)=>{
    return array.map((item, i) => {
            const src = imgGenerator.getCardImageSrc(item);
            return (<img src={src} alt="A Project" style={styles.item} key={i} onClick={()=>{this.tap(i)}}/>)
    });
  }

  tap = (data)=>{
    if(this.props.tap) this.props.tap(data);
  }

}

const styles = {
    Carousel: {
        overflow: 'auto', whiteSpace: 'nowrap'
    },
    item: {
        marginRight: '17px', width: '311px', height: '220px', display: 'inline-block'
    }
}

export default Carousel;
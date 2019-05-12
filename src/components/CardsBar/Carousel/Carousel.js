import React, { Component } from 'react'
import * as imgGenerator from "../../../utils/imgGenerator"
import Card from './Card'

export default class Carousel extends Component {
  
  render() {
    return (
      <div className="Carousel NoScrollBar" style={Object.assign({}, this.props.style, styles.Carousel)}>
        { this.buildList(this.props.data) }
      </div>
    );
  }

  buildList = (array)=>{
    return array.map((item, i) => {
            const src = imgGenerator.getCardImageSrc(item);
            const itemOneStyle = this.props.headGap ? Object.assign({}, styles.item, {marginLeft: this.props.headGap})
                                                    : styles.item;
            return (<Card key={i} src={src} style={i == 0 ? itemOneStyle : styles.item}  
                          onClick={()=>{this.tap(i)}}/>)
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
        marginRight: '17px', display: 'inline-block', marginBottom: '30px'
    }
}
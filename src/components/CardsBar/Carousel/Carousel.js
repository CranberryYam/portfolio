import React, { Component } from 'react'
import * as imgGenerator from "../../../utils/imgGenerator"
import Card from './Card'
import ArrowButton from './ArrowButton'

export default class Carousel extends Component {
  
  render() {
    return (
      <div className="Carousel" style={Object.assign({}, this.props.style, styles.Carousel)}>
        <ArrowButton style={styles.ArrowButton}/>

        <div className="ItemList NoScrollBar" style={styles.ItemList}>
          { this.buildList(this.props.data) }
        </div>

        <ArrowButton reverse={true} style={styles.ArrowButton2}/>

      </div>
    );
  }

  buildList = (array)=>{
    return array.map((item, i) => {
            const src = imgGenerator.getCardImageSrc(item);
            // const itemOneStyle = this.props.headGap ? Object.assign({}, styles.item, {marginLeft: this.props.headGap})
            //                                         : styles.item;
            const itemOneStyle =  styles.item;
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
      display: 'flex', flexDirection: 'row'
    },
    ArrowButton: {
      height: '220px', marginLeft: '18px', marginRight: '4px', marginTop: '37px'
    },
    ArrowButton2: {
      height: '220px', marginRight: '4px', marginLeft: '4px', marginTop: '37px', 
      zIndex: '2'
    },
    ItemList: {
        overflow: 'auto', whiteSpace: 'nowrap', width: 'calc(~"100vm - 51px")'
    },
    item: {
        marginRight: '17px', display: 'inline-block', marginBottom: '30px'
    }
}
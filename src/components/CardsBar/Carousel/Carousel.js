import React, { Component } from 'react'
import * as imgGenerator from "../../../utils/imgGenerator"
import Card from './Card'
import TwoButtons from './TwoButtons'
import ArrowButton from './ArrowButton'

export default class Carousel extends Component {
  
  render() {
    return (
      <div style={Object.assign({}, this.props.style, styles.Carousel)}>
        <ArrowButton style={styles.ArrowButton}/>

        <div style={{position: 'relative', width: '100%', height: '274px'}}>
          <div className="Carousel NoScrollBar" style={styles.ItemList}>
            { this.buildList(this.props.data) }
          </div>
        </div>

        <ArrowButton reverse={true} style={styles.ArrowButton2}/>
        {/* <TwoButtons style={styles.TwoButtons}/> */}
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
      display: 'flex', flexDirection: 'row', height: '281px'
    },
    ArrowButton: {
      height: '220px', width: '52px', marginLeft: '18px'
    },
    ArrowButton2: {
      height: '220px', width: '42px', marginRight: '18px', marginLeft: '4px'
    },
    ItemList: {
        overflow: 'auto', whiteSpace: 'nowrap', width: '100%', height: '274px', 
        position: 'absolute', bottom: '0px'
    },
    item: {
        marginRight: '17px', display: 'inline-block', marginBottom: '30px'
    }
}
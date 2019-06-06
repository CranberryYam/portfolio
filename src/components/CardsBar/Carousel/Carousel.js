import React, { Component } from 'react'
import * as imgGenerator from "../../../utils/imgGenerator"
import Card from './Card'
import ArrowButton from './ArrowButton'
import ArrowButton2 from './ArrowButton2'
import '../NoScrollBar.css'

export default class Carousel extends Component {

  constructor(props) {
    super(props);
    this.itemList = React.createRef();
  }
  
  render() {
    return (
      <div className="Carousel" style={Object.assign({}, this.props.style, styles.Carousel)}>
        <ArrowButton style={styles.ArrowButton} onClick={this.tapArrowBtn.bind(this, true)}/>

        <div className="ItemList NoScrollBar" style={styles.ItemList} ref={this.itemList}>
          { this.buildList(this.props.data) }
        </div>

        <ArrowButton2 reverse={true} style={styles.ArrowButton2} 
                     onClick={this.tapArrowBtn.bind(this, false)}/>

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

  tapArrowBtn = (isLeft) => {
    const el = this.itemList.current;
    isLeft ? el.scrollTo(0, 0) : el.scrollTo(4000,0);
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
      height: '220px',  marginTop: '37px',
    },
    ItemList: {
        overflowX: 'scroll', whiteSpace: 'nowrap', overflowY: 'hidden', scrollBehavior: 'smooth'
    },
    item: {
        marginRight: '17px', display: 'inline-block', marginBottom: '30px'
    }
}
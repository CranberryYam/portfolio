import React, { Component } from 'react'
import CardTopButton from "./CardTopButton";

class CardTopNaviBar extends Component {

  render() {
    const style = Object.assign({}, styles.CardTopNaviBar, this.props.style);
    const titles = this.props.titles ? this.props.titles : ["hghgh", "yuyu"];
    return (
      <div className="CardTopNaviBar" style={style}>
          { this.buildList(titles) }
      </div>
    );
  }

  constructor(props) {
      super(props);
      this.state = {position: 0};
  }

  tap = (i)=>{
      if(this.props.tap) this.props.tap(i);
      this.setState({ position: i });
  }

  buildList = (array)=>{
    var self = this;
    return array.map((item, i) => {
            return (<CardTopButton isActive={i === this.state.position} style={styles.Title} onClick={self.tap.bind(self, i)}
                                   key={i}>{item}</CardTopButton>)
    })
  }

}

const styles = {
    CardTopNaviBar: {
        display: 'flex', flexDirection: 'row'
    },
    Title: {
        marginRight: '42px'
    }
}

export default CardTopNaviBar;
import React, { Component } from 'react'
import TopButton from "./TopButton";

class NaviBar extends Component {

  render() {
    const style = Object.assign({}, styles.NaviBar, this.props.style);
    const titles = this.props.titles ? this.props.titles : ["hghgh", "yuyu"];
    return (
      <div className="NaviBar" style={style}>
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
            return (<TopButton isActive={i === this.state.position} style={styles.Title} onClick={self.tap.bind(self, i)}
                                   key={i}>{item}</TopButton>)
    })
  }

}

const styles = {
    NaviBar: {
        display: 'flex', flexDirection: 'row'
    },
    Title: {
        marginRight: '21px'
    }
}

export default NaviBar;
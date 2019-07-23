import React, { Component } from 'react'
import NaviBarButton from "./NaviBarButton";

export default class NaviBar extends Component {
  
  render() {
    return (
      <div className="NaviBar" style={styles.NaviBar}>
        <div className="Logo" style={styles.Logo}>Henry Yi</div>
        <div className="Titles" style={styles.Titles}> 
           {this.buildTabs(['Portfolio', 'Contact', 'Resume'])}
        </div>
      </div>
    );
  }

  constructor(props){
    super(props);
    this.state = {tap: 0};
  }

  buildTabs = (titles) => {
      if(!titles) return;
      var items = [];
      var self = this;
      for (let i = 0; i < titles.length; i++) {
          items.push(<NaviBarButton key={i} onClick={self.tap.bind(self, i)} isActive={self.state.tap === i}>
                                   {titles[i]}
                     </NaviBarButton>);
      }
      return items;
  }

  tap(i) {
      if(this.props.tap) this.props.tap(i);
      this.setState({tap: i});
  }
}

const styles = {
    NaviBar: {
        width: '100%', height: '100px', display: 'flex', flexDirection: 'row', 
        alignItems: 'center', justifyContent:'space-between',
        position: 'fixed', zIndex: 1
    },
    Logo: {
        fontSize: '26px', marginLeft: '51px'
    },
    Titles: {
        height: '100%', display: 'flex', flexDirection: 'row', marginRight: '51px', alignItems: 'center',
        width: '223px', justifyContent: 'space-between'
    }
}
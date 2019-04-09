import React, { Component } from 'react';

export default class NaviBar extends Component {
  render() {

    return (
      <div className="NaviBar" style={styles.NaviBar}>
        <div style={styles.logo}>Henry Yi</div>
      </div>
    );
  }
}

const styles = {
    NaviBar: {
        height: '100px', display: 'flex', flexDirection: 'row', alignItems: 'center',
        position: 'fixed', zIndex: 1
    },
    logo: {
        fontSize: '26px'
    }
}
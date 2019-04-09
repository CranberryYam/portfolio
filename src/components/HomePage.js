import React, { Component } from 'react';
import BackgroundImage from '../images/splash.jpg';

export default class HomePage extends Component {

  render() {
    const styleHome = Object.assign(styles.HomePage, {backgroundImage: `url(${this.state.backImgUrl})`});
    return (
      <div className="HomePage" style={styleHome}>
      </div>
    );
  }

  constructor(props) {
      super(props);
      this.state = { backImgUrl: BackgroundImage };
  }

}

const styles = {
    HomePage: {
        width: '100%', height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}
import React, { Component } from 'react';
import BackgroundImage from '../images/splash3.jpg';

export default class ContactPage extends Component {

  render() {
    const styleHome = Object.assign({}, styles.ContactPage, {backgroundImage: `url(${this.state.backImgUrl})`});
    return (
      <div className="ContactPage" style={styleHome}>
      </div>
    );
  }

  constructor(props) {
      super(props);
      this.state = { backImgUrl: BackgroundImage };
  }

}

const styles = {
    ContactPage: {
        width: '100%', height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}
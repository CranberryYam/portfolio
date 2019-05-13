import React, { Component } from 'react'
import * as imgGenerator from "../utils/imgGenerator"

export default class AboutPage extends Component {

  render() {
    const styleHome = Object.assign({}, styles.AboutPage, {backgroundImage: this.state.backImgUrl});
    return (
      <div className="AboutPage" style={styleHome}>
      </div>
    );
  }
  constructor(props) {
      super(props);
      this.state = { backImgUrl: imgGenerator.getCoverImageUrl('2') };
  }

}

const styles = {
    AboutPage: {
        width: '100%', height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}
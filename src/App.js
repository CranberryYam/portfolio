import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NaviBar from './components/NaviBar/NaviBar'
import * as imgGenerator from "./utils/imgGenerator"
import { resumeLink } from './utils/dataProvider'

class App extends Component {
  render() {
    const style = Object.assign({}, styles.App, {backgroundImage: this.state.backImgUrl});
    return (
      <div className="App" style={style}>
          <NaviBar tap={this.switchToTap.bind(this)}/>          
          {this.state.mainPage}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { mainPage: (<HomePage />), backImgUrl: imgGenerator.getCoverImageUrl('Home')};
    this.pages = [(<HomePage/>), (<ContactPage/>)];
    this.covers = ['Home', 'Contact']
  }

  switchToTap(i) {
    if (i >= 2) {
      const url = resumeLink;
      window.open(url, '_blank');
      return;
    }
    const page = this.pages[i];
    const cover = imgGenerator.getCoverImageUrl(this.covers[i]);
    this.setState({mainPage: page, backImgUrl: cover});
  }
}



const styles = {
  App: {
    width: '100%', height: '100%',
    backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        WebkitTransition: 'background-image 0.2s ease-in-out',
        transition: 'background-image 0.2s ease-in-out',

  }
}

export default App;

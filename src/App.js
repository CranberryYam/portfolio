import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NaviBar from './components/NaviBar/NaviBar';

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.App}>
          <NaviBar tap={this.switchToTap.bind(this)}/>          
          {this.state.mainPage}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { mainPage: (<HomePage />)};
    this.tabs = [(<HomePage/>), (<AboutPage/>), (<ContactPage/>)];
  }

  switchToTap(i) {
    this.setState({mainPage: this.tabs[i]});
  }
}



const styles = {
  App: {
    width: '100%', height: '100%'
  }
}

export default App;

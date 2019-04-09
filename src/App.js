import React, { Component } from 'react';
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.App}>
          <HomePage />
      </div>
    );
  }
}

const styles = {
  App: {
    width: '100%', height: {windows.innerHeight}
  }
}

export default App;

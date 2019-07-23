import React, { Component } from 'react';

export default class ContactPage extends Component {

  render() {
    return (
      <div className="ContactPage" style={styles.ContactPage}>
      </div>
    );
  }

  constructor(props) {
      super(props);
  }

}

const styles = {
    ContactPage: {
        width: '100%', height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
    }
}
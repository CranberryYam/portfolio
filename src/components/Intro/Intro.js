import React, { Component } from 'react'

export default class Intro extends Component {
  
  render() {
    return (
      <div className="Intro" style={Object.assign({}, styles.Intro, this.props.style)}>
        <div className="Title" style={styles.Title}> {this.state.title} </div>
        <div className="Content" style={styles.Content}> {this.state.content} </div>
        {/* <div className="Button" style={styles.Button}>Resume</div> */}
      </div>
    );
  }

  constructor(props){
    super(props);
    this.state = {title: "I'm your go-to guy for awesome interfaces.",
                  content: "Hi there, I'm Iris.​ \nI am a designer, a creative technologist, and an explorer. \nI enjoy being a product designer, and creating effective solutions for the customers"};
  }

}

const styles = {
    Intro: {
        display: 'flex', flexDirection: 'column', marginLeft: '54px', marginBottom: '0px'
    },
    Title: {
        fontSize: '40px', marginBottom: '45px'
    },
    Content: {
        fontSize: '28px', marginBottom: '45px', whiteSpace: 'pre-line'
    },
    Button: {
        fontSize: '22px', background: 'rgba(0, 0, 0, 1.0)', color: 'white',
        width: '122px', height: '51px', borderRadius: '6px',
        textAlign: 'center', verticalAlign: 'middle', lineHeight: '51px' 
    }
}
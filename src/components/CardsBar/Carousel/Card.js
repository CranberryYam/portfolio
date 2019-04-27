import React from 'react';


export default function Card(props) {
  const onClick = (data)=>{
    if(this.props.onClick) this.props.onClink();
  }

  return (
    <img src={this.props.src} alt="A Project" style={Object.assign({}, this.props.style)}
         onClick={onClick}/>
  );
};

import React from 'react'

export default function TopButton(props) {
  const style = Object.assign({}, props.isActive ? style1 : style0, props.style);

  return <div style={style} onClick={props.onClick}>{props.children}</div>;
}

const style1 = {
  fontSize: '20px',
  color: 'black',
};

const style0 = {
  fontSize: '20px',
  color: 'gray',
};
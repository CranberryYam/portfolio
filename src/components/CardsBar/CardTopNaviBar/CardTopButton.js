import React from 'react'

export default function CardTopButton(props) {
  const style = Object.assign({}, props.isActive ? style1 : style0, props.style);

  return <div style={style} onClick={props.onClick}>{props.children}</div>;
}

const style1 = {
  fontSize: '22px',
  color: 'black',
  paddingBottom: '7px',
  borderBottom: '1px solid black'
};

const style0 = {
  fontSize: '22px',
  color: 'gray',
  paddingBottom: '7px',
};
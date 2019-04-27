import React from 'react'

export default function NaviBarButton(props) {
  const color = props.isActive ? 'black' : 'grey';
  const styles = {
    fontSize: '15px',
    color: color
  };
  return <div style={styles} onClick={props.onClick}>{props.children}</div>;
}

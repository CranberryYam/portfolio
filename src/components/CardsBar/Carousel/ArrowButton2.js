import React from 'react'
import btn_src2 from '../../../images/Arrow2.png'

export default function ArrowButton(props) {
  const src = btn_src2
  return (
      <div className='ArrowButton' style={Object.assign({}, props.style, styles.ArrowButton)}>
        <img src={src} style={styles.img} alt='' onClick={props.onClick}></img>
      </div>
  );
}

const styles = {
    ArrowButton: {
        display: 'flex', flexDirection: 'column', justifyContent: 'center', 
        background: 'rgba(0, 151, 19, 0.0)', position: 'relative', width: '0px'
    },
    img: {
        width: '35px', height: '35px', position: 'absolute', right: '18px'
    }
};
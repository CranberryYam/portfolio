import React from 'react'
import btn_src from '../../../images/Arrow.png'
import btn_src2 from '../../../images/Arrow2.png'

export default function ArrowButton(props) {
  const src = props.reverse ? btn_src2 : btn_src;
  return (
      <div className='ArrowButton' style={Object.assign({}, props.style, styles.ArrowButton)}>
        <img src={src} style={styles.img} alt=''></img>
      </div>
  );
}

const styles = {
    ArrowButton: {
        display: 'flex', flexDirection: 'column', justifyContent: 'center', 
        background: 'rgba(0, 151, 19, 0.0)'
    },
    img: {
        width: '35px', height: '35px'
    }
};
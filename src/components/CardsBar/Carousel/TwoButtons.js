import React from 'react'
import btn_src from '../../../images/Arrow.png'
import btn_src2 from '../../../images/Arrow2.png'

export default function TwoButtons(props) {
  return (
      <div className='TwoButtons' style={Object.assign({}, props.style, styles.TwoButtons)}>
        <div style={styles.center}><img src={btn_src} style={styles.img} alt=''></img></div>
        <div style={styles.center}><img src={btn_src2} style={styles.img} alt=''></img></div>
      </div>
  );
}

const styles = {
    TwoButtons: {
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
    },
    img: {
        width: '35px', height: '35px', marginLeft: '18px', marginRight: '18px'
    },
    center: {
        display: 'flex', flexDirection: 'column', justifyContent: 'center'
    }
};
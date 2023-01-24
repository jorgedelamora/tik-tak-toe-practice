import React from 'react';

import styles from './Chip.module.scss';

const Chip = ({image}) => {

  return (
    <div className={styles.container}>
        <img src={image}/>
    </div>
  )
}

export default Chip
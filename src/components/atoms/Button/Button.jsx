import classNames from 'classnames'
import React from 'react'

import styles from './Button.module.scss';

const Button = ({children, onClick, customClass}) => {

  return (
    <button onClick={onClick} className={classNames(styles.container, customClass)}>{children}</button>
  )
}

export default Button
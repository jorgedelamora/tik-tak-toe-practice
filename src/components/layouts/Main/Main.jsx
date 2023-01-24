import React from 'react'
import Button from '../../atoms/Button';
import { Link } from 'react-router-dom';
import styles from './Main.module.scss';

const Main = () => {

  return (
    <div className={styles.container}>
        <div className={styles.CTA}>
            <Link to={'/play'}>
            <Button>Play</Button>
            </Link>
        </div>
    </div>
  )
}

export default Main
import React, {useContext} from 'react'
import { UserContext } from '../../../context/userContext';
import Spacer from '../../atoms/Spacer';

import styles from './TheNavbar.module.scss';

const TheNavbar = () => {

  const {userData, setUserData} = useContext(UserContext);

  const login = () => {
    setUserData((userData) => ({...userData, isLoggedIn : !userData.isLoggedIn}))
  }

  return (
    <div className={styles.container}>     
        <div className={styles.leftSideMenu}>
          <p>
              TikTakToe
          </p>
        </div>
        <div className={styles.rightSideMenu}>
              <p onClick={login}>{userData.isLoggedIn ? 'LOG OUT' : 'LOG IN'}</p>
            <Spacer x={1} />
              <p>item 2</p>
            <Spacer x={1} />
        </div>
    </div>
  )
}

export default TheNavbar
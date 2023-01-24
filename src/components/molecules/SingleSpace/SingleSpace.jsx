import React from 'react'
import classNames from 'classnames';
import Chip from '../../atoms/Chip';
import X from '../../../../public/assets/X.svg';
import O from '../../../../public/assets/O.svg';
import chipStatus from '../../../enumerators/chipStatus';


import styles from './SingleSpace.module.scss';

const SingleSpace = ({status, onClick, spaceIdx, isGameOver, customClass}) => {
  const spaceIsTaken = status !== chipStatus.EMPTY;
  
  const handleOnClick = () => {
      if(!spaceIsTaken && !isGameOver) {
          onClick && onClick(spaceIdx);
      }
  }

  return (
    <div 
        className={classNames(styles.container, customClass, {[styles.spaceTaken]: spaceIsTaken })} 
        onClick={handleOnClick}
    >
        {spaceIsTaken && 
            <Chip image={status === chipStatus.X ? X : O}/>
        }
    </div>
  )
}

export default SingleSpace
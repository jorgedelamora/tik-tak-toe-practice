import React, { useReducer} from 'react'
import SingleSpace from '../molecules/SingleSpace';
import Button from '../atoms/Button';
import Spacer from '../atoms/Spacer';
import chipStatus from '../../enumerators/chipStatus';
import { checkForWinner } from './utils';

import styles from './TheBoard.module.scss';

const MAX_POSIBLE_TURNS_PER_GAME = 9;

const GAME_START_STATE = {
    boardSpaces: Array(9).fill(chipStatus.EMPTY), 
    isGameOver: false,
    winner: null,
    isXTurn: true,
    turns: MAX_POSIBLE_TURNS_PER_GAME,
}

const TheBoard = () => {

    const [state, updateState] = useReducer((prev, next) => {
        const newState = {...prev, ...next};

        const winner = checkForWinner(newState.boardSpaces);

        if(winner){
            newState.isGameOver = true, newState.winner = winner;
            return newState;
        }
        if(newState.turns === 0) {
            newState.isGameOver = true;
        }

        newState.isXTurn = !newState.isXTurn;
        return newState

    },GAME_START_STATE
    )
  
    const handleOnClickSpace = (spaceIdx) => {
        const currentChipStatus = state.isXTurn ? chipStatus.X : chipStatus.O;
        const newBoardSpaces = state.boardSpaces.map((space, idx) => {
            if(idx === spaceIdx){
                return currentChipStatus;
            }
            return space
        });
        updateState({boardSpaces:newBoardSpaces, turns: state.turns - 1});
    }

    const restartGame = () => {
        updateState(GAME_START_STATE);
    }

  return (
    <div className={styles.container}>
        {state.isGameOver &&
            <h1>{`Game Over!`}</h1>            
        }
        {state.winner && 
            <h2>{`The winner is ${state.winner}`}</h2>
        }
        <div className={styles.board}>
        {state.boardSpaces.map((space, idx) => (
        <SingleSpace 
            key={'space-' + idx} 
            spaceIdx={idx} 
            status={space}
            isGameOver={state.isGameOver}
            customClass={styles['space-number-' + idx]}
            onClick={handleOnClickSpace} 
        />)
        )}
        </div>
        <Spacer y={1} />
        <div className={styles.restartBtn}>
            <Button onClick={restartGame}>Restart Game</Button>
        </div>
    </div>
  )
}

export default TheBoard
import chipStatus from "../../../enumerators/chipStatus";

const getWinningPositions = (currentBoardSpaces) => {
    
    const winningPositions = [
        [currentBoardSpaces[0],currentBoardSpaces[1],currentBoardSpaces[2]],
         [currentBoardSpaces[3],currentBoardSpaces[4],currentBoardSpaces[5]],
          [currentBoardSpaces[6],currentBoardSpaces[7],currentBoardSpaces[8]],
          [currentBoardSpaces[0],currentBoardSpaces[3],currentBoardSpaces[6]],
          [currentBoardSpaces[1],currentBoardSpaces[4],currentBoardSpaces[7]], 
          [currentBoardSpaces[2],currentBoardSpaces[5],currentBoardSpaces[8]], 
          [currentBoardSpaces[0],currentBoardSpaces[4],currentBoardSpaces[8]], 
          [currentBoardSpaces[2],currentBoardSpaces[4],currentBoardSpaces[6]]
    ];

    return winningPositions;
}

export const checkForWinner = (currentBoardSpaces) => {
    const winningPositions = getWinningPositions(currentBoardSpaces);
    let winner = false;
    winningPositions.map((position) => {
        if((position.every(item => item === chipStatus.X)) || (position.every(item => item === chipStatus.O)) ){
           winner = position[0];
        }
    })
    return winner;
}
var generatePossibleNextMoves = function(currentState) {
    const nextPossibleStates = [];

    for (let index = 0; index < currentState.length - 1; ++index) {
        if (currentState[index] === '+' && currentState[index + 1] === '+') {
            const nextState = (
                  currentState.substring(0, index) + 
                  "--" + 
                  currentState.substring(index + 2)
            );
            nextPossibleStates.push(nextState);
        }
    }

    return nextPossibleStates;
};

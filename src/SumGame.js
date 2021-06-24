import React from 'react';

function SumGame(props) {
	return (
    	<div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${props.value1} + ${props.value2} + ${props.value3} = ${props.proposedAnswer}`}</p>
          </div>
          <button onClick={() => props.onSetTrue()}>True</button>
          <button onClick={() => props.onSetFalse()}>False</button>
          <p className="text">
            Your Score: {props.numCorrect}/{props.numQuestions}
          </p>
        </div>
    )
}

export default SumGame;

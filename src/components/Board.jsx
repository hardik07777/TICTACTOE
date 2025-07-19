import React, { useState } from 'react'
import Square from './Square'

function Board  ()  {


    const[state,setstate]=useState(Array(9).fill(null));
    const [isXturn, setisXturn] = useState(true);

    const handleClick = (index) =>{
        if(state[index] != (null)){
            return;
        }
      const copystate = [...state];
      copystate[index] = isXturn ?  'X' : 'O' ;
      setstate(copystate);
      setisXturn(!isXturn);
    //   setstate copystate to update that state
    }
    const WinningLogic = ()=>{
    let WIN = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        
    ];
    for(let logic of WIN){
        const [a,b,c] = logic;
        if(state[a]!=null && state[a] == state[b] && state[b] == state[c]){
            return state[a];
        }
    }
    return false;
}
const iswinner = WinningLogic();
const isDraw = !iswinner && state.every(cell => cell !== null);

const handleoutput = (index) => {
   setstate(Array(9).fill(null),)
}
 return (
    <div className="main-container">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="boxcontainer">
        {iswinner ? (
          <div className="winner">
            <h2>{iswinner} wins!</h2>
            <button className="reset-button" onClick={handleoutput}>Play Again</button>
          </div>
        ) : isDraw ? (
          <>
             <h2>It's a Draw!</h2>
             <button onClick={handleoutput}>PLAY AGAIN</button>
          </>
       ) 
       : (
          <>
            <div className="boxrowcontainer">
              <Square onClick={() => handleClick(0)} value={state[0]} />
              <Square onClick={() => handleClick(1)} value={state[1]} />
              <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="boxrowcontainer">
              <Square onClick={() => handleClick(3)} value={state[3]} />
              <Square onClick={() => handleClick(4)} value={state[4]} />
              <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="boxrowcontainer">
              <Square onClick={() => handleClick(6)} value={state[6]} />
              <Square onClick={() => handleClick(7)} value={state[7]} />
              <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Board
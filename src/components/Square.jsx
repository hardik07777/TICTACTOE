import React from 'react'

function Square (props) {
  return (
    <div  onClick = {props.onClick} className='squarecontainer'>

        <h5>{props.value}</h5>
   </div>
  )
}

export default Square
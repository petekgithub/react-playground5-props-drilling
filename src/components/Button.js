import React, { useContext } from 'react'
import { countContext } from '../Context';


const Button = () => {

  const {setFishCount} = useContext(countContext);

  return (
    <button onClick={() => setFishCount((count) => count + 1)}
    style={{"margin-top": "30px", "margin-left": ".5rem"}}>
    Increase the Fish count</button>
  )
}

export default Button
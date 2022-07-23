import React, { useContext } from 'react'
import { countContext } from '../Context';
import Button from './Button'



const DisplayFishCount = () => {

  const {fishcount} = useContext(countContext);

  return (
    <div>
    {fishcount}  
    <Button />
    </div>
  )
}

export default DisplayFishCount
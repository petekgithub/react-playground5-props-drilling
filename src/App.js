import { useState } from 'react';
import './App.css';
import DisplayFishCount from './components/DisplayFishCount';
import image from "./img/fi.jpg"; 
import { countContext } from './Context'


function App() {

  const [fishcount, setFishCount] = useState(0);


  return (
    <div className="App" 
    style={{ 
      backgroundImage:`url(${image})` ,class:"center",
      backgroundRepeat:"no-repeat",
      backgroundSize:"contain", 
      height:900,
      width:900
  }}>
      <countContext.Provider value={{fishcount, setFishCount}}> 
        <DisplayFishCount />
      </countContext.Provider>
    </div>
  );
}

export default App;

import React, {ReactElement} from 'react';
import './App.css';
import Name from "./components/Name";

function App(): ReactElement {
  return (
   <div className="App">
     <Name nameStr={'James'} />
   </div>
  );
}

export default App;

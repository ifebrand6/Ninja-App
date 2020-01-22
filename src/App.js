import React from 'react';
import Ninjas from './ninja';



function App() {
  return (
    <div className="App">
      <h1> My first real app</h1>
      <p> I am damn sleep</p>  
      <Ninjas name="bayo" age="22" belt="black" />   
      <Ninjas name="tulo" age="23" belt="black" />  
    </div>
  );
}

export default App;
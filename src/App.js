import React, { Component } from 'react';
import Ninjas from './ninja';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (ninja)=> {
   ninja.id = Math.random() * 1000;
    let ninjas = [...this.state.ninjas, ninja] 
    this.setState({
      ninjas: ninjas
    
    })  
    console.log(ninja)
  }
  
  render() { 
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjas}/> 
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
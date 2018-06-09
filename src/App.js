import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Yadira' , age: 28},
      {name: 'Julio' , age: 25},
      {name: 'Renata' , age: 0},   
    ]
  }

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = 'Julius';
    this.setState({
      persons: [
      {name: newName , age: 28},
      {name: 'Yadira' , age: 25},
      {name: 'Renata' , age: 0}, 
      ]
    })
  }

  nameChangeHandler = (event) => {

    this.setState(
      this.setState({
        persons: [
        {name:  event.target.value , age: 28},
        {name: 'Yadira' , age: 25},
        {name: 'Renata' , age: 0}, 
        ]
      })
    )
  }


  render() {
    return (
      <div className="App">
        <h1> It's me, mario! </h1>
        <p> This is really working </p>
        <button onClick ={this.switchNameHandler.bind(this, 'Thisisonbotton')}> Switch Name </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchNameHandler.bind(this, 'Thisisonp')}
          changed={this.nameChangeHandler}> My Hobbies are Coding, traveling and reading 
         
        </Person>

        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[2].age} 
          click={this.switchNameHandler.bind(this, 'Thisisonp')}
          changed={this.nameChangeHandler}> My Hobbies are Coding, traveling and reading 
         
        </Person>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Yadira' , age: 28 , id: 1 },
      {name: 'Julio' , age: 25 , id: 2}, 
      {name: 'Renata' , age: 0 ,  id: 3},   
    ],
    showPersons: false
  }


  togglePersonHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }


  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
   }

  nameChangeHandler = (event) => {

    this.setState(
      this.setState({
        persons: [
        {name:  event.target.value , age: 28},
        {name: event.target.value  , age: 25},
        ]
      })
    )
  }


  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
       persons = (
        <div> 
        {this.state.persons.map((person, index) => {
          return  <Person
            click={() => this.deletePersonHandler(index)}
            name = {person.name}
            age = {person.age}
            key = {person.id} />
        })}
        </div>
        );
    };


    return (
      <div className="App">
        <h1> It's me, mario! </h1>
        <p> This is really working </p>
        <button 
        style={style}
        onClick ={this.togglePersonHandler.bind(this, 'Thisisonbotton')}> Switch Name 
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

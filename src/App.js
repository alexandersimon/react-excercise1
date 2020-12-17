import './App.css';
import React, { Component } from 'react';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'

class App extends Component {
  
  state = {
    username: "Alexander Simon"
  }

  changeUserNameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {

    return(
      <div className="App">
        <UserInput
          change={this.changeUserNameHandler}
          name={this.state.username}></UserInput>
        <UserOutput 
          output={this.state.username}></UserOutput>
      </div>
    );
  };
}

export default App;

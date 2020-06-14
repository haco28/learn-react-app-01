import React from 'react';
import './App.scss';
import Todo from "./components/Todo";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MYTODOAPP</h1>
        </header>
        <Todo />
      </div>
    );
  }
}

export default App;

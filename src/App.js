import React from 'react';
import logo from './logo.svg';
import './App.css';


const ipc = window.ipcRenderer;

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }
  componentWillMount(){
    ipc.send('user');
  }

  componentDidMount(){
    ipc.on('userinfo', (event, data) => {
      this.setState({ username: data.username })
    })
  
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React {this.state.username}
          </a>
        </header>
      </div>
    );
  }
}

export default App;

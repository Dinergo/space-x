import logo from './logo.svg';
import './App.css';
import Launch from "./component-launch/Launch.js";
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      axios : '',
      lancement : ''
    }

  }

   componentDidMount() {
    

    axios.get('https://api.spacexdata.com/v3/launches/64')
    .then( (response) => {
      console.log(response);
      
      this.setState((state) => ({ lancement : response.data}));
      console.log(this.lancement);
      console.log("fin de la requete");
    });
    
  

  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
         {this.state.lancement.flight_number}
        </header>
      </div>
    );
  }
  
}

export default App;

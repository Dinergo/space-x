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
    

    // version 2
    /*
    const axios = require('axios').default

    try {
      const response = await axios.get("https://api.spacexdata.com/v3/launches/64");
      console.log(response);
      this.setState((state) => ({
        lancement : response.data
      }));
      console.log(this.state.lancement);
    } catch (error) {
      console.error(error);
    };
    
    console.log(this.state.lancement);
    */

    // version 1
    
    axios.get('https://api.spacexdata.com/v3/launches/64')
    .then( (response) => {
      console.log(response);
      
      this.setState((state) => ({ lancement : response.data}));
      console.log(this.lancement);
      console.log("fin de la requete");
    });
    console.log("post-request");
    console.log(this.state.lancement);
  // */

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

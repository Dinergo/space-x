import logo from './logo.svg';
import './App.css';
import Launch from "./component-launch/Launch.js";
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lancement :  {},
      lancements : ''
    }

  }

   componentDidMount() {
    
    console.log("component app did mount");

    axios.get('https://api.spacexdata.com/v3/launches/1')
    .then( (response) => {
      // console.log(response);
      
      this.setState((state) => ({ lancement : response.data}));
      // console.log("le data transféré dans Lancement");
      console.log(this.lancement);
      // console.log("fin de la requete unique");
    });
    
    // la requete pour avoir tous les lancements
    /*
    axios.get('https://api.spacexdata.com/v3/launches')
    .then( (response) => {
      console.log(response);
      
      this.setState((state) => ({ lancements : response.data}));
      console.log(this.lancement);
      console.log("fin de la requete all");
    });
    */
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
         {this.state.lancement.flight_number}
         <Launch data = {this.state.lancement}/>
        </header>
      </div>
    );
  }
  
}

export default App;

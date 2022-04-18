import logo from './logo.svg';
import './App.css';
import Launch from "./component-launch/Launch.js";
import React from 'react';
import axios from 'axios';
import Capsule from "./component-capsule/Capsule.js";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lancement_unique :  {},
      lancements : [],
      capsule : {},
      capsule : []
    }

  }

   componentDidMount() {
    
    console.log("component app did mount");

    axios.get('https://api.spacexdata.com/v3/launches/1')
    .then( (response) => {
      // console.log(response);
      
      this.setState((state) => ({ lancement_unique : response.data}));
      // console.log("le data transféré dans Lancement");
     // console.log(this.lancement);
      // console.log("fin de la requete unique");
    });
    


    // la requete pour avoir tous les lancements
    
    axios.get('https://api.spacexdata.com/v3/launches')
    .then( (response) => {
     // console.log(response);
      
      this.setState((state) => ({ lancements : response.data}));
     // console.log(this.lancement);
     // console.log("fin de la requete all");
    });
    


    // requete pour une capsule 

    axios.get('https://api.spacexdata.com/v3/capsules/C112')
    .then( (response) => {
      // console.log(response);
      
      this.setState((state) => ({ capsule : response.data}));
      // console.log("le data transféré dans Lancement");
     // console.log(this.lancement);
      // console.log("fin de la requete unique");
    });



  }
  
  
  render() {


    return (
      <div className="App">
          <div>
            <h2> Les lancements</h2>
            <div class="launch-container" >
              {this.state.lancements.map((lancement) => 
                <Launch data = {lancement}/>
              )}
            </div>
            
          </div>
          <div>
            <h2>Les capsules</h2>
            <Capsule data = {this.state.capsule}> </Capsule>
          </div>
      </div>

    );
  }  
}
export default App;

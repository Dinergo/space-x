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
      capsule_unique : {},
      capsules : []
    }

  }

   componentDidMount() {
    
    console.log("component app did mount");

    axios.get('https://api.spacexdata.com/v3/launches/1')
    .then( (response) => {
      // console.log(response);
      
      this.setState(() => ({ lancement_unique : response.data}));
      // console.log("le data transféré dans Lancement");
     // console.log(this.lancement);
      // console.log("fin de la requete unique");
    });
    


    // la requete pour avoir tous les lancements
    
    axios.get('https://api.spacexdata.com/v3/launches')
    .then( (response) => {
     // console.log(response);
      this.setState(() => ({ lancements : response.data}));
     // console.log(this.lancement);
     // console.log("fin de la requete all");
    });
    


    // requete pour une capsule 

    axios.get('https://api.spacexdata.com/v3/capsules/C112')
    .then( (response) => {
      // console.log(response);
      
      this.setState(() => ({ capsule_unique : response.data}));
      // console.log("le data transféré dans Lancement");
     // console.log(this.lancement);
      // console.log("fin de la requete unique");
    });



    // requete pour avoir toutes les capsules

    axios.get('https://api.spacexdata.com/v3/capsules')
    .then( (response) => {
     // console.log(response);
      
      this.setState(() => ({ capsules : response.data}));
     // console.log(this.lancement);
     // console.log("fin de la requete all");
    });

  }
  
  
  render() {


    return (
      <div className="App">
          <div>
            <h2> Les lancements</h2>
            <div class="grid-container">
              {this.state.lancements.map((lancement) => 
                <Launch data = {lancement}/>
              )}
            </div>
            
          </div>
          <div>
            <h2>Les capsules</h2>
            <div class = "grid-container">
              {this.state.capsules.map((capsule) => 
                <Capsule data = {capsule}/>
              )}
            </div>
            
          </div>
      </div>

    );
  }  
}
export default App;

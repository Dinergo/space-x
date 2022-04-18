import React, { Component } from 'react';



class capsule  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : {}
    }
  }

// On update les states, seulement si les props sont differents du state actuel (c'est a dire vide)
  componentDidUpdate() {
    if(this.state.data != this.props.data){
      this.setState({data: this.props.data})
    }
  }



  render() {
    // Si le state ne contient aucune clé (c'est à dire un object vide) on retourne rien.
    if (!Object.keys(this.state.data).length) {
      return "";
    }

    // Quand le state sera completé, on affichera le return avec les valeurs
    return (
        <div>
            Numéro de série : {this.state.data.capsule_serial}
        <div>
           Status : {this.state.data.status}
        </div>
        <div>
            Type de capsule : {this.state.data.type}
        </div>
        <div>
            Date de lancement : { (new Date (this.state.data.original_launch).toLocaleDateString()) }
        </div>
        <div>
            Nombre de missions : { this.state.data.missions.length}
        </div>

    </div>
    )
  }
}

export default capsule;

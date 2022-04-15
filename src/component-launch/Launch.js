import React, { Component } from 'react';
import "./Launch.css";


class launch extends React.Component {
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
        <img class = "patch" src = {(this.state.data.links.mission_patch) }></img>
        <div>
            Numero de vol : {this.state.data.flight_number}
        </div>
        <div>
            Nom de mission : {this.state.data.mission_name}
        </div>
        <div>
            Date de lancement : { (new Date (this.state.data.launch_date_local).toLocaleDateString()) }
        </div>
        <div>
            <a href = {(this.state.data.links.article_link)}>En savoir plus</a>
        </div>

    </div>
    )
  }
}

export default launch;

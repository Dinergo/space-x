import React, { Component } from 'react';
import axios from 'axios';



class launch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            launches:[]
            };
    }
  componentDidMount (){
    axios({
        method: 'get',
        url: 'https://api.spacexdata.com/v3/launches',
        responseType: 'stream'
      });
  }



    render() {
        return (
            <div>
           {this.state.launches.map((launches) => (<h1>{launches.launch_year}</h1>))}   
            </div>
        )
    }
}

export default launch;
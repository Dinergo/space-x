import React, { Component } from 'react';



class launch extends React.Component {
    constructor(props) {
        super(props);
        


        // version 1 du state
        /*
        this.state = {
            numero_vol: props.flight_number,
            mission: props.mission_name,
            annee: props.launch_year,
            dateExacte: props.launch_date_local,
            rocket: props.rocket,
            site_lancement: props.launch_site,
            launch_success: props.launch_success,
            links: props.links
            };*/
           
        this.state = {
            data : props.data  
        }

    }

    componentDidMount() {
        this.setState((state, props) => ({
            date: props.data
        }))
    }
    
    render() {
        return (
            <div>
                <div>
                    numero de vol : {this.state.data.flight_number}
                </div>

            </div>
        )
    }
}

export default launch;
import React, { Component } from 'react';



class launch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numero_vol: props.flight_numeber,
            mission: props.mission_name,
            annee: props.launch_year,
            dateExacte: props.launch_date_local,
            rocket: props.rocket,
            site_lancement: props.launch_site,
            launch_success: props.launch_success,
            links: props.links
            };
    }
    render() {
        return (
            <div>
                launch
            </div>
        )
    }
}

export default launch;
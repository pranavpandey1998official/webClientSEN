import React, { Component, useState } from 'react';
import ReactMapGL, { Layer, Feature } from 'react-map-gl';
import { SERVER_URL } from '../../utils/constants';



class MapView extends Component
{
	
    async componentDidMount() {
        const url = SERVER_URL + '/property';
        const response = await fetch(url);
        const data = await response.json();
        this.setProperty(data.property);
    }
	 setProperty = (property) => {
        this.setState({ properties: [...property] });
    } 

	
	
	state = 
	{
		viewport : {
		latitude: 23.0225,
		longitude : 72.5714, 
		zoom : 10,
		width: "100vw",
		height: "100vh"
		},
		
	};
               
	
	render(){
			return(
			<div>
				<ReactMapGL {...this.state.viewport} onViewportChange={(viewport) => this.setState({viewport})} mapboxApiAccessToken = "pk.eyJ1IjoiZGtwMTkwMyIsImEiOiJjazhya3F3YWMwM2tsM21wbWY3ZTE0OWo1In0.bspO79N0Vc0Fgu1b4bqU5A"/>
			</div>
		);

	}
	
}

export default MapView;
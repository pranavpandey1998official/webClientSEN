import React, { Component, useState } from 'react';
import style from './style.css';
import ReactMapGL, { Layer, Feature } from 'react-map-gl';



class MapView extends Component
{
	
	
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
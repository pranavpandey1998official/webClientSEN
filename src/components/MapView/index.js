import React, { Component, useState } from 'react';
import style from './style.css';
import ReactMapGL, { Layer, Feature } from 'react-mapbox-gl';


class MapView extends Component
{
	
	state = 
	{
		viewport : {
		latitude: 45.4211,
		longitude : -75.6903, 
		zoom : 10,
		width: 400,
		height: 400
		}
	};
               
	
	render(){
		return(
			<div>
				<ReactMapGL {...this.state.viewport} onViewportChange={(viewport) => this.setState({viewport})} mapboxApiAccessToken = {process.env.local}/>
			</div>
		);

	}
	
}

export default MapView;
import React, { Component } from 'react';
import style from './style.css';
class MapView extends Component 
{

    mapfunc = () => {
        var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGtwMTkwMyIsImEiOiJjazhpdTB6dGEwOXpvM2xxbWFhY25vdHpuIn0.sFq07QKbSsb3vSOBGJZ8lg';
        var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
        }
        );

    }

	render() {
        
        
		return(
			<div id='map'>
				<h2>
					{this.mapfunc}
					</h2>
					
				<p>
					Maps ought to be coming here
				</p>
			</div>
        )
        
	}
}

export default MapView;
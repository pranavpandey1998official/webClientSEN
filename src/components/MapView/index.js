import React, { Component} from 'react';
import ReactMapGL, {Marker } from 'react-map-gl';
import { SERVER_URL } from '../../utils/constants';
 
 
 
class MapView extends Component
{
    
    async componentDidMount() {
        const url = SERVER_URL + '/property';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ properties: [...data.property] });
        
    }
     
 
    
    
    state = 
    {
        properties: [],
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
                
                
                <ReactMapGL {...this.state.viewport} 
                    onViewportChange={(viewport) => this.setState({viewport})} 
                    mapStyle = "mapbox://styles/dkp1903/ck8tqr43i02wy1ipb8qx8ubmt"
                    mapboxApiAccessToken = "pk.eyJ1IjoiZGtwMTkwMyIsImEiOiJjazhya3F3YWMwM2tsM21wbWY3ZTE0OWo1In0.bspO79N0Vc0Fgu1b4bqU5A"
                >
                
                {this.state.properties.length ? this.state.properties.map((property, propertyId) => ( 
                    <Marker 
                        longitude={parseFloat(property.longitude)}
                        latitude= {parseFloat(property.latitude)}
                        key={propertyId}>
                        <span className="icon has-text-info">
                            <i className="fa fa-home fa-lg" aria-hidden="true"></i>
                        </span>
                    </Marker>
                )): null}
                </ReactMapGL>
                
                
            </div>
        );
 
    }
    
}
 
export default MapView;

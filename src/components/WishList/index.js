import React, { Component } from 'react';
import Property from '../Shared/Property';

import { SERVER_URL } from '../../utils/constants';

class WishList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            properties: [],
        }          
     }

    async componentDidMount() {
        const url = SERVER_URL + '/property';
        const response = await fetch(url);
        const data = await response.json();
        this.setProperty(data.property);
    }

    setProperty = (property) => {
        this.setState({ properties: [...property], loading: false });
    } 

    renderProperties = () => {
        const { properties, loading } = this.state;
        if(loading) return (
            <div className=" has-text-success" style={{textAlign: "center"}}>
                <i className="fas fa-spinner fa-pulse fa-3x"></i>
            </div>
        );
        

        return (
           <>
           { properties.slice(0, this.state.visible).map((property, i) => (
                <Property 
                    key={property.propertyId}
                    type={property.type}
                    ownerPhoneNumber={property.ownerPhoneNumber}
                    city={property.city}
                    noOfBedrooms={property.noOfBedrooms}
                    totalSqft={property.totalSqft}
                    noOfBathrooms={property.noOfBathrooms}
                    price={property.price}
                    distanceToNearestGym={property.distanceToNearestGym}
                    distanceToNearestHospital={property.distanceToNearestHospital}
                    distanceToNearestSchool={property.distanceToNearestSchool}
                    furnished={property.furnished}
                    imageURL={SERVER_URL + '/' + property.imagePath}
                />))}
            </>
        )

    }
    render() {
        return (
                <div className="column">
                 <div className="column is-centered">
							<h1 class="is-size-2">
								Your Wishlisted Properties
							</h1>
                 <div class="container" style={{ marginLeft: 0 }}>
                    {this.renderProperties()}
                 </div>
                 </div>
                </div>
        );
    }
}

export default WishList;

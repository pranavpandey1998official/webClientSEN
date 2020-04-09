import React, { Component } from 'react';
import Property from './Property';
import Filter from './Filter';
import { withRouter } from 'react-router-dom';

import { SERVER_URL } from '../../utils/constants';

class Search extends Component 
{
    
    constructor(props) {
        super(props);
        this.state = {
            properties: [],
            visible: 3
        }          
    }

    async componentDidMount() {
        const url = SERVER_URL + '/property';
        const response = await fetch(url);
        const data = await response.json();
        this.setProperty(data.property);
    }

    setProperty = (property) => {
        this.setState({ properties: [...property] });
    } 

    loadmore = () => {
        this.setState({ visible: this.state.visible + 4 })
    }

    onClickProperty = (id) => {
        this.props.history.push(`/property/${id}`)
    }

    renderProperties = () => {
        const { properties } = this.state;
        if (!properties.length) return (<div> loading....</div>)

        return (
            <div class="container" style={{ marginLeft: 0 }}>
           { properties.slice(0, this.state.visible).map((property, i) => (
                <Property 
                    key={property.propertyId}
                    id={property.propertyId}
                    type={property.type}
                    onClick={this.onClickProperty}
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
                 <div class="block" style={{ textAlign: 'center' }}>
                     <a class="button is-primary" onClick={this.loadmore}>load more </a>
                </div>
        </div>
        )

    }
    render() {
        return (
            <div className="columns">
                <div className="column is-one-quarter is-offset-1">
                <div style={{ position: "fixed" }}>
                    <Filter 
                        setProperty ={this.setProperty}
                    />
                </div>
                </div>
                <div className="column">
                    {this.renderProperties()}
                </div>
            </div>
        );
    }
}

export default withRouter(Search);

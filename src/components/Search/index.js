import React, { Component } from 'react';
import Property from './Property';
import Filter from './Filter';

class Search extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            properties: [],
            visible: 3
        }          
    }

    async componentDidMount() {
        const url = "https://api.myjson.com/bins/uqvny";
        const response = await fetch(url);
        const data = await response.json();
    
        this.setState({ properties: [...data.results] });
    }

    loadmore = () => {
        this.setState({ visible: this.state.visible + 4 })
    }

    renderProperties = () => {
        const { properties } = this.state;
        if (!properties.length) return (<div> loading....</div>)

        return (
            <div class="container" style={{ marginLeft: 0 }}>
           { properties.slice(0, this.state.visible).map((property, i) => (
                <Property 
                    type="Bungalow"
                    ownerPhoneNumber="9664855492"
                    address='HoR Men,DA-IICT,Infocity,Gandhinagar-382007'
                    city='ahmedabad'
                    noOfBedroom={3}
                    totalSqft={1,890}
                    noOfBathrooms={3}
                    price="320"
                    distanceToNearestGym="12"
                    distanceToNearestHospital="12"
                    distanceToNearestSchool="12"
                    furnished={true}
                    imageURL="http://www.hdnicewallpapers.com/Walls/Big/House%20and%20Bungalow/Fabulous_Unique_Home_HD_Wallpapers.jpg"
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
                    <Filter />
                </div>
                </div>
                <div className="column">
                    <p>List of all properties</p>
                    {this.renderProperties()}
                </div>
            </div>
        );
    }
}

export default Search;

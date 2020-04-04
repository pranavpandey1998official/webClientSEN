import Property from '../../src/components/Search/Property';
import React from 'react';

import { SERVER_URL } from '../../src/utils/constants';

const property ={
	propertyId: 1,
	type: "flat",
	ownerPhoneNumber: "3737781205",
	city: "Ahmedabad",
	noOfBedrooms: 4,
	totalSqft: 7965,
	noOfBathrooms: 3,
	noOfBalconies: 5,
	price: 2071027,
	latitude: "23.42",
	longitude: "72.6",
	distanceToNearestGym: 8,
	distanceToNearestSchool: 2,
	distanceToNearestHospital: 8,
	furnished: 0,
	created_at: "2019-04-19T00:32:52.000Z",
	imagePath: "images/Property1_1.jpeg",
}

describe('Property Component', function(){

	it('renders correctly', function() {
		cy.request('https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css').then(response => {
			cy.mount(<Property 
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
			/>, { style: response.body })
			cy.get('[data-test-id="price"]').contains(property.price)
			cy.get('[data-test-id="totalSqft"]').contains(property.totalSqft)
			cy.get('[data-test-id="noOfBedrooms"]').contains(property.noOfBedrooms)
			cy.get('[data-test-id="city"]').contains(property.city)
			cy.get('[data-test-id="ownerPhoneNumber"]').contains(property.ownerPhoneNumber)
			cy.get('[data-test-id="distanceToNearestHospital"]').contains(property.distanceToNearestHospital)
			cy.get('[data-test-id="distanceToNearestGym"]').contains(property.distanceToNearestGym)
			cy.get('[data-test-id="distanceToNearestSchool"]').contains(property.distanceToNearestSchool)
		})
	})
})
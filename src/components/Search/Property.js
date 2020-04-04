import React, { Component } from 'react';

const Property = ({
  type,
  ownerPhoneNumber,
  city,
  noOfBedrooms,
  totalSqft,
  noOfBathrooms,
  price,
  distanceToNearestGym,
  distanceToNearestHospital,
  distanceToNearestSchool,
  furnished,
  imageURL,
}) =>  {
    return (
          <div className="box" data-test-id="Property">
            <article className="media">
              <div className="media-left">
                <figure className="image is-3x2">
                  <img style={{ height: 250, width: 350 }} src={imageURL} alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  
                  <div className="block">
                    <nav className="level" >

                      <div className="level-item" >
                        <h1 className="title is-5" data-test-id="price"> <i>₹ </i><strong>{price}</strong></h1>  </div>

                      <div className="level-item">
                        <h1 className="title is-4"><strong data-test-id="totalSqft"> {totalSqft}</strong></h1>
                        <span style={{ marginBottom: 0 }}><i>&nbsp;sq.ft</i></span>
                      </div>
                      <div className="level-item" >
                        <h1 className="title is-5" data-test-id="noOfBedrooms"><strong> {noOfBedrooms}</strong> </h1>
                        <span style={{ marginBottom: 0 }}><i> {' BHK'}</i></span>
                      </div>
                    </nav>

                  </div>
                  <div className="block">
                    <div className="content" data-test-id="type">
                      <i className="fas fa-building" /><strong>Type</strong>: {type}
                    </div>
                    <div className="content" data-test-id="city">
                      <i className="fas fa-map-marker-alt" /> {city}.
                    </div>
                    <div className="content" data-test-id="ownerPhoneNumber">
                      <i className="fas fa-mobile-alt" /> <strong>Contact Dealer</strong> : {ownerPhoneNumber}
                     </div>
                     <div data-test-id="furnished">
                      <i className="fas fa-couch" /> Furnished : {furnished}
                     </div>
                  </div>


                </div>
                <div className="content" data-test-id="noOfBathrooms">
                      <i className="fas fa-bath" /> {noOfBathrooms} Baths
                </div>
                <div className="content">
                    <span style={{ paddingRight: 60 }} data-test-id="distanceToNearestHospital">
                      <i className="fas fa-hospital" /> Distance to hospital : {distanceToNearestHospital}
                     </span>
                     <span style={{ paddingRight: 60 }} data-test-id="distanceToNearestGym">
                      <i className="fas fa-dumbbell" /> Distance to Gym : {distanceToNearestGym}
                     </span>
                    <span style={{ paddingRight: 60 }} data-test-id="distanceToNearestSchool">
                      <i className="fas fa-school" /> Distance to school : {distanceToNearestSchool}
                     </span>
                </div>

              </div>
            </article>       
      </div>

    )
  }
export default Property

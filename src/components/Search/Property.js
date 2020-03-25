import React, { Component } from 'react';

const Property = ({
  type,
  address,
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
  imageURL
}) =>  {

    return (
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-3x2">
                  <img style={{ height: 250, width: 250 }} src={imageURL} alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  
                  <div class="block">
                    <nav class="level" >

                      <p class="level-item" >
                        <h1 class="title is-5"><strong> ₹{price}lakh</strong></h1>  </p>

                      <p class="level-item">
                        <h1 class="title is-4"><strong> {totalSqft}</strong></h1>
                        <span style={{ marginBottom: 0 }}><light>&nbsp;sq.ft</light></span></p>
                      <p class="level-item" >
                        <h1 class="title is-5"><strong> {noOfBedrooms} BHK</strong></h1>  </p>
                    </nav>

                  </div>
                  <div class="block">
                    <div class="content">
                      <i className="fas fa-building" /><strong>Type</strong>: {type}
                    </div>
                    <div class="content">
                      <i className="fas fa-map-marker-alt" /> {address}.
                    </div>
                    <div class="content">
                      <i className="fas fa-mobile-alt" /> <strong>Contact Dealer</strong> : {ownerPhoneNumber}
                     </div>
                     <div>
                      <i className="fas fa-couch" /> Furnished : {furnished}
                     </div>
                  </div>


                </div>
                <div class="content">
                      <i className="fas fa-bath" /> {noOfBathrooms} Baths
                </div>
                <div class="content">
                    <span style={{ paddingRight: 60 }}>
                      <i className="fas fa-hospital" /> Distance to hospital : {distanceToNearestHospital}
                     </span>
                     <span style={{ paddingRight: 60 }}>
                      <i className="fas fa-dumbbell" /> Distance to Gym : {distanceToNearestGym}
                     </span>
                    <span style={{ paddingRight: 60 }}>
                      <i className="fas fa-school" /> Distance to school : {distanceToNearestSchool}
                     </span>
                </div>

              </div>
            </article>       
      </div>

    )
  }
export default Property

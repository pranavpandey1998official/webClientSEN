import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SERVER_URL } from '../../utils/constants';
import { Carousel } from 'react-responsive-carousel';
import ReactMapGL, { Marker } from 'react-map-gl';
import './style.css';


class Extended extends Component {

  constructor(props) {
    super(props)
    this.state = {
      property: null,
      viewport: {
        latitude: 23.0225,
        longitude: 72.5714,
        zoom: 10,
        width: "100vw",
        height: "70vh"
      },
    }
  }


  async componentDidMount() {

    const propertyId = this.props.match.params.id;

    const url = SERVER_URL + '/property/' + propertyId;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data.property);
    this.setState({ property: data.property[0] });
  }

  render() {
    const { property } = this.state;

    if (!property) {
      return <div>loding</div>
    }

    return (
      <div class="container">
        <div class="box">
          <div class="level">
            <div class="level-left">
              <h1 class="title is-3 " style={{ textAlign: "center" }}>
                Shiva Bungalows  </h1>
            </div>
            <div class="level-right">
              <span class="icon">
                <i className="far fa-star" />
              </span>
            </div>
          </div>
          <div class="tags">

            <span class="tag is-primary"  >RARP certified</span>
            <span class="tag is-success">For SALE</span>

            <div class="field is-grouped is-grouped-multiline">
              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-dark">Furnished</span>
                  <span class="tag is-info">{property.furnished}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block" >
          <div className="columns">
            <div className="column">
              <Carousel showArrows={true} infiniteLoop autoPlay showStatus={false} width="600px" >
                {property.images.map((image) => (
                  <figure key={image.photoId} className="image is-4by3">
                    <img src={`${SERVER_URL}/${image.imagePath}`} />
                  </figure>
                ))}
              </Carousel>
            </div>
            <div className="column">
              
          </div>
        </div>

      </div>

      <div class="block">
        <nav class="navbar">
          <div class="nav-menu is-active">
            <a href="#Description" class="nav-item is-tab" style={{ padding: 20 }}>DESCRIPTION</a>
            <a href="#Details" class="nav-item is-tab" style={{ padding: 20 }}>DETAILS</a>
            <a href="#Facilities" class="nav-item is-tab" style={{ padding: 20 }}>FACILITIES</a>
            <a href="#Location" class="nav-item is-tab" style={{ padding: 20 }}>LOCATION</a>
            <a href="#Reviews" class="nav-item is-tab" style={{ padding: 20 }}>REVIEWS</a>

          </div>
        </nav>
      </div>
      <div class="block">
        <section id="Description" class="hero  is-light " style={{ border: "1px" }}>
          <div class="hero-body">

            <h1 class="title" style={{ MarginTop: "0px" }}>
              Description
               </h1>
            <p>
              Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes
              </p>

          </div>
        </section>
        <section id="Details" class="hero  is-light ">
          <div class="hero-body">

            <h1 class="title">
              Details
              </h1>
            <div class='container'>
              <div class="content">
                <div class="level">
                  <div class="level-left">
                    <ul>
                      <li><strong>Plot Area:</strong> {property.totalSqft} </li>
                      <li><strong>Bathrooms:</strong> {property.noOfBathrooms}</li>
                      <li><strong>Bedrooms:</strong> {property.noOfBedrooms}</li>
                    </ul>
                  </div>
                  <div class="level-center">
                    <ul>
                      <li><strong>Property Age:</strong> 5 year(s)</li>
                      <li><strong>Price:</strong> {property.price}</li>
                      <li><strong>Pincode:</strong> 382007</li>
                    </ul>
                  </div>
                  <div class="level-right">
                    <ul>
                      <li><strong>City:</strong> {property.city}</li>
                      <li><strong>Property Owner:</strong> SEN</li>
                      <li><strong>Contact:</strong>{property.ownerPhoneNumber}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <section id="Facilities" class="hero  is-light ">
          <div class="hero-body">

            <h1 class="title" style={{ MarginTop: "0px" }}>
              Aminent Facilities
            </h1>
            <div class="content">
              <div class="level-left">
                <ul>
                  <li><strong>Swimming pool</strong> </li>
                  <li><strong>Basement</strong></li>
                  <li><strong>Gym</strong> </li>
                </ul>
              </div>
            </div>


          </div>
        </section>
        <section id="Location" class="hero  is-light ">
          <div class="hero-body">

            <h1 class="title">
              Location
            </h1>
            <div class='card-content is-flex' style={{ justifyContent: "center" }}>
            <ReactMapGL {...this.state.viewport}
              longitude={parseFloat(property.longitude)}
              latitude={parseFloat(property.latitude)}
              onViewportChange={(viewport) => this.setState({ viewport })}
              mapStyle = "mapbox://styles/mapbox/streets-v11"
              mapboxApiAccessToken = "pk.eyJ1IjoiZGtwMTkwMyIsImEiOiJjazhya3F3YWMwM2tsM21wbWY3ZTE0OWo1In0.bspO79N0Vc0Fgu1b4bqU5A"
        >
                <Marker
                longitude={parseFloat(property.longitude)}
                latitude={parseFloat(property.latitude)}
              >
                <span className="icon has-text-info">
                  <i className="fa fa-home fa-lg" aria-hidden="true"></i>
                </span>
              </Marker>

              </ReactMapGL>
            </div>
          </div>

        </section>

      </div>
        </div >
    )
  }
}

export default withRouter(Extended);

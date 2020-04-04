import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SERVER_URL } from '../../utils/constants';

class Extended extends Component {
  
  constructor(props){
    super(props)
    this.state={
      property:null
    }
  }

  async componentDidMount() {
    const propertyId= this.props.match.params.id;
    const url = SERVER_URL + '/property/'+propertyId;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({property: data.property});
  }
  
  render() {
    return (
      <div class="container" >
        <div class="block">
          <h1 class="title is-4" style={{ paddingLeft: 40 }}>
            Shiva Bungalows</h1>
            {/* sample here */}
            <i className="fas fa-building" />
        </div>
        <div class='card-content is-flex' style={{ justifyContent: "center" }}>
          <figure class="image is-5x4 " >
            <img style={{ height: 300, width: 300 }} src="http://www.hdnicewallpapers.com/Walls/Big/House%20and%20Bungalow/Fabulous_Unique_Home_HD_Wallpapers.jpg" alt="Image" />
          </figure>
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
          <section id="Description" class="hero  is-light ">
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
                        <li><strong>Plot Area:</strong> 500 sq.ft </li>
                        <li><strong>Bathrooms:</strong> 3</li>
                        <li><strong>Bedrooms:</strong> 2</li>
                      </ul>
                    </div>
                    <div class="level-center">
                      <ul>
                        <li><strong>Property Age:</strong> 5 year(s)</li>
                        <li><strong>Price:</strong> 15,000</li>
                        <li><strong>Pincode:</strong> 382007</li>
                      </ul>
                    </div>
                    <div class="level-right">
                      <ul>
                        <li><strong>City:</strong> Ahmedabad</li>
                        <li><strong>Property Owner:</strong> SEN</li>
                        <li><strong>Contact:</strong> 9664855492</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
          <section id="Facilties" class="hero  is-light ">
            <div class="hero-body">

              <h1 class="title" style={{ MarginTop: "0px" }}>
                Aminent Facilities
      </h1>


            </div>
          </section>
          <section id="Location" class="hero  is-light ">
            <div class="hero-body">

              <h1 class="title">
                Location
      </h1>
              <div class='card-content is-flex' style={{ justifyContent: "center" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.497563754517!2d72.62677371497078!3d23.188530984869374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c9618d2c5%3A0xc54de484f986b1fa!2sDA-IICT!5e0!3m2!1sen!2sin!4v1586021912902!5m2!1sen!2sin" style={{ width: "300", height: "350" }}></iframe>

              </div>
            </div>

          </section>

        </div>
      </div>
    );
  }
}

export default withRouter(Extended);

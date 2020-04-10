import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SERVER_URL } from '../../utils/constants';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';


class Extended extends Component {
  
  constructor(props){
    super(props)
    this.state={
      properties:[]
    }
  }


  async componentDidMount() {
    
    const propertyId= this.props.match.params.id;
    
    const url = SERVER_URL + '/property/'+propertyId;
   
    const response = await fetch(url);
    const data = await response.json();
    console.log(url);
    this.setState({properties: data.property});
  }
  
  render() {
    
    return (
      <div class="container">
       
       
     {this.state.properties.map((property)=>(
       <div class="container">
      <div class="box"> 
          <div class="level">
            <div class="level-left">
          <h1 class="title is-3 " style={{ textAlign:"center" }}>
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
         <Carousel infiniteLoop useKeyboardArrows autoPlay width="600px">
        <div >
      <img src={SERVER_URL + '/' + property.imagePath} />
      <p className="legend">Legend 1</p>  
    </div>
    <div >
      <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div >
      <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
      <p className="legend">Legend 3</p>
    </div>
    <div >
      <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
      <p className="legend">Legend 4</p>
    </div>
        </Carousel>
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
          <section id="Description" class="hero  is-light " style={{border:"1px"}}>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.497563754517!2d72.62677371497078!3d23.188530984869374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c9618d2c5%3A0xc54de484f986b1fa!2sDA-IICT!5e0!3m2!1sen!2sin!4v1586021912902!5m2!1sen!2sin" style={{ width: "300", height: "350" }}></iframe>

              </div>
            </div>

          </section>

        </div>
        </div>
        ))}
</div>
    )
  }
}

export default withRouter(Extended);

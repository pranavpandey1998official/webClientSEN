import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Properties extends Component{
        state ={
            
            properties : [],
            visible :3

        }
        async componentDidMount() {
            const url ="https://api.myjson.com/bins/uqvny";
            const response = await fetch(url);
            const data=await response.json();
            
            this.setState({properties : data.results});
        }
        loadmore = () => {
             this.setState({visible:this.state.visible+4})
           
        }
       
    render(){
    
       
        if(!this.state.properties.length)
        return(<div> loading....</div>)

        return(
            <div class="container" style={{marginLeft:0}}>
       
            {this.state.properties.slice(0,this.state.visible).map((property,i) => (

<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-3x2">
        <img  style={{height:250,width:250}} src="http://www.hdnicewallpapers.com/Walls/Big/House%20and%20Bungalow/Fabulous_Unique_Home_HD_Wallpapers.jpg" alt="Image"/>
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="block">
          <nav class="level">
            <div class="level-left">
      <h1 class="title is-4">
          <strong style={{color:'black'}}>Shiva Bungalows</strong></h1> 
          </div>
          <div class="level-right">
          <FontAwesomeIcon icon={['far', 'star']} />
            </div>
          </nav>
          </div>

          <div class="block">
            <nav class="level" >
            
            <p class="level-item" >
              <h1 class="title is-5"><strong> ₹3.2cr</strong></h1>  </p>
            
              <p class="level-item">
               <h1 class="title is-4"><strong> 1,890</strong></h1>
               <span style={{marginBottom:0}}><light>&nbsp;sq.ft</light></span></p>
               <p class="level-item" >
              <h1 class="title is-5"><strong> 3 BHK</strong></h1>  </p>
              
              
            </nav>
            
          </div>
          <div class="block">
            <div class="content">
            <FontAwesomeIcon icon="building" /><strong>  Type</strong>: Bungalow
            </div>
            <div class="content">
            <FontAwesomeIcon icon="map-marker-alt" /> HoR Men,DA-IICT,Infocity,Gandhinagar-382007.
            </div>
            <div class="content">
              <FontAwesomeIcon icon="mobile-alt" /> <strong>Contact Dealer</strong> : 9664855492
            </div>
          </div>
          
         
      </div>
      <nav class="level is-mobile">
        <nav class="level">
         <span style={{paddingRight:60}}>
          <FontAwesomeIcon icon="bath" /> 3 Baths
          </span>
          <span style={{paddingRight:60}}>
         <FontAwesomeIcon icon="dumbbell" /> Distance to nearest Gym : 
         </span>
         <span style={{paddingRight:60}}>
         <FontAwesomeIcon icon="school" /> Distance to nearest school : 
         </span>
        
        </nav>
        </nav>
        <nav class="level is-mobile">
        <nav class="level">
        <span style={{paddingRight:60}}>
         <FontAwesomeIcon icon="hospital" /> Distance to nearest hospital : 
         </span>
         <span style={{paddingRight:60}}>
         <FontAwesomeIcon icon="couch" /> Furnished : 
         </span>
</nav>
</nav>

            </div>
            </article>
</div>
            ))
    }
         <div class="block" style={{textAlign:'center'}}>
         <a class="button is-primary" onClick={this.loadmore}>load more </a>
         </div>
            </div>

        )
  }}
  export default Properties

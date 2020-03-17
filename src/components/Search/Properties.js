import React, { Component } from 'react';


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
           <div><h1> properties</h1>
          
            <div><ul className="person">
         {this.state.properties.slice(0,this.state.visible).map((property,i) => (
             <div key ={`some-property -${i}`}>
                   <img src={property.picture.large}/>
                 <div>AreaType: {property.Areatype}</div>
                 <div> Location : {property.location.street.number},  
                {property.location.street.name}</div>
                <div>city:{property.location.city}</div>
                <div>state:{property.location.state}</div>
                <div>country:{property.location.country}</div>
                <div>postcode:{property.location.postcode}</div>
              
             </div>
         ))
        }
         </ul>
         </div>
         <button onClick={this.loadmore}>load more </button>
         </div>
        );
    }

    }

export default Properties


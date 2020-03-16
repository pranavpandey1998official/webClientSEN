import React, { Component } from 'react';

class Properties extends Component{
        state ={
            
            people : [],
            visible :3

        }
        async componentDidMount() {
            const url ="https://api.randomuser.me/?results=100";
            const response = await fetch(url);
            const data=await response.json();
            
            this.setState({people : data.results});
        }
        loadmore = () => {
             this.setState({visible:this.state.visible+4})
           
        }
       
    render(){
       
        if(!this.state.people.length)
        return(<div> loading....</div>)

        return(
           <div><h1> Properties</h1>
          
            <div><ul className="person" >
         {this.state.people.slice(0,this.state.visible).map((person,i) => (
             <div key ={`some-person -${i}`}>
                 <div>{person.name.title}</div>
                 <div> {person.name.first}</div>
                <div>{person.name.last}</div>
                <img src={person.picture.large}/>
               
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
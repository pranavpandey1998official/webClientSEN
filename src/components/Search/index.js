import React, { Component } from 'react';
import Properties from './Properties';
import Filter from './Filter';

class App extends Component
{
    render()
    {
        return (
            <div className="columns">
                <div className="column is-one-quarter is-offset-1">
                <div style={{ position: "fixed"}}>
                    <Filter />
                </div>
                </div>
                <div className="column is-offset-1">
                    <p>List of all properties</p>
                    <Properties />
                    
                </div>
            </div>
        );
    }
}

export default App;

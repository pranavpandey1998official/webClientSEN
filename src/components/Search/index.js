import React, { Component } from 'react';
import Properties from './Properties';

class Search extends Component
{
    render()
    {
        return (
            <div>
                
                <div>
                    <p>List of all properties</p>
                    <Properties />
                    
                </div>
            </div>
        );
    }
}

export default Search;

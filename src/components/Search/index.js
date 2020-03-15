import React, { Component } from 'react';
import Properties from './Properties';
import Searching from './Searching';
import Filter from './Filter';

class Search extends Component
{
    render()
    {
        return (
            <div>
                <div>
                    <Filter />
                    <Searching />
                </div>
                <div>
                    <p>List of all properties</p>
                    <Properties />
                    
                </div>
            </div>
        );
    }
}

export default Search;
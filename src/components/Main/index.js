import React, { Component } from 'react';
import Properties from './Properties';
import Search from './Search';
import Filter from './Filter';

class Main extends Component
{
    render()
    {
        return (
            <div>
                <div>
                    <Filter />
                    <Search />
                </div>
                <div>
                    <p>List of all properties</p>
                    <Properties />
                    
                </div>
            </div>
        );
    }
}

export default Main;
import React, { Component } from 'react';
import Properties from './Properties';

class Main extends Component
{
    render()
    {
        return (
                <div >
                    <p>List of all properties</p>
                    <Properties />
                    <div>
                        Filter
                    </div>
                </div>
        );
    }
}

export default Main;
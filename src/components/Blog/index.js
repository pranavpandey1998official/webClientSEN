import React, { Component } from 'react';
import style from './style.css';

class Blog extends Component {
	render() {
		return(
			<div>
				<h2 className='blogTitle' style={{style}}>
					Is real estate worth investing in, today?
				</h2>
					
				<p className='blogContent' style={{style}}>
					The answer is yes; it is and always will be. <br />
					An accurate figure states that there are almost 50000 births per day in India. 	
				</p>
			</div>
		)
	}
}

export default Blog;
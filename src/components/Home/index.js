import React, { Component } from 'react';

class Home extends Component {
	render() {
		return(
			<div>
				<AutoComplete
                    			dropdownMatchSelectWidth={252}
                    			style={{ width: 300 }}
                    			options={[]}
                		>
                    		<Input.Search size="large" placeholder="input here" onSearch={value => console.log(value)} />
                		</AutoComplete>
				<div>Home Page</div>

			</div>
		)
	}
}

export default Home;

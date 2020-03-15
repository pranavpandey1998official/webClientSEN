import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Input, AutoComplete } from 'antd';
import { connect } from 'react-redux';
import {
    useLocation,
    Link,
    withRouter
  } from "react-router-dom";
import { logoutUser } from '../../actions/auth';
const { Search } = Input;
const { Header, Content, Footer } = Layout;

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
